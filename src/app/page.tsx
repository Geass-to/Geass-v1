import Navbar from "@/components/Navbar";
import BookCard from "@/components/ui/BookCard";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background text-white">
      <Navbar userData={user} />
      <BookCard
        image="https://static-cse.canva.com/blob/1427892/ColorfulIllustrationYoungAdultBookCover.jpg"
        title="The Hypocrite  world"
        volume={10}
      />
    </main>
  );
}
