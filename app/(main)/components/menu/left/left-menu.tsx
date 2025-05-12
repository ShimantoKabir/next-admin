"use client";
import useMenuStore from "../menu-store";
import "./left-menu.scss";

export default function LeftMenu() {
  const { isLeftMenuMinimized } = useMenuStore();

  return (
    <div className={isLeftMenuMinimized ? "hide left-menu" : "left-menu"}>
      <div className="logo">
        <h1>PyAdmin</h1>
      </div>
    </div>
  );
}
