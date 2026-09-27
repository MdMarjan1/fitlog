import { ArrowDownIcon } from "./Icons";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-20 lg:px-8">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-bold tracking-[0.2em] text-accent">
            WORKOUT LIBRARY
          </p>
          <h1 className="font-display text-4xl font-bold uppercase leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            Train with intent.
            <br />
            Log every set.
          </h1>
          <p className="mt-5 max-w-md text-base text-white/60">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <a
            href="#library"
            className="btn mt-8 gap-2 rounded-full border-none bg-accent px-6 text-black hover:bg-accent/90"
          >
            BROWSE WORKOUTS
            <ArrowDownIcon className="h-4 w-4" />
          </a>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-3xl bg-base-800">
          <img
            src="https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666664.jpg?w=740"
            alt="Athlete training illustration"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
