import { Card, CardContent } from "@/components/ui/card";
import { APITester } from "./APITester";
import "@/public/styles/globals.css";

import { RegistrationForm } from "@/components/app/RegistrationForm";
import { Toaster } from "sonner";

export function App() {
  return (
    <main className="p-4">
      <RegistrationForm />
      <Toaster richColors></Toaster>
    </main>
  );
}

export default App;
