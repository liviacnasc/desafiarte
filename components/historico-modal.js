
export default function HistoricoModal({historico}) {

    function openModal() {
        document.getElementById("historicoModal").showModal();
    }

    return (
        <div>
            <button className="btn" onClick={() => openModal()} >open modal</button>
            <dialog id="historicoModal" className="modal">
            <div className="modal-box">
                <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>

                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
                    <h3 className="ml-3 font-bold">Histórico de Desafios</h3>
                </div>
                <ul className="list bg-base-100 rounded-box">

                    {historico.map((item) => {
                        return (
                        <li key={item._id} className="list-row">
                            <div className="list-col-grow">
                                <div>{item.desafio.titulo}</div>
                                <div className="text-xs uppercase font-semibold opacity-60">{item.data}</div>
                                <div className="badge badge-secondary">{item.desafio.categoria}</div>
                            </div>
                            <button className="btn btn-square btn-ghost">
                                <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                            </button>
                        </li>
                      )
                    })}

                </ul>
            </div>
            </dialog>
        </div>
    )
}