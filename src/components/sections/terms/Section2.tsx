"use client";
import Container from "@/components/container";
import HtmlWrapper from "@/components/html";
import { useAppSelector } from "@/hooks/useAppSelector";

export default function TermsSection2() {
  const { terms } = useAppSelector((state) => state.content);
  return (
    <section className="my-20 sm:my-28">
      <Container maxWidth="max-w-screen-lg">
        <HtmlWrapper data={terms.section2.body} />
      </Container>
    </section>
  );
}
