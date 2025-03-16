import { History } from "lucide-react";

export default function HistoricoModal({historico, loading}) {

    function openModal() {
        document.getElementById("historicoModal").showModal();
    }

    return (
        <div>
            <button className="btn btn-outline btn-secondary" onClick={() => openModal()} >
            <History />
            Histórico
            </button>
            <dialog id="historicoModal" className="modal">
            <div className="modal-box">
                <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                {
                    loading ? (
                        <span className="loading loading-dots loading-xs"></span>
                    ) : (
                        <div>
                            

                        <div className="flex">
                            <History />
                            <h3 className="ml-3 font-bold">Histórico de Desafios</h3>
                        </div>
                        <ul className="list bg-base-100 rounded-box">

                            {historico.map((item) => {
                                return (
                                    <li key={item._id} className="list-row">
                                    <div className="list-col-grow">
                                        <div>{item.desafio.titulo}</div>
                                        <div>{item.desafio.descricao}</div>
                                        <div className="mt-2 badge badge-outline badge-secondary"><b>Categoria:</b>{item.desafio.categoria}</div>
                                    </div>
                                    <div className="text-xs uppercase font-semibold opacity-60">{item.data}</div>
                                </li>
                            )
                        })}

                        </ul>
                        </div>
                    )
                }

            </div>
            </dialog>
        </div>
    )
}