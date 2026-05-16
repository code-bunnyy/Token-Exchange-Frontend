"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LogoutButton } from "./logout-button";

export default function DashboardPage() {
    const router = useRouter();
    const { data: session, status } = useSession();
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/");
        }
    }, [router, status]);

    if (status === "loading") {
        return (
            <main className="flex min-h-screen items-center justify-center bg-[#f6f3ee] text-[#171512]">
                Loading...
            </main>
        );
    }

    if (!session) {
        return null;
    }

    const accessToken =
        "accessToken" in session
            ? session.accessToken
            : null;

    const tokenText = String(
        accessToken ?? "No access token found."
    );

    async function copyToken() {
        await navigator.clipboard.writeText(tokenText);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    }

    async function sendTokenToBackend() {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/check-token`,
                {
                    method: "GET",
                    credentials: "include",
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );

            const data = await response.json();

            console.log(data);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main className="min-h-screen bg-[#f6f3ee] px-5 py-10 text-[#171512]">
            <section className="mx-auto max-w-4xl">

                <div className="mb-8 flex items-center justify-between gap-4">
                    <div>
                        <p className="text-sm font-semibold text-[#2f7d6d]">
                            Logged in
                        </p>

                        <h1 className="mt-2 text-3xl font-semibold">
                            Dashboard
                        </h1>
                    </div>

                    <LogoutButton />
                </div>

                <div className="mb-6 flex gap-4">
                    <button
                        className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white"
                        onClick={sendTokenToBackend}
                        type="button"
                    >
                        Send Token To Backend
                    </button>
                </div>

                <div className="mb-6 rounded-lg border border-[#d8d0c5] bg-white p-5">

                    <div className="mb-4 flex items-center justify-between gap-4">
                        <h2 className="text-lg font-semibold">
                            Backend Access Token
                        </h2>

                        <button
                            className="cursor-pointer rounded-lg bg-[#17201d] px-4 py-2 text-sm font-semibold text-white hover:bg-[#24322d]"
                            onClick={copyToken}
                            type="button"
                        >
                            {copied ? "Copied" : "Copy"}
                        </button>
                    </div>

                    <pre className="max-h-64 overflow-auto whitespace-pre-wrap break-all rounded-lg bg-[#17201d] p-4 text-sm text-white">
                        {tokenText}
                    </pre>
                </div>

                <div className="rounded-lg border border-[#d8d0c5] bg-white p-5">

                    <h2 className="mb-4 text-lg font-semibold">
                        Session Data
                    </h2>

                    <pre className="max-h-[70vh] overflow-auto rounded-lg bg-[#17201d] p-4 text-sm text-white">
                        {JSON.stringify(session, null, 2)}
                    </pre>
                </div>
            </section>
        </main>
    );
}