import Image from "next/image";
import Search from "@/app/_components/search";
import Notes from "@/app/_components/notes";
import Options from "@/app/_components/options";
import Presentation from "@/app/_components/presentation";

export default function Home() {
  return (
    // Aside is to the left of the main content. It's children are arranged vertically.
    <div className="flex flex-row">
      {/*All the children share equal vertical space with a divider. But the space is resizable by user*/}
      {/*space evenly*/}
      <aside className="flex flex-col w-1/4 p-4 border-r-2 justify-evenly">
        <Options />
        <Notes />
        <Presentation />
      </aside>
      <main className="flex flex-col min-h-screen py-2">
        <Image src="/logo.png" alt="logo" width={50} height={50} />
        <Search />
      </main>
    </div>
  );
}
