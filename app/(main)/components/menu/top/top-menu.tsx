"use client";
import "./top-menu.scss";
import { Menu } from "primereact/menu";
import useMenuStore from "../menu-store";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";

export default function TopMenu() {
  const { toggle } = useMenuStore();
  const router = useRouter();
  const accountRef = useRef<Menu>(null);
  const items = [
    {
      label: "Profile",
      icon: "pi pi-user-edit",
    },
    {
      label: "Logout",
      icon: "pi pi-sign-out",
      command: () => {
        router.push("/login");
      },
    },
  ];

  return (
    <div className="top-menu">
      <div className="menu-wrap">
        <div className="menu-left">
          <i className="pi pi-bars" onClick={toggle}></i>
        </div>
        <div className="menu-right">
          <Menu
            model={items}
            popup
            ref={accountRef}
            id="popup_menu_right"
            popupAlignment="right"
          />
          <i
            className="pi pi-user"
            onClick={(e) => accountRef.current?.toggle(e)}
            aria-controls="popup_menu_right"
            aria-haspopup
          ></i>
        </div>
      </div>
    </div>
  );
}
