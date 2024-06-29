import { FaceSmileIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function SignUp(){
    return (
    <div className="flex flex-col items-center justify-between min-h-screen p-6">
        <div className="my-auto flex flex-col items-center gap-2 *:font-medium">
            <FaceSmileIcon className="w-20"></FaceSmileIcon>
            <h2 className="text-2xl">Think in Korean like native</h2>
        </div>
        <div className="flex flex-col items-center gap-3 w-full">
        <Link
          href="/sign-up/email"
          className="w-full bg-orange-500 text-white text-lg font-medium py-2.5 rounded-md text-center hover:bg-orange-400 transition-colors">
          Sign up for free
        </Link>
        <div className="flex gap-2">
          <span>Already signed up?</span>
          <Link href="/sign-in" className="hover:underline">
          sign in
          </Link>
        </div>
      </div>
    </div>
    )
}