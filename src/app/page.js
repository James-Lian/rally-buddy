import Image from "next/image";

import { Paddle3D } from "@/components/paddle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 pb-24 pt-12">

      <div className="flex-row">
        <Paddle3D /> 
      </div>

      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 hover:bg-white duration-200 transition-all pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <span className="font-mono font-bold">Start a game</span>
          &nbsp;with a friend :)
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 text-xl"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}<span className="font-bold">James Lian</span>
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center justify-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-black before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[220px] after:w-full sm:after:w-[380px] after:translate-x-1/3 after:bg-gradient-conic after:from-rose-200 after:via-red-800 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <div className="z-10 flex-1 space-y-[12px] items-center justify-center bg-[#ffffff22] hover:bg-[#ffffff33] hover:p-8 hover:rounded-xl duration-200 transition-all shadow-lg p-5 rounded-md">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/ping-pong.png"
            alt="Ping Pong Logo"
            width={230}
            height={80}
            priority
          />
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/rally-buddy.png"
            alt="Rally Buddy Logo"
            width={530}
            height={80}
            priority
          />
        </div>
      </div>

      <div className="group mb-23 text-center justify-items-center">
        <button
          className="font-semibold outline-none text-2xl px-8 py-5 hover:shadow-lg duration-200 rounded-lg transition-shadow"
        >
          Start&nbsp;
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            {"->"}
          </span>
        </button>
      </div>
    </main>
  );
}
