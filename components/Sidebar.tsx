export default function Sidebar() {
  return (
    <aside className="p-4 bg-white border-2 border-red-400 shadow-md w-64">
      <h2 className="text-lg  text-red-800">Sidebar</h2>
      <ul className="mt-4">
        <li className="mb-2  text-red-700">Item 1</li>
        <li className="mb-2  text-red-700">Item 2</li>
        <li className="mb-2  text-red-700">Item 3</li>
      </ul>
    </aside>
  );
}