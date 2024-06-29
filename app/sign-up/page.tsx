import { FaceSmileIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function SignUp(){
    return (
    <div className="flex flex-col gap-5 items-center justify-center">
        <FaceSmileIcon className="w-20"></FaceSmileIcon>
        <div>Think in Korean like native</div>
        <Link href="/sign-up/account">Sign in for free</Link>
        <div className="flex flex-row">
            <span>Already signed up?</span>
            <Link href="/sign-in">sign in</Link>
        </div>
    </div>
        )
}