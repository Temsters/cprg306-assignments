import ItemList from "./item-list";

//week 3 page
//functional component Page that returns main element
export default function Page() {
  return (
    <main className="space-y-2">
      <h1 className="my-12 text-3xl font-bold bg-[oklch(50%_0.134_242.749)] rounded-bl-lg text-center shadow-md">Shopping List</h1>
      <ItemList />
    </main>
  );
}
