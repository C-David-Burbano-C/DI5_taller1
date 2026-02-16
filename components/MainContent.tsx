export default function MainContent() {
  return (
    <main className="p-4 flex-1 bg-white flex items-center justify-center">
      <div className="max-w-sm bg-white rounded-2xl border-2 border-red-400 shadow-md">
        <img
          src="https://i.pinimg.com/236x/01/de/75/01de759592ca8c1c396e5cd73e6df4a2.jpg"
          className="w-full h-48 rounded-t-2xl"
        />
        <div className="p-6">
          <h2 className="text-xl font-bold text-black mb-3">
            Red Heaven
          </h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
          <div className="flex gap-3">
            <span className="bg-red-400 text-white text-sm px-4 py-1 rounded-full">
              #tailwind
            </span>
            <span className="bg-red-400 text-white text-sm px-4 py-1 rounded-full">
              #frontendeverything
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}