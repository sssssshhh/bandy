"use client";

import Input from "@/components/input";
import { useFormState } from "react-dom";
import Button from "@/components/button";
import { CreateNamePasssword } from "./actions";

export default function namePassword() {
  const [state, action] = useFormState(CreateNamePasssword, null)
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <form action={action} className="flex flex-col gap-3">
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
        <Button text="Continue" />
      </form>
    </div>
  );
}