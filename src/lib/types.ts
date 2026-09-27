export interface Workout {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number; // minutes
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
}

export type SortKey = "duration" | "caloriesBurned" | "rating";

export type PlanTab = "plan" | "saved";

export interface PlanItem extends Workout {
  done?: boolean;
}
