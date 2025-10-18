import DesignGrid from "../components/DesignGrid";


export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = params.category.replace("-", " ");
  // You can fetch from DB or API
  const designs = [
    { id: 1, title: `${category} Design`, image: "/sample.jpg", designer: "Mahi" },
  ];

  return <DesignGrid designs={designs} />;
}