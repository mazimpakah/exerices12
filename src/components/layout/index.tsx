import React from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

const Layout = (props: any) => {
  return (
    <div className="flex flex-row h-screen bg-gray-100">
      {/* sidbar */}
      <SideBar />
      {/* topBar */}
      <div className="flex-1 flex-col">
        <TopBar />
        {/* content */}
        <Routes>
          {props?.routes.map((prop: any, key: any) => {
            return (
              <Route
                path={prop.path}
                element={prop.component}
                key={key}
              />
            );
          })}
        </Routes>
      </div>
    </div>
  );
}

export default Layout;
