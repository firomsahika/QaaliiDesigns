// design/[category]/page.tsx
import datas from "../../designDatas/CardData";
import CategoryNav from "../../components/CategoryNav";
import { DesignCard } from "../../components/DesignCard";

interface Props {
  params: {
    category: string;
  };
}

export default function CategoryPage({ params }: Props) {
  // normalize category
  const categoryParam = params.category.toLowerCase();

  const filteredDesigns = datas.filter(
    (item) => item.category.toLowerCase() === categoryParam
  );

  return (
    <section className="px-6 py-16">
      <CategoryNav />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {filteredDesigns.length > 0 ? (
          filteredDesigns.map((item) => (
            <DesignCard
              key={item.id}
              img={item.img}
              avatar={item.avatar}
              name={item.name}
              likeCount={item.likeCount}
              id={item.id}
            />
          ))
        ) : (
          <p className="text-gray-500">No designs found for this category.</p>
        )}
      </div>
    </section>
  );
}
