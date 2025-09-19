import { Container } from "../shared/Container";

export function Hero() {
  return (
    <section className="relative flex h-auto min-h-[500px] items-center bg-background py-20 text-center md:h-[80vh] md:py-0 overflow-hidden">
      <div className="absolute inset-0 z-0 animated-aurora" />
      <Container className="relative z-10">
        {/* Your new hero section content goes here */}
      </Container>
    </section>
  );
}
