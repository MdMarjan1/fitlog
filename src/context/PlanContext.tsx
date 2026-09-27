"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import toast from "react-hot-toast";
import { PlanItem, Workout } from "@/lib/types";
import { readStorage, writeStorage } from "@/lib/storage";

const PLAN_KEY = "fitlog:plan";
const SAVED_KEY = "fitlog:saved";
export const PLAN_CAP = 5;

interface PlanContextValue {
  plan: PlanItem[];
  saved: PlanItem[];
  hydrated: boolean;
  addToPlan: (workout: Workout) => void;
  addToSaved: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
  toggleDone: (id: number) => void;
  isInPlan: (id: number) => boolean;
  isInSaved: (id: number) => boolean;
  isPlanFull: boolean;
}

const PlanContext = createContext<PlanContextValue | undefined>(undefined);

export function PlanProvider({ children }: { children: ReactNode }) {
  const [plan, setPlan] = useState<PlanItem[]>([]);
  const [saved, setSaved] = useState<PlanItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // hydrate from localStorage once, on mount
  useEffect(() => {
    setPlan(readStorage<PlanItem[]>(PLAN_KEY, []));
    setSaved(readStorage<PlanItem[]>(SAVED_KEY, []));
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) writeStorage(PLAN_KEY, plan);
  }, [plan, hydrated]);

  useEffect(() => {
    if (hydrated) writeStorage(SAVED_KEY, saved);
  }, [saved, hydrated]);

  const isInPlan = (id: number) => plan.some((w) => w.id === id);
  const isInSaved = (id: number) => saved.some((w) => w.id === id);
  const isPlanFull = plan.length >= PLAN_CAP;

  const addToPlan = (workout: Workout) => {
    if (isInPlan(workout.id)) {
      toast("Already in today's plan");
      return;
    }
    if (isPlanFull) {
      toast.error("Today's plan is full (5 lifts max)");
      return;
    }
    setPlan((prev) => [...prev, { ...workout, done: false }]);
    toast.success("Added to today's plan");
  };

  const addToSaved = (workout: Workout) => {
    if (isInSaved(workout.id)) {
      toast("Already saved");
      return;
    }
    setSaved((prev) => [...prev, { ...workout }]);
    toast.success("Saved for later");
  };

  const removeFromPlan = (id: number) => {
    setPlan((prev) => prev.filter((w) => w.id !== id));
    toast("Removed from today's plan");
  };

  const removeFromSaved = (id: number) => {
    setSaved((prev) => prev.filter((w) => w.id !== id));
    toast("Removed from saved");
  };

  const toggleDone = (id: number) => {
    setPlan((prev) =>
      prev.map((w) => (w.id === id ? { ...w, done: !w.done } : w))
    );
    const target = plan.find((w) => w.id === id);
    toast.success(target?.done ? "Marked as not done" : "Marked as done");
  };

  return (
    <PlanContext.Provider
      value={{
        plan,
        saved,
        hydrated,
        addToPlan,
        addToSaved,
        removeFromPlan,
        removeFromSaved,
        toggleDone,
        isInPlan,
        isInSaved,
        isPlanFull,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  const ctx = useContext(PlanContext);
  if (!ctx) throw new Error("usePlan must be used inside <PlanProvider>");
  return ctx;
}
