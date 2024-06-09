"use client";
import { Button } from "@/components/ui/button";
import { createBrowserClient } from "@supabase/ssr";

export default function OAuthForm() {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
  const LoginWithDiscord = async () => {
    supabase.auth.signInWithOAuth({
      provider: "discord",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };
  return (
    <Button
      onClick={LoginWithDiscord}
      className="w-full bg-gradient-to-tr from-violet-600 to-purple-900"
    >
      SignIn With Discord
    </Button>
  );
}
