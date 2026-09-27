export default function HomeLoading() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-32">
      <span className="loading loading-spinner loading-lg text-accent" />
      <p className="mt-4 text-sm uppercase tracking-wide text-white/50">
        Loading workouts...
      </p>
    </div>
  );
}
