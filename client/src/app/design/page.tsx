import datas from "./designDatas/CardData";
import CategoryNav from "./components/CategoryNav";
import { DesignCard } from "./components/DesignCard";

export default function AllDesignsPage() {
  return (
    <section className="px-6 py-8">
      <CategoryNav />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
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
  );
}
