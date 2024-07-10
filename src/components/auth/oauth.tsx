"use client";
import { oAuthSignIn } from "@/app/(auth)/login/actions";
import { GithubLogo, GoogleLogo, TwitterLogo } from "@phosphor-icons/react";
import type { Provider } from "@supabase/supabase-js";

type OAuthProvider = {
  name: Provider;
  displayName: string;
  icon?: JSX.Element;
  color?: string;
};

export function OAuthButtons() {
  const OAuthProviders: OAuthProvider[] = [
    {
      name: "google",
      displayName: "Google",
      icon: <GoogleLogo size={32} color="white" weight="bold" />,
      color: "#6c40b9"
    },
    {
      name: "github",
      displayName: "GitHub",
      icon: <GithubLogo size={32} color="black" weight="fill" />,
      color: "#c6c7f8"
    },
    {
      name: "twitter",
      displayName: "Twitter",
      icon: <TwitterLogo size={32} color="white" weight="fill" />,
      color: "#24a4f2"
    }
  ];
  return (
    <div className="flex gap-2 text-black">
      {OAuthProviders.map((provider, index) => (
        <button
          onClick={async () => {
            await oAuthSignIn(provider.name);
          }}
          key={index}
          style={{ backgroundColor: provider.color }}
          className="rounded-xl px-7 py-2"
        >
          {provider.icon}
        </button>
      ))}
    </div>
  );
}
