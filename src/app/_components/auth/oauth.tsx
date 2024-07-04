"use client";
import { oAuthSignIn } from "@/app/(auth)/login/actions";
import { GithubLogo } from "@phosphor-icons/react";
import type { Provider } from "@supabase/supabase-js";

type OAuthProvider = {
  name: Provider;
  displayName: string;
  icon?: JSX.Element;
};

export function OAuthButtons() {
  const OAuthProviders: OAuthProvider[] = [
    {
      name: "github",
      displayName: "GitHub",
      icon: <GithubLogo size={32} weight="bold" />
    }
  ];
  return (
    <>
      {OAuthProviders.map((provider, index) => (
        <button
          onClick={async () => {
            await oAuthSignIn(provider.name);
          }}
          key={index}
        >
          Login with {provider.displayName}
        </button>
      ))}
    </>
  );
}
