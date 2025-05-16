"use client";
import { TreeNode } from "primereact/treenode";
import React, { useState, useEffect } from "react";
import "@/app/(main)/components/menu/left/left-menu.scss";
import { useMenuStore } from "@/app/(main)/components/menu/menu-store";
import { MenuService } from "@/app/(main)/components/menu/services/menu.service";
import {
  Tree,
  TreeCheckboxSelectionKeys,
  TreeMultipleSelectionKeys,
} from "primereact/tree";

const LeftMenu = () => {
  const { isLeftMenuMinimized } = useMenuStore();
  const [nodes, setNodes] = useState<TreeNode[]>([]);
  const [expandedKeys, setExpandedKeys] = useState({});

  useEffect(() => {
    MenuService.getMenuNodes().then((data) => setNodes(data));
  }, []);

  const findSelectedNode = (
    tree: TreeNode[],
    key: string | TreeMultipleSelectionKeys | TreeCheckboxSelectionKeys | null
  ): TreeNode | undefined => {
    for (const node of tree) {
      if (node.key === key) return node;

      if (node.children) {
        const found: TreeNode | undefined = findSelectedNode(
          node.children,
          key
        );

        if (found) return found;
      }
    }
    return undefined;
  };

  const onSingleExpand = (
    e: string | TreeMultipleSelectionKeys | TreeCheckboxSelectionKeys | null
  ) => {
    const selectedNode: TreeNode | undefined = findSelectedNode(nodes, e);

    if (selectedNode) {
      const expandState: boolean = !selectedNode.expanded;
      selectedNode.expanded = expandState;
      setExpandedKeys({
        e: expandState,
      });
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
};

export default LeftMenu;
