import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/signin"
        className="w-full bg-orange-500 text-white text-lg">Signin
      </Link>
      <Link href="/signup"
        className="w-full bg-orange-500 text-white text-lg">Signup
      </Link>
    </div>
  );
}
