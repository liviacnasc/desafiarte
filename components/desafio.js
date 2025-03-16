'use client'

export default function Desafio({desafio}) {
    console.log(desafio)
    return (
        <main >
          <div className="card bg-base-100 w-96 shadow-sm">
            <div className="card-body">
              <div className="flex justify-between align-center">
                <h2 className="card-title">
                  {desafio[0].desafio.titulo}
                </h2>
                <div className="text-xs uppercase font-semibold opacity-60">{desafio[0].data}</div>

              </div>
              <p>{desafio[0].desafio.descricao}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-secondary">{desafio[0].desafio.categoria}</div>
              </div>
            </div>
          </div>
        </main>
    )

}