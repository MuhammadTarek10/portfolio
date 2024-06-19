"use client";

import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col justify-center items-center sm:px-10 overflow-hidden px-5 mx-auto">
      <div className="w-full max-w-7xl">
        <FloatingNav
          navItems={[
            {
              name: "Home",
              link: "#",
            },
            {
              name: "About",
              link: "#about",
            },
            {
              name: "Projects",
              link: "#projects",
            },
            {
              name: "Contact",
              link: "#contact",
            },
          ]}
        />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
