import Image from "next/image";
import GlassModal from "@/app/_components/ui/GlassModal";
import LoginBox from "@/app/_components/auth/LoginBox";

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
        height={550}
        className="absolute flex h-full w-full items-center justify-center"
      />
      <LoginBox />
    </div>
  );
}
