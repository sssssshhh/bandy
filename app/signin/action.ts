"use server";

export async function handleForm(prevState: any, formData: FormData){
    console.log(prevState);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log(formData.get("email"), formData.get("password"))
    return {
        errors: ["wrong password", "password too short"],
      };
  }