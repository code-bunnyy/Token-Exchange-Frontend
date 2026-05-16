"use client";

import { signIn } from "next-auth/react";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#f6f3ee] text-[#171512]">
            <section className="grid min-h-screen lg:grid-cols-[1.05fr_0.95fr]">
                <div className="relative hidden overflow-hidden bg-[#17201d] px-12 py-10 text-white lg:flex lg:flex-col lg:justify-between">
                    <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_20%_20%,#f3b562_0,transparent_28%),radial-gradient(circle_at_75%_35%,#6db6a3_0,transparent_24%),linear-gradient(135deg,#17201d,#283731_65%,#111613)]" />
                    <div className="relative flex items-center gap-3">
                        <span className="flex size-10 items-center justify-center rounded-lg bg-white text-lg font-bold text-[#17201d]">
                            A
                        </span>
                        <span className="text-lg font-semibold">Atlas</span>
                    </div>

                    <div className="relative max-w-xl">
                        <p className="mb-5 text-sm font-medium uppercase tracking-[0.28em] text-[#f3b562]">
                            Welcome Back
                        </p>
                        <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight">
                            Sign in to manage your workspace with clarity.
                        </h1>
                        <p className="mt-6 max-w-md text-base leading-7 text-white/75">
                            Keep projects, reports, and team decisions in one calm place built
                            for focused daily work.
                        </p>
                    </div>

                    <div className="relative grid grid-cols-3 gap-4 text-sm text-white/75">
                        <div>
                            <strong className="block text-2xl font-semibold text-white">
                                24k
                            </strong>
                            active users
                        </div>
                        <div>
                            <strong className="block text-2xl font-semibold text-white">
                                99.9%
                            </strong>
                            uptime
                        </div>
                        <div>
                            <strong className="block text-2xl font-semibold text-white">
                                4.9
                            </strong>
                            rating
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center px-5 py-10 sm:px-8">
                    <div className="w-full max-w-md">
                        <div className="mb-10 flex items-center gap-3 lg:hidden">
                            <span className="flex size-10 items-center justify-center rounded-lg bg-[#17201d] text-lg font-bold text-white">
                                A
                            </span>
                            <span className="text-lg font-semibold">Atlas</span>
                        </div>

                        <div className="mb-8">
                            <p className="mb-3 text-sm font-semibold text-[#2f7d6d]">
                                Secure login
                            </p>
                            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                                Good to see you again
                            </h2>
                            <p className="mt-3 text-sm leading-6 text-[#686057]">
                                Enter your details to continue to your dashboard.
                            </p>
                        </div>

                        <form className="space-y-5">
                            <div>
                                <label
                                    className="mb-2 block text-sm font-medium text-[#342f29]"
                                    htmlFor="email"
                                >
                                    Email address
                                </label>
                                <input
                                    className="h-12 w-full rounded-lg border border-[#d8d0c5] bg-white px-4 text-sm outline-none transition focus:border-[#2f7d6d] focus:ring-4 focus:ring-[#2f7d6d]/15"
                                    id="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    type="email"
                                />
                            </div>

                            <div>
                                <div className="mb-2 flex items-center justify-between gap-4">
                                    <label
                                        className="block text-sm font-medium text-[#342f29]"
                                        htmlFor="password"
                                    >
                                        Password
                                    </label>
                                    <a
                                        className="text-sm font-medium text-[#2f7d6d] hover:text-[#215d51]"
                                        href="#"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                                <input
                                    className="h-12 w-full rounded-lg border border-[#d8d0c5] bg-white px-4 text-sm outline-none transition focus:border-[#2f7d6d] focus:ring-4 focus:ring-[#2f7d6d]/15"
                                    id="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    type="password"
                                />
                            </div>

                            <div className="flex items-center justify-between gap-4">
                                <label className="flex items-center gap-3 text-sm text-[#514a42]">
                                    <input
                                        className="size-4 rounded border-[#cfc5b8] accent-[#2f7d6d]"
                                        type="checkbox"
                                    />
                                    Remember me
                                </label>
                            </div>

                            <button
                                className="h-12 w-full cursor-pointer rounded-lg bg-[#17201d] px-5 text-sm font-semibold text-white transition hover:bg-[#24322d] focus:outline-none focus:ring-4 focus:ring-[#17201d]/20"
                                type="submit"
                            >
                                Sign in
                            </button>
                        </form>

                        <div className="my-7 flex items-center gap-4">
                            <span className="h-px flex-1 bg-[#ded6cc]" />
                            <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#857c70]">
                                or
                            </span>
                            <span className="h-px flex-1 bg-[#ded6cc]" />
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                            <button
                                className="flex h-12 cursor-pointer items-center justify-center gap-3 rounded-lg border border-[#d8d0c5] bg-white px-4 text-sm font-semibold text-[#342f29] transition hover:bg-[#fbfaf8]"
                                onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
                                type="button"
                            >
                                <svg
                                    aria-hidden="true"
                                    className="size-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M21.8 12.2c0-.7-.1-1.3-.2-1.9h-9.4v3.8h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2a9.7 9.7 0 0 0 3-7.4Z"
                                        fill="#4285F4"
                                    />
                                    <path
                                        d="M12.2 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1a5.9 5.9 0 0 1-5.5-4H3.4v2.6A10 10 0 0 0 12.2 22Z"
                                        fill="#34A853"
                                    />
                                    <path
                                        d="M6.7 14.1a6 6 0 0 1 0-3.8V7.7H3.4a10 10 0 0 0 0 9l3.3-2.6Z"
                                        fill="#FBBC05"
                                    />
                                    <path
                                        d="M12.2 6.2c1.5 0 2.8.5 3.8 1.5l2.9-2.9A9.7 9.7 0 0 0 12.2 2a10 10 0 0 0-8.8 5.7l3.3 2.6a5.9 5.9 0 0 1 5.5-4.1Z"
                                        fill="#EA4335"
                                    />
                                </svg>
                                Google
                            </button>
                            <button className="flex h-12 cursor-pointer items-center justify-center gap-3 rounded-lg border border-[#d8d0c5] bg-white px-4 text-sm font-semibold text-[#342f29] transition hover:bg-[#fbfaf8]">
                                <svg
                                    aria-hidden="true"
                                    className="size-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.9c-2.9.6-3.5-1.2-3.5-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.7-1.3-2.3-.3-4.7-1.2-4.7-5a3.9 3.9 0 0 1 1-2.7 3.6 3.6 0 0 1 .1-2.7s.9-.3 2.8 1a9.7 9.7 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1a3.6 3.6 0 0 1 .1 2.7 3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.8-4.7 5 .4.3.7 1 .7 2V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />
                                </svg>
                                GitHub
                            </button>
                        </div>

                        <p className="mt-8 text-center text-sm text-[#686057]">
                            New here?{" "}
                            <a className="font-semibold text-[#2f7d6d] hover:text-[#215d51]" href="#">
                                Create an account
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
