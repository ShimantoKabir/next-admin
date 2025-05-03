import Layout from "../layout";
import LeftMenu from "./components/menu/LeftMenu";
import TopMenu from "./components/menu/TopMenu";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: AppLayoutProps) {
  return (
    <Layout>
      <TopMenu />
      {children}
      <LeftMenu />
    </Layout>
  );
}
