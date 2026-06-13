import Image from "next/image";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import CalculatorSkeleton from "@/components/CalculatorSkeleton";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import ModeToggle from "@/components/ModeToggle";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Methodology />

        {/* Brand divider — horizontal logo centered between methodology and CTA */}
        <div className="border-b border-line py-16">
          <div className="mx-auto flex max-w-container flex-col items-center gap-4 px-5">
            <Image
              src="/logo-horizontal.avif"
              alt="Konstanta OÜ"
              width={360}
              height={96}
              className="brand-logo brand-divider-logo h-auto w-64 sm:w-80 lg:w-96"
            />
            <p className="text-sm text-faint">
              Constant Quality · Таллин · с 2000
            </p>
          </div>
        </div>

        <CalculatorSkeleton />
        <LeadForm />
      </main>
      <Footer />
      <ModeToggle />
    </>
  );
}
