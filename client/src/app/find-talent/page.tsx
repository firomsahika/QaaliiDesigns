import DesignerGrid from "./components/DesignerGrid";
import TalentHero from "./components/Hero";

export default function FindTalentPage() {
  return (
    <section className="min-h-screen">
      <TalentHero />
      <DesignerGrid />
    </section>
  );
}
