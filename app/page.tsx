import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            {
              name: "Home",
              link: "#home",
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
          className="hidden md:flex"
        />
        <Hero />
      </div>
    </main>
  );
}
 