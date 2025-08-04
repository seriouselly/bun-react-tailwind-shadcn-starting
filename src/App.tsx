import { Card, CardContent } from "@/components/ui/card";
import { APITester } from "./APITester";
import "@/public/styles/globals.css";

import { ProfileCard } from "@/components/shared"
import { profileData } from "@/data"

export function App() {
    return (
    <main className="flex justify-center items-center h-screen">
      <ProfileCard
        name={profileData.name}
        description={profileData.description}
        image={profileData.image}
        socialMedia={profileData.socialMedia}
      />
    </main>
  )
}

export default App;
