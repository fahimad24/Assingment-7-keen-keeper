import Link from "next/link";

export default function StatsNotFound() {
    return (
        <main className="min-h-[70vh] bg-base-100 px-6 py-16">
            <section className="mx-auto flex min-h-[60vh] max-w-3xl items-center justify-center">
                <div className="card w-full border border-base-300 bg-white shadow-xl">
                    <div className="card-body items-center gap-5 py-16 text-center">
                        <p className="text-5xl font-semibold uppercase tracking-[0.35em] text-green">
                            404
                        </p>
                        <h1 className="text-4xl font-bold text-base-content md:text-5xl">
                            Stats page not found
                        </h1>
                        <p className="max-w-xl text-base text-base-content/70 md:text-lg">
                            The stats route you requested does not exist. Return to the main dashboard or
                            open the analytics page again.
                        </p>

                        <div className="flex flex-col gap-3 sm:flex-row">
                            <Link href="/" className="btn btn-primary">
                                Back to home
                            </Link>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}