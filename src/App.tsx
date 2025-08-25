import { Card, CardContent } from "@/components/ui/card";
import { APITester } from "./APITester";
import "@/public/styles/globals.css";

import { useEffect, useState } from "react";
import { CharacterCard } from "@/components/context/CharacterCard";
import { SearchBar } from "@/components/context/SearchBar";
import { useTheme } from "@/components/context/ThemeContext";
import { Button } from "@/components/ui/button";
import { Sun, MoonStar} from "lucide-react";

interface Character {
  id: string;
  name: string;
  image: string;
}

export function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://dragonball-api.com/api/characters?limit=10")
      .then((res) => res.json())
      .then((data) => setCharacters(data.items));
  }, []);

  const { toggle, theme } = useTheme();

  // Filter characters based on the search term (case-insensitive)
  const filteredCharacters = characters.filter((char) =>
    char.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="flex justify-center items-center p-6 gap-5">
        <SearchBar onSearch={setSearch} />
        <Button onClick={toggle} className="flex items-center gap-2 w-[40px] h-[40px] cursor-[pointer]">
          {theme === "light" ? (
            <MoonStar />
          ) : (
            <Sun />
          )}
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-8 p-6">
        {filteredCharacters.map((char: Character) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>
    </>
  );
}

export default App;
