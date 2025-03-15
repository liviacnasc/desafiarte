'use client'

export default function Desafio({desafio}) {
    console.log(desafio)
    return (
        <main >
          <div className="card bg-base-100 w-96 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">
                {desafio[0].desafio.titulo}
                <div className="badge badge-secondary">{desafio[0].desafio.categoria}</div>
              </h2>
              <p>{desafio[0].desafio.descricao}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">{desafio[0].data}</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        </main>
    )

}