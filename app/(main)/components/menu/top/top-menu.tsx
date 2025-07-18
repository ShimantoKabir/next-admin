"use client";
import React, { useRef } from "react";
import { Menu } from "primereact/menu";
import { useRouter } from "next/navigation";
import "@/app/(main)/components/menu/top/top-menu.scss";
import { useMenuStore } from "@/app/(main)/components/menu/menu-store";
import {
  CookieService,
  CookieServiceToken,
} from "@/app/utils/cookie/CookieService";
import { container } from "@/app/di";

const TopMenu = () => {
  const cookieService = container.get<CookieService>(CookieServiceToken);
  const { toggle } = useMenuStore();
  const router = useRouter();
  const accountRef = useRef<Menu>(null);
  const items = [
    {
      label: "Profile",
      icon: "pi pi-user-edit",
      command: () => {
        router.push("/profile");
      },
    },
    {
      label: "Logout",
      icon: "pi pi-sign-out",
      command: () => {
        cookieService.deleteCookie("access-token");
        cookieService.deleteCookie("refresh-token");
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
};

export default TopMenu;
