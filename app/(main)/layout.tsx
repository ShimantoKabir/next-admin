import LeftMenu from "./components/menu/left/left-menu";
import TopMenu from "./components/menu/top/top-menu";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="layout-wrap">
      <LeftMenu />
      <div className="play-ground">
        <TopMenu />
        {children}
      </div>
    </div>
  );
}
