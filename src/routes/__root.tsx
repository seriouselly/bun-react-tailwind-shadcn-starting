import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Sun, MoonStar } from "lucide-react";
import React, { useEffect, useState } from "react";

function RootComponent() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <div className=" flex items-center">
        <div className="flex gap-5">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>{" "}
          <Link to="/registration" className="[&.active]:font-bold">
            Registration
          </Link>
        </div>

        <div className="flex-grow flex justify-end ml-">
          <div className="flex items-center">
            <Sun className="w-4 h-4 mr-2 text-gray-600 dark:text-gray-300" />
            <label className="relative inline-flex items-center cursor-pointer">
              <span className="sr-only">Toggle dark mode</span>
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                className="sr-only"
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700 transition-colors duration-300">
                <div
                  className={`absolute top-0.5 left-0.5 bg-white rounded-full h-5 w-5 transition-transform duration-300 ${
                    darkMode ? "transform translate-x-5" : ""
                  }`}
                ></div>
              </div>
            </label>
            <MoonStar className="w-4 h-4 ml-2 text-gray-600 dark:text-gray-300" />
          </div>
        </div>
      </div>
      <hr />
      <Outlet />
      {process.env.NODE_ENV !== "production" && <TanStackRouterDevtools />}
    </>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
});
