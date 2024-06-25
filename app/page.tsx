import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Link href="/create-account"
        className="w-full bg-orange-500 text-white text-lg">createAccount
      </Link>
      <Link href="/create-email"
        className="w-full bg-orange-500 text-white text-lg">createEmail
      </Link>
      <Link href="/create-nickname"
        className="w-full bg-orange-500 text-white text-lg">createNickname
      </Link>
    </div>
  );
}
