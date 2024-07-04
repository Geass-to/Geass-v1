import { OAuthButtons } from "@/app/_components/auth/oauth";
import { emailSignup, emailLogin } from "./actions";
import { Button } from "@nextui-org/button";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="h-screen w-full bg-[#0C0C0C] text-white">
      <ul className="absolute top-0 z-50 flex">
        <li className="bg-glass-gradient shadow-glass-shadow h-[600px] w-[40px] rounded-l-[26px] opacity-40 backdrop-blur-[100px]"></li>
        <li className="bg-glass-gradient shadow-glass-shadow h-[600px] w-[40px]  backdrop-blur-[100px]"></li>
        <li className="bg-glass-gradient shadow-glass-shadow h-[600px] w-[40px]  backdrop-blur-[100px]"></li>
        <li className="bg-glass-gradient shadow-glass-shadow h-[600px] w-[40px]  backdrop-blur-[100px]"></li>
        <li className="bg-glass-gradient shadow-glass-shadow h-[600px] w-[40px]  backdrop-blur-[100px]"></li>
        <li className="bg-glass-gradient shadow-glass-shadow h-[600px] w-[40px]  backdrop-blur-[100px]"></li>
        <li className="bg-glass-gradient shadow-glass-shadow h-[600px] w-[40px]  backdrop-blur-[100px]"></li>
        <li className="bg-glass-gradient shadow-glass-shadow h-[600px] w-[40px]  backdrop-blur-[100px]"></li>
        <li className="bg-glass-gradient shadow-glass-shadow h-[600px] w-[40px]  backdrop-blur-[100px]"></li>
        <li className="bg-glass-gradient shadow-glass-shadow h-[600px] w-[40px]  backdrop-blur-[100px]"></li>
        <li className="bg-glass-gradient shadow-glass-shadow h-[600px] w-[40px]  backdrop-blur-[100px]"></li>
        <li className="bg-glass-gradient shadow-glass-shadow h-[600px] w-[40px]  backdrop-blur-[100px]"></li>
        <li className="bg-glass-gradient shadow-glass-shadow h-[600px] w-[40px]  backdrop-blur-[100px]"></li>
        <li className="bg-glass-gradient shadow-glass-shadow h-[600px] w-[40px]  backdrop-blur-[100px]"></li>
        <li className="bg-glass-gradient shadow-glass-shadow h-[600px] w-[40px]  backdrop-blur-[100px]"></li>
        <li className="bg-glass-gradient shadow-glass-shadow h-[600px] w-[40px]  backdrop-blur-[100px]"></li>
        <li className="bg-glass-gradient shadow-glass-shadow h-[600px] w-[40px]  backdrop-blur-[100px]"></li>
        <li className="bg-glass-gradient shadow-glass-shadow h-[600px] w-[40px] rounded-r-[26px] opacity-40 backdrop-blur-[100px]"></li>
      </ul>
      <Image src="/images/loginBG.png" width={1000} height={500} alt="Login Image" />
      <form className="">
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <Button color="primary" formAction={emailLogin}>
          Log In
        </Button>
        <button formAction={emailSignup}>Sign up</button>
      </form>
      <OAuthButtons />
    </div>
  );
}
