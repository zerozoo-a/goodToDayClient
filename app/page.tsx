export default function Home() {
  return (
    <>
      <header className="bg-blue-500 py-4">
        <div className="container mx-auto">
          <h1 className="text-3xl text-white font-semibold">환영합니다!</h1>
        </div>
      </header>
      <main className="container mx-auto mt-6 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold">서비스 1</h2>
            <p>서비스 1에 대한 설명입니다.</p>
          </div>

          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold">서비스 2</h2>
            <p>서비스 2에 대한 설명입니다.</p>
          </div>

          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold">서비스 3</h2>
            <p>서비스 3에 대한 설명입니다.</p>
          </div>
        </div>
      </main>
    </>
  );
}
