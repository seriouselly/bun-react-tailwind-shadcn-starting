export function SearchBar({ onSearch }: { onSearch: (text: string) => void }) {
  return (
    <input
      type="text"
      placeholder="Search characters..."
      className="border rounded pl-5 w-full h-[42px]"
      onChange={element => onSearch(element.target.value)}
    />
  );
}