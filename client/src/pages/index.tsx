import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex justify-center min-h-screen items-center bg-green-100">
      <div className="bg-blue-200 p-8 rounded-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">ระบบสมัครสมาชิก</h1>
        <div className="flex justify-between">
          <button
            className="bg-white p-3 rounded-md"
            onClick={() => router.push("/student")}
          >
            Student
          </button>
          <button
            className="bg-white p-3 rounded-md"
            onClick={() => router.push("/individual")}
          >
            Individual
          </button>
          <button
            className="bg-white p-3 rounded-md"
            onClick={() => router.push("/business")}
          >
            Business
          </button>
        </div>
      </div>
    </div>
  );
}
