import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-5 text-center">
      <h1 className="text-5xl font-extrabold">Page not found</h1>
      <p className="mt-4 text-lg text-ink-soft">
        This page does not exist. Let&rsquo;s take you back home.
      </p>
      <Link
        href="/"
        className="btn-primary"
      >
        Back to home
      </Link>
    </section>
  );
}
