import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/createAccount"
        className="w-full bg-orange-500 text-white text-lg">createAccount
      </Link>
      <Link href="/login"
        className="w-full bg-orange-500 text-white text-lg">login
      </Link>
    </div>
  );
}
