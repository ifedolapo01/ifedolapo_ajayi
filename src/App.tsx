import { useMemo } from "react";
import { sections } from "@/data/profile";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Masthead } from "@/components/chrome/Masthead";
import { MarginRail } from "@/components/chrome/MarginRail";
import { PositionMarker } from "@/components/chrome/PositionMarker";
import { Workbench } from "@/sections/Workbench";
import { Work } from "@/sections/Work";
import { Practice } from "@/sections/Practice";
import { Record } from "@/sections/Record";
import { Contact } from "@/sections/Contact";

export default function App() {
  const ids = useMemo(() => sections.map((s) => s.id), []);
  const active = useActiveSection(ids);

  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2.5 focus:font-mono focus:text-label focus:uppercase focus:text-paper"
      >
        Skip to the work
      </a>

      <MarginRail active={active} />

      {/* The rail owns a fixed column on wide screens; the page steps aside
          for it rather than sliding underneath. */}
      <div className="xl:pl-16">
        <Masthead />
        <main id="main">
          <Workbench />
          <Work />
          <Practice />
          <Record />
          <Contact />
        </main>
      </div>

      <PositionMarker active={active} />
      {/* Clearance for the fixed marker on small screens. */}
      <div aria-hidden className="h-12 xl:hidden" />
    </>
  );
}
