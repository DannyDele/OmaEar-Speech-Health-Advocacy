import { EXPERIENCE } from "../experience.constants";

/** Experience feature view — imported by the thin App Router page at `/experience`. */
export default function ExperiencePage() {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Experience</h1>
      <p className="max-w-2xl text-foreground/70">
        Timeline entries will live in this feature. Add items to{" "}
        <code className="rounded bg-foreground/5 px-1.5 py-0.5 text-sm">
          experience.constants.ts
        </code>
        .
      </p>
      {EXPERIENCE.length === 0 ? (
        <p className="text-sm text-foreground/50">No experience added yet.</p>
      ) : null}
    </section>
  );
}
