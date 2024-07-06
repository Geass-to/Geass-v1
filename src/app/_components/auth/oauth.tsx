"use client";
import { oAuthSignIn } from "@/app/(auth)/login/actions";
import { GithubLogo, GoogleLogo, TwitterLogo } from "@phosphor-icons/react";
import type { Provider } from "@supabase/supabase-js";

type OAuthProvider = {
  name: Provider;
  displayName: string;
  icon?: JSX.Element;
};

export function OAuthButtons() {
  const OAuthProviders: OAuthProvider[] = [
    {
      name: "google",
      displayName: "Google",
      icon: <GoogleLogo size={32} weight="bold" />
    },
    {
      name: "github",
      displayName: "GitHub",
      icon: <GithubLogo size={32} weight="bold" />
    },
    {
      name: "twitter",
      displayName: "Twitter",
      icon: <TwitterLogo size={32} weight="bold" />
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
          className="rounded-xl bg-violet-300 px-7 py-2"
        >
          {provider.icon}
        </button>
      ))}
    </div>
  );
}
