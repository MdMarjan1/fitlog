import { LogoIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-base-300 bg-base-100">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-white/50 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-white">
          <LogoIcon className="h-5 w-5 text-accent" />
          <span className="font-display font-bold tracking-wide">FITLOG</span>
        </div>
        <p className="text-center">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}
