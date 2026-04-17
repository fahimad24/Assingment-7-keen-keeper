"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }) {
    useEffect(() => {
        // Helpful during development and debugging.
        console.error(error);
    }, [error]);

    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(36,77,63,0.18),transparent_45%),linear-gradient(180deg,#f8fafc_0%,#eef4f1_100%)] px-6 py-16">
            <section className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-3xl items-center justify-center">
                <div className="card w-full border border-base-300/70 bg-base-100/90 shadow-2xl backdrop-blur">
                    <div className="card-body items-center gap-6 py-16 text-center">
                        <div className="space-y-2">
                            <p className="text-3xl font-semibold uppercase tracking-[0.3em] text-green md:text-4xl">
                                Oops
                            </p>
                            <h1 className="text-4xl font-black text-base-content md:text-6xl">
                                Something went wrong
                            </h1>
                            <p className="mx-auto max-w-xl text-base text-base-content/70 md:text-lg">
                                An unexpected error occurred while loading this page. You can try
                                again or go back to the home page.
                            </p>
                        </div>

                        <div className="flex flex-col justify-center gap-3 sm:flex-row">
                            <button
                                type="button"
                                onClick={reset}
                                className="btn bg-green text-white min-w-40"
                            >
                                Try again
                            </button>

                            <Link
                                href="/"
                                className="btn btn-outline border-green text-green min-w-40"
                            >
                                Back to home
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
