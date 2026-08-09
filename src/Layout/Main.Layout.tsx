import { Header } from "@/components/nav";
import SideBar from "@/components/nav/Sidebar.nav";
import React, { FC } from "react";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <SideBar />
      <div className="flex flex-col mt-40 space-y-10 mb-10 px-8 md:px-24">
        {children}
      </div>
    </>
  );
};

export default Layout;
