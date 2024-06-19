import Aboutme from "@/Components/Aboutme";
import Contact from "@/Components/Contact";
import Container from "@/Components/Container";
import Experience from "@/Components/Experience";
import Header from "@/Components/Header";
import Projects from "@/Components/Projects";
import Skills from "@/Components/Skills";
import Image from "next/image";

export default function Home() {
  return (
  <main className="w-full bg-gray-950 text-gray-300 px-4">
      <Container >
      <Header/>
      <Aboutme/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Contact/>
      </Container>
  </main>
  );
}
