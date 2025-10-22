import ExploreIntro from "./components/ExploreIntro";
import { Sidebar } from "./components/SideBar";

export default function ExploreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen gap-10">
      {/* ✅ Stays fixed — not re-rendered on route change */}
      <ExploreIntro />

      <div className="flex flex-1 gap-6 border rounded-2xl">
        <aside className="w-50 flex-shrink-0">
          <Sidebar />
        </aside>

        {/* This part changes when category changes */}
        <main className="flex-1  overflow-y-auto  rounded-2xl  bg-white">
          {children}
        </main>
      </div>
    </div>
  );
}
