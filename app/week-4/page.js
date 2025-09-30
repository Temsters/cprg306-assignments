//week 4 page component that renders NewItem component

import NewItem from "./new-item";  

export default function Page() {
  return (
    <main className="space-y-2 text-white">
      <h1 className="my-12 text-3xl font-bold bg-[oklch(50%_0.134_242.749)] rounded-bl-lg text-center shadow-md text-white">Add New Item</h1>
      <NewItem />
    </main>
  );
}