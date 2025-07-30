export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-r from-sky-400 to-indigo-500">
      <div className="text-center text-white space-y-4">
        <h1 className="text-4xl font-bold">Welcome to Job Portal</h1>
        <p className="text-lg">Find and apply for your dream job</p>
        <div className="space-x-4">
          <a href="/login" className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 font-semibold">
            Login
          </a>
          <a href="/register" className="px-4 py-2 bg-black text-white border border-white rounded-lg hover:bg-gray-800 font-semibold">
            Register
          </a>
        </div>
      </div>
    </main>
  );
}
