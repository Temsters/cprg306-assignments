
//item component accepting name, quantity, category as props
function Item({ name, quantity, category }) {
  return (
    <article className="my-12 max-w-sm bg-blue-400 rounded-md p-4">
      <h2 className="text-2xl font-black">Shopping List Items</h2>
      {/* displaying the props in a list */}
      <ul>
        <li>Name: {name}</li>
        <li>Quantity: {quantity}</li>
        <li>Category: {category}</li>
      </ul>
    </article>
  );
}

// export default function Item(name, quantity, category) {
 
//   return (
//     <article className="my-12 max-w-sm bg-blue-400 rounded-md p-4">
//     <h2 className="text-2xl font-black">Shopping List Items</h2>
//       <h2 className="text-2xl font-black">Shopping List Items</h2>
//       <ul>
//         <li>Name: {name}</li>
//         <li>Quantity: {quantity}</li>
//         <li>Category: {category}</li>
//       </ul>
//     </article>
//   );
// }
