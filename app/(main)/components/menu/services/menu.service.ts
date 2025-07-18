export const MenuService = {
  getMenuNodesData() {
    return [
      {
        key: "1",
        label: "User",
        data: {
          href: "/user",
        },
        icon: "pi pi-fw pi-calendar",
      },
      {
        key: "2",
        label: "Role",
        data: {
          href: "/role",
        },
        icon: "pi pi-fw pi-star-fill",
      },
      {
        key: "0",
        label: "Menu",
        icon: "pi pi-fw pi-inbox",
        children: [
          {
            key: "0-1",
            label: "Template",
            icon: "pi pi-fw pi-calendar-plus",
            data: {
              href: "/menu/template",
            },
          },
          {
            key: "0-2",
            label: "Manage",
            icon: "pi pi-fw pi-calendar-plus",
            data: {
              href: "/menu/manage",
            },
          },
        ],
      },
    ];
  },

  getMenuNodes() {
    return Promise.resolve(this.getMenuNodesData());
  },
};
