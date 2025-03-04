import { History } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <div className="flex flex-row items-center justify-around w-full">
        <p>
          DESAFIAR-TE
        </p>

        <button class="flex flex-row w-fit gap-1 bg-transparent hover:bg-gray-600 rounded-4xl p-2 ">
            <History/>
            Desafios anteriores
        </button>

      </div>


      <main className="flex flex-col gap-8 row-start-2 items-center sm:items- bg-gray-800 rounded-2xl p-5">
        
        <div className="flex flex-row items-center justify-around w-full">
          <small><b>DATA:</b> 04/03/2025</small>
          <small><b>CATEGORIA:</b> Fotografia</small>

        </div>
        
        <h1>
          Título do Desafio
        </h1>

        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor posuere nisi, congue sollicitudin ex suscipit a. Aenean vestibulum lectus sit amet eros maximus, eu fringilla diam dapibus.
        </p>

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Compartilhe
        </a>
      </footer>
    </div>
  );
}
