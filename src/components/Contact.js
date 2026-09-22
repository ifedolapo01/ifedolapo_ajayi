import Section from "./Section";

export default function Contact() {
  return (
    <Section id="contact" tone="base">
      <h2 className="font-serif text-2xl font-bold">Contact Me</h2>
      <p className="mt-3 text-base">
        You can reach me directly at:{" "}
        <a
          href="mailto:ifedolapoajayi0@gmail.com"
          className="font-medium text-brand-600 underline hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
        >
          ifedolapoajayi0@gmail.com
        </a>
      </p>
    </Section>
  );
}
