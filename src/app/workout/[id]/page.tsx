import { notFound } from "next/navigation";
import { getWorkoutById } from "@/lib/api";
import SpecsTable from "@/components/SpecsTable";
import DetailActions from "@/components/DetailActions";

export default async function WorkoutDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const workout = await getWorkoutById(params.id);

  if (!workout) notFound();

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="aspect-square w-full overflow-hidden rounded-2xl bg-base-800">
          <img
            src={workout.image}
            alt={workout.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <h1 className="font-display text-3xl font-bold uppercase text-white sm:text-4xl">
            {workout.name}
          </h1>
          <p className="mt-3 text-sm text-white/60">{workout.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {workout.muscleGroups.map((tag) => (
              <span
                key={tag}
                className="badge border-none bg-accent/90 font-bold uppercase tracking-wide text-black"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6">
            <SpecsTable workout={workout} />
          </div>

          <div className="mt-6">
            <h2 className="font-display text-sm font-bold uppercase tracking-wide text-white">
              Instructions
            </h2>
            <ol className="mt-3 space-y-2">
              {workout.instructions.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm text-white/70">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-black">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-8">
            <DetailActions workout={workout} />
          </div>
        </div>
      </div>
    </section>
  );
}
