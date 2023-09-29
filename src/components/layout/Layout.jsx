import React, { useEffect } from "react";
import "./layout.css";
import Sidebar from "../sidebar/Sidebar";
import TopNav from "../topnav/TopNav";
import Dashboard from "../../pages/Dashboard";
import Customers from "../../pages/Customers";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ThemeAction from "../../redux/actions/ThemeAction";

const Layout = () => {
  const themeReducer = useSelector((state) => state.ThemeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const themeClass = localStorage.getItem("themeMode") || "theme-mode-light";
    const colorClass = localStorage.getItem("colorMode") || "theme-mode-light";

    dispatch(ThemeAction.setMode(themeClass));
    dispatch(ThemeAction.setColor(colorClass));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*">
          <Route
            index
            element={
              <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
                <Routes>
                  <Route index element={<Sidebar />} />
                </Routes>
                <div className="layout__content">
                  <TopNav />
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/customers" element={<Customers />} />
                  </Routes>
                </div>
              </div>
            }
          />
        </Route>
      </Routes>

    </BrowserRouter>
  );
};

export default Layout;
