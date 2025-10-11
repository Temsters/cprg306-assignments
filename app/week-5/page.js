//week 4 page component that renders NewItem component
import NewItem from "./new-item";  

export default function Page() {
  return (
    <main className="space-y-3 space-x-0 text-blue-500">
      <h1 className="max-w-screen my-0.5 text-3xl font-bold text-blue-500 pl-11 rounded-b p-3">Week 5 - New Item</h1>
      <NewItem />
    </main>
  );
}