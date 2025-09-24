
//item component accepting name, quantity, category as props
export default function Item({ name, quantity, category, bgColor }) {
  return (
    <div className={`my-2 max-w-sm p-2 rounded-lg mx-auto text-center shadow-md ${bgColor}`}>
      <ul className="space-y-2">
        <li><span className="font-semibold">Name:</span> {name}</li>
        <li><span className="font-semibold">Quantity:</span> {quantity}</li>
        <li><span className="font-semibold">Category:</span> {category}</li>
      </ul>
    </div>
  );
}

