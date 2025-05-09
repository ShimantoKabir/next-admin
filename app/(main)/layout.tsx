import Layout from "../layout";
import LeftMenu from "./components/menu/left/left-menu";
import TopMenu from "./components/menu/top/top-menu";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: AppLayoutProps) {
  return (
    <Layout>
      <div className="layout-wrap">
        <LeftMenu />
        <div className="play-ground">
          <TopMenu />
          {children}
        </div>
      </div>
    </Layout>
  );
}
