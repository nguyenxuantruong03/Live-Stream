"use client"
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";

interface WrapperProops {
  children: React.ReactNode;
}
const Wrapper = ({ children }: WrapperProops) => {
  const { collapsed } = useSidebar((state) => state )
  return (
    <aside className={cn("fixed left-0 flex flex-col w-60 h-full bg-slate-900 border-r border-[#2D2E35] z-50", collapsed && "w-[70px]")}>
      {children}
    </aside>
  );
};

export default Wrapper;
