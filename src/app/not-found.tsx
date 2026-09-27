import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-32 text-center">
      <p className="font-display text-7xl font-bold text-accent">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold uppercase text-white">
        Page Not Found
      </h1>
      <p className="mt-2 max-w-sm text-sm text-white/50">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="btn mt-8 rounded-full border-none bg-accent px-6 text-black hover:bg-accent/90"
      >
        Go to workouts
      </Link>
    </div>
  );
}
