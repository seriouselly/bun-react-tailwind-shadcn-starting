import React from "react";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { useAuthStore } from "../stores/useAuthStore";
import { UserTable } from "../components/shared/UserTable";
import { Route as LoginRoute } from "@/routes/login";

export const Route = createFileRoute("/dashboard")({
  beforeLoad: () => {
    const isAuth = useAuthStore.getState().isAuthenticated;
    if (!isAuth) {
      throw redirect({
        to: LoginRoute.to,
      });
    }
  },
  component: DashboardPage,
});

function DashboardPage() {
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl">Dashboard</h2>
          <div className="text-sm">Logged as: {user?.email}</div>
        </div>
        <div>
          <button onClick={() => logout()} className="px-3 py-1 border rounded">
            Logout
          </button>
        </div>
      </div>

      <UserTable />
    </div>
  );
}
