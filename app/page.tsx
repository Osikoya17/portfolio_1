import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { MobileNav } from "@/components/ui/MobileNav";
import Grid from "@/components/ui/Grid";
import RecentProjects from "@/components/RecentProjects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";
import { navItems } from "@/data";

export default function Home() {
  const navLinks = navItems.map(({ name, link, icon: Icon }) => ({
    name,
    link,
    icon: <Icon />,
  }));

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navLinks} className="hidden md:flex" />
        <MobileNav navItems={navLinks} className="md:hidden" />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Certifications />
        <Footer />
      </div>
    </main>
  );
}
