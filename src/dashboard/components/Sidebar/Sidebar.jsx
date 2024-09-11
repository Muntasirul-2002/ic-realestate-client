import React from "react";
import { links } from "../../constants";
import LinkItems from "./LinkItems";

const Sidebar = ({ isSidebar }) => {
  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 text-black bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 transition-transform ${
        isSidebar ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="h-full px-3 pb-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          {links.map((links, index) => (
            <LinkItems key={index} {...links} />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
