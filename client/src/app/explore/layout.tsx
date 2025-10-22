import { SearchInput } from "@/components/Search";
import ExploreIntro from "./components/ExploreIntro";
import { Sidebar } from "./components/SideBar";
import { DesignPagination } from "@/components/Pagination";

export default function ExploreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen gap-10 pb-20">
      {/* ✅ Stays fixed — not re-rendered on route change */}
      <ExploreIntro />
       
      <section className="flex-start justify-start items-start py-8 bg-white border-t border-b border-gray-100">
        <SearchInput placeholder={"Search for designs, designers, or categories..."} />
      </section>  

      <div className="flex flex-1 gap-6 rounded-2xl">
          <aside className="w-50 flex-shrink-0">
          <Sidebar />
        </aside>

        {/* This part changes when category changes */}
        <main className="flex-1  overflow-y-auto  rounded-2xl  bg-white">
          {children}
          <DesignPagination totalPages={5} />

        </main>
      </div>
    </div>
  );
}
