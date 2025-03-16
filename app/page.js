'use client'

import { History, Share } from "lucide-react";
import Image from "next/image";
import Desafio from "../components/desafio";
import { useDesafio } from "../context/desafio-context";
import HistoricoModal from "../components/historico-modal";


export default function Home() {
  const { desafio, historico, loading } = useDesafio();

  const { DateTime } = require('luxon')

  const now = DateTime.local({zone: 'America/Sao_paulo', locale: 'pt-br'})
  const end =  now.plus({days: 1}).startOf('day')

  setInterval(() => {
    const remaining = end.diff(now)
    //console.log(remaining.toFormat(`d'd' h'h' m'm' ss`))
  }, 1000)

  return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

        <div className="flex flex-row items-center justify-around w-full">
          <p>
            DESAFIAR-TE
          </p>

            <HistoricoModal historico={historico} loading={loading}></HistoricoModal>

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
            <Share/>
            Compartilhe
          </a>
        </footer>
      </div>

  );
}
