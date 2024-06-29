import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

interface SessionContent {
  id?: number;
  email? : string;
  firstName?: string;
  lastName?: string;
  password?: string;
}

export default function getSession() {
  return getIronSession<SessionContent>(cookies(), {
    cookieName: "bandipul",
    password: process.env.COOKIE_PASSWORD!,
  });
}