"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import { useFormState } from "react-dom";
import { EditNamePasssword } from "./action";

export default function EditAccount() {
    const [state, action] = useFormState(EditNamePasssword, null);

    return(
        <div className="flex flex-col gap-10 py-8 px-6">
        <form action={action} className="flex flex-col gap-3">
          <Input
            name="email" 
            type="text" 
            placeholder="email"
            errors={state?.fieldErrors.email} />
          <Input
            name="first_name" 
            type="text" 
            placeholder="First name"
            errors={state?.fieldErrors.firstname} />
          <Input
            name="last_name" 
            type="text" 
            placeholder="Last name"
            errors={state?.fieldErrors.lastname} />
          <Input
            name="password" 
            type="password" 
            placeholder="At least 4 character password" 
            errors={state?.fieldErrors.password} />
          <Input
            name="confirm_password" 
            type="password" 
            placeholder="confirm password" 
            errors={state?.fieldErrors.confirm_password} />
          <Button text="Save" />
        </form>
      </div>
    )
}