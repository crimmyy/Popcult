import { AboutPreview } from "@/components/home/AboutPreview";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { ContactCTA } from "@/components/home/ContactCTA";
import { CredibilityStrip } from "@/components/home/CredibilityStrip";
import { Hero } from "@/components/home/Hero";
import { LocationPreview } from "@/components/home/LocationPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <CredibilityStrip />
      <CategoryGrid />
      <LocationPreview />
      <AboutPreview />
      <ContactCTA />
    </>
  );
}
