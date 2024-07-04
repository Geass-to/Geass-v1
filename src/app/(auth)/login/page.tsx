import { OAuthButtons } from "@/app/_components/auth/oauth";
import { emailSignup, emailLogin } from "./actions";

export default function LoginPage() {
  return (
    <div className="h-screen w-full bg-gray-900 text-white">
      <form className="">
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button formAction={emailLogin}>Log in</button>
        <button formAction={emailSignup}>Sign up</button>
      </form>
      <OAuthButtons />
    </div>
  );
}
