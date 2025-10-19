import ExploreIntro from "../components/ExploreIntro";
import { Sidebar } from "../components/SideBar";
import DesignGrid from "../components/DesignGrid";

import datas from "../../design/designDatas/CardData";


export default function ExplorePage({params}: { params: { category: string }}) {

   const 

  // Sample data (you can later make this dynamic)
  const designs = [
    { id: 1, title: "Modern Web Design", image: "/sample.jpg", designer: "Mahi" },
    { id: 2, title: "Creative Logo", image: "/sample.jpg", designer: "Firomsa" },
  ];

  return (
    <div className="flex flex-col min-h-screen p-6 gap-10">
      {/* 1️⃣ Intro Section */}
      <ExploreIntro />

      {/* 2️⃣ Sidebar + Main Content */}
      <div className="flex flex-1 gap-6 ">
        {/* Sidebar */}
        <aside className="w-50 flex-shrink-0">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1  border overflow-y-auto">
          <DesignGrid datas={datas} />
        </main>
      </div>
    </div>
  );
}
