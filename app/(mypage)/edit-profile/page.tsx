"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import { useFormState } from "react-dom";
import { EditNickname } from "./action";

export default function EditProfile() {
    const [state, action] = useFormState(EditNickname, null);

    return (
        <div className="flex flex-col">
            <h2>Profile</h2>
            <h2>Avatar</h2>
            <div className="flex flex-col">
                <div>Nickname</div>
                <form action={action} className="flex flex-col gap-3">
                    <Input
                    name="nickname" 
                    type="text" 
                    placeholder="nickname"
                    errors={state?.fieldErrors.nickname}
                    />
                <span>Once you set your nickname, you will not be able to change it for 14 days.</span>
                <Button text="Save" />
                </form>
            </div>
        </div>
    )
}