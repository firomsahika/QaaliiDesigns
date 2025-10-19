import DesignGrid from "../components/DesignGrid";
import datas from "../../design/designDatas/CardData";

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const categoryParam = params.category?.toLowerCase().replace(/\s+/g, "-");

  const filteredDatas =
    categoryParam === "all"
      ? datas
      : datas.filter(
          (item) => item.category.toLowerCase().replace(/\s+/g, "-") === categoryParam
        );

  const datasToShow = filteredDatas.length > 0 ? filteredDatas : [];

  return (
    <>
      {datasToShow.length > 0 ? (
        <DesignGrid datas={datasToShow} />
      ) : (
        <p className="text-gray-500 mt-10 text-center">
          No designs found in this category.
        </p>
      )}
    </>
  );
}
