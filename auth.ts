import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { cookies } from "next/headers";
import { parse } from "cookie";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Google],

    callbacks: {
        async signIn({ user, account }) {

            const response = await fetch(
                `${process.env.BACKEND_URL}/login`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify({
                        name: user.name,
                        email: user.email,
                    }),
                }
            );

            if (!response.ok) {
                return false;
            }

            const setCookieHeader = response.headers.get("set-cookie");

            if (setCookieHeader) {

                const parsedCookie = parse(setCookieHeader);

                const cookieStore = await cookies();

                cookieStore.set(
                    "refreshToken",
                    parsedCookie.refreshToken || "",
                    {
                        httpOnly: true,
                        secure: process.env.NODE_ENV === "production",
                        sameSite:
                            process.env.NODE_ENV === "production"
                                ? "none"
                                : "lax",
                        path: "/",
                    }
                );
            }

            const data = await response.json();

            (user as any).accessToken = data.accessToken;

            return true;
        },

        jwt({ token, user, account }) {

            if (account?.id_token) {
                token.idToken = account.id_token;
            }

            if ((user as any)?.accessToken) {
                token.accessToken = (user as any).accessToken;
            }

            return token;
        },

        session({ session, token }) {
            return {
                ...session,
                accessToken: token.accessToken,
                token,
            };
        },
    },
});