import { Button } from "@nextui-org/button";
import Image from "next/image";
import { Input, Link } from "@nextui-org/react";
import { OAuthButtons } from "./oauth";
import { emailSignup } from "@/app/(auth)/login/actions";

const SignUpBox = () => {
  return (
    <section className="absolute z-50 flex h-full w-full flex-col items-center justify-center gap-2">
      <Link href="/" className="cursor-pointer">
        <Image width={120} height={50} src="/images/GeassLogo.png" alt="Logo" />
      </Link>
      <h1 className="mb-2 text-2xl">Sign Up</h1>
      <OAuthButtons />
      <div className="mt-4 w-56 border-b border-white/10"></div>
      <form className="flex flex-col gap-5 p-4">
        <Input
          name="email"
          // label="Email"
          type="email"
          className="w-[300px] dark"
          size="lg"
          placeholder="Email"
          required
        />
        <Input
          name="password"
          // label="Password"
          type="password"
          className="w-[300px] dark"
          size="lg"
          placeholder="Password"
          required
        />
        <Input
          name="password"
          // label="Password"
          type="password"
          className="w-[300px] dark"
          size="lg"
          placeholder="Confirm Password"
          required
        />
        <Button type="submit" color="primary" size="lg" variant="shadow" formAction={emailSignup}>
          Sign Up
        </Button>
        <div className="flex justify-center gap-4 text-sm">
          <Link href="/login" color="secondary">
            Log In
          </Link>
          <Link href="/auth/forgetpassword" color="secondary">
            Forget Password
          </Link>
          <Link href="/contactus" color="secondary">
            Contact Us
          </Link>
        </div>
      </form>
    </section>
  );
};

export default SignUpBox;
