import DesignGrid from "../components/DesignGrid";
import datas from "../../design/designDatas/CardData";

export default function CategoriesPage({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  const rawCategory = (searchParams?.category ?? "all") as string;
  const categoryParam = decodeURIComponent(rawCategory)
    .toLowerCase()
    .replace(/\s+/g, "-");

  const filteredDatas =
    categoryParam === "all"
      ? datas
      : datas.filter(
          (item) =>
            item.category.toLowerCase().replace(/\s+/g, "-") === categoryParam
        );

  const datasToShow = filteredDatas.length > 0 ? filteredDatas : [];

  return (
    <>
      {datasToShow.length > 0 ? (
        <DesignGrid datas={datasToShow} />
      ) : (
        <p className="text-gray-500 mt-5 text-center">
          No designs found in this category.
        </p>
      )}
    </>
  );
}