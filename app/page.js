'use client'

import { History } from "lucide-react";
import Image from "next/image";
import Desafio from "../components/desafio";
import { useDesafio } from "../context/desafio-context";
import HistoricoModal from "../components/historico-modal";


export default function Home() {
  const { desafio, historico, loading } = useDesafio();

  return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

        <div className="flex flex-row items-center justify-around w-full">
          <p>
            DESAFIAR-TE
          </p>
          {
            historico.length > 0 ? (

            <HistoricoModal historico={historico}></HistoricoModal>) :

            <span className="loading loading-dots loading-xs"></span>
          }

        </div>

        {
          desafio.length > 0 ? (
            <Desafio desafio={desafio}/>
          ) : (
            <span className="loading loading-dots loading-xs"></span>
          )
        }
        
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
