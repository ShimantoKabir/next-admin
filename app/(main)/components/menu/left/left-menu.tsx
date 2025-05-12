"use client";
import useMenuStore from "../menu-store";
import { MenuService } from "../services/menu.service";
import "./left-menu.scss";
import React, { useState, useEffect } from "react";
import { TreeNode } from "primereact/treenode";
import { Tree } from "primereact/tree";

export default function LeftMenu() {
  const { isLeftMenuMinimized } = useMenuStore();
  const [nodes, setNodes] = useState<TreeNode[]>([]);
  const [expandedKeys, setExpandedKeys] = useState({});

  useEffect(() => {
    MenuService.getMenuNodes().then((data) => setNodes(data));
  }, []);

  const onSingleExpand = (e: any) => {
    const selectedNode: TreeNode | undefined = nodes.find(
      (n: TreeNode) => n.key === e
    );

    if (selectedNode) {
      const expandState: boolean = !selectedNode.expanded;

      selectedNode.expanded = expandState;
      console.log("expandedKeys=", expandedKeys);
      const obj = {
        e: expandState,
      };
      setExpandedKeys(obj);
    }
  };

  return (
    <div className={isLeftMenuMinimized ? "hide left-menu" : "left-menu"}>
      <div className="logo">
        <h1>PyAdmin</h1>
      </div>
      <div className="menu-container">
        <Tree
          value={nodes}
          selectionMode="single"
          className="w-full menu-wrap"
          expandedKeys={expandedKeys}
          onToggle={(e) => setExpandedKeys(e.value)}
          onSelectionChange={(e) => onSingleExpand(e.value)}
        />
      </div>
    </div>
  );
}
