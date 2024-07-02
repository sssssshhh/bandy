import getSession from "@/lib/session";
import Link from "next/link";

export default async function MyPage() {
    const session = await getSession();
    return (
        <div className="flex flex-col gap-10 py-8 px-6">
            <h1>My Page</h1>
            <div className="flex flex-row">
                <div className="flex flex-col">
                    <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
                    <Link href="/edit-profile">Edit Profile</Link>
                </div>
                <div className="flex flex-col">
                    <h3 className="font-bold">{session?.nickname}</h3>
                    <h5>{session?.email}</h5>
                </div>
            </div>
            <Link href="/edit-account">Account Setting</Link>
            <Link href="/edit-level">My Level</Link>
            <Link href="/notice">Notice</Link>
            <Link href="/terms-and-conditions">Terms and Conditions</Link>
            <Link href="/log-out">Log Out</Link>
        </div>
    )
}