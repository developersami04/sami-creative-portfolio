import { aboutData } from "@/lib/data/about";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          About Me
        </h2>
        <div className="mt-6 space-y-6 text-lg leading-8 text-foreground/80">
            {aboutData.paragraphs.map((p, index) => (
                <p key={index}>{p}</p>
            ))}
        </div>
      </div>
    </section>
  );
}
