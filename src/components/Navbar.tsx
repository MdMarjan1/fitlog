"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePlan } from "@/context/PlanContext";
import { LogoIcon } from "./Icons";

const links = [
  { href: "/#library", label: "Workout" },
  { href: "/my-plan", label: "My Plan" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = usePlan();

  return (
    <header className="sticky top-0 z-50 border-b border-base-300 bg-base-100/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-accent">
          <LogoIcon className="h-6 w-6" />
          <span className="font-display text-lg font-bold tracking-wide text-white">
            FITLOG
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => {
            const isMyPlan = link.href === "/my-plan";
            const active = isMyPlan
              ? pathname === "/my-plan"
              : pathname === "/";
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold uppercase tracking-wide transition-colors ${
                  active ? "text-accent" : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/my-plan"
            className="badge badge-lg gap-1 border-none bg-accent px-3 py-3 font-bold text-black"
          >
            Plan {plan.length}
          </Link>
          <Link
            href="/my-plan"
            className="badge badge-lg gap-1 border border-white/30 bg-transparent px-3 py-3 font-bold text-white"
          >
            Saved {saved.length}
          </Link>
        </div>
      </nav>
    </header>
  );
}
