"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TabBar() {
    const pathname = usePathname();
    return (
        <div className="fixed bottom-0 w-full mx-auto max-w-screen-md grid grid-cols-5 border-neutral-600 border-t px-5 py-3 *:text-white">
            <Link href="/lectures" className="flex flex-col items-center gap-px">
                {pathname === "/lectures" 
                ? 
                <div className="w-7 h-7 bg-red-500 rounded-full" />
                : 
                <div className="w-7 h-7 bg-orange-50 rounded-full" />
                }
                <div>Home</div>
            </Link>
            <Link href="/mypage" className="flex flex-col items-center gap-px">
                {pathname === "/mypage" 
                ? 
                <div className="w-7 h-7 bg-red-500 rounded-full" />
                :
                <div className="w-7 h-7 bg-orange-50 rounded-full" />
                }
                <div>MyPage</div>
            </Link>
        </div>
    )
}