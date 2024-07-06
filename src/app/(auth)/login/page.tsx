import { OAuthButtons } from "@/app/_components/auth/oauth";
import { emailSignup, emailLogin } from "./actions";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import GlassModal from "@/app/_components/ui/GlassModal";
import { Input } from "@nextui-org/react";

export default function LoginPage() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#0C0C0C] text-white">
      <Image
        src="/images/loginBG.png"
        alt="Login Image"
        width={4000}
        height={500}
        className="absolute right-[40%] top-0 z-10"
      />
      <Image
        src="/images/loginBG.png"
        alt="Login Image"
        width={4000}
        height={500}
        className="absolute -right-[40%] top-0 z-10"
      />
      <GlassModal
        width={40}
        height={500}
        className="absolute flex h-full w-full items-center justify-center"
      />
      <section className="absolute z-50 flex h-full w-full flex-col items-center justify-center gap-2">
        <Image width={120} height={50} src="/images/GeassLogo.png" alt="Logo" />
        <h1 className="mb-2 text-2xl">Sign In</h1>
        <OAuthButtons />
        <div className="mt-4 w-56 border-b border-white/10"></div>
        <form className="flex flex-col gap-5 p-4">
          <Input
            name="email"
            type="email"
            className="w-[300px] dark"
            size="lg"
            placeholder="Email"
            required
          />
          <Input
            name="password"
            type="password"
            className="w-[300px] dark"
            size="lg"
            placeholder="Password"
            required
          />
          <Button
            color="primary"
            size="lg"
            variant="shadow"
            className="bg-primary"
            formAction={emailLogin}
          >
            Sign In
          </Button>
          <div className="flex gap-4 text-sm">
            <button formAction={emailSignup}>Sign Up</button>
            <button formAction={emailSignup}>Forgot Password</button>
            <button formAction={emailSignup}>Contact Us</button>
          </div>
        </form>
      </section>
    </div>
  );
}
