import Hero from "@/pages/Hero";
import CategoryNav from "./design/components/CategoryNav";
import datas from "./design/designDatas/CardData";
import { DesignCard } from "./design/components/DesignCard";
import { DesignCarousel } from "@/components/DesignCarousel";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* 🟢 HERO SECTION */}
      <Hero />

      {/* CAROUSEL SECTION */}

      <section>
        <DesignCarousel />
      </section>

      {/* 🟢 CATEGORY NAV */}
      <section className="px-6 mt-10">
        <CategoryNav />
      </section>

      {/* 🟢 ALL DESIGNS GRID */}
      <section className="px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {datas.map((item, index) => (
            <DesignCard
              key={index}
              img={item.img}
              avatar={item.avatar}
              name={item.name}
              likeCount={item.likeCount}
              id={item.id}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
