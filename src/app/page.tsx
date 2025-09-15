import { About } from "@/components/home/About";
import { Hero } from "@/components/home/Hero";
import { Work } from "@/components/home/Work";
import { Container } from "@/components/shared/Container";

export default function Home() {
  return (
    <>
      <Hero />
      <Container>
        <About />
        <Work />
      </Container>
    </>
  );
}
