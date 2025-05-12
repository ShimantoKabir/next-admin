"use client";
import useMenuStore from "../menu-store";
import "./top-menu.scss";

export default function TopMenu() {
  const { isLeftMenuMinimized, toggle } = useMenuStore();

  const onBarClick = () => {
    toggle();
  };

  return (
    <div className="top-menu">
      <div className="menu-wrap">
        <div className="menu-left">
          <i className="pi pi-bars" onClick={onBarClick}></i>
        </div>
        <div className="menu-right">
          <i className="pi pi-user"></i>
        </div>
      </div>
    </div>
  );
}
