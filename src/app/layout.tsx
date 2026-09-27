import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { PlanProvider } from "@/context/PlanContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FitLog — Workout Library",
  description:
    "FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="fitlog">
      <body className="flex min-h-screen flex-col bg-base-100">
        <PlanProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster
            position="bottom-center"
            toastOptions={{
              style: {
                background: "#1b1f27",
                color: "#fff",
                border: "1px solid #2a2f3a",
              },
            }}
          />
        </PlanProvider>
      </body>
    </html>
  );
}
