import { FaListAlt, FaCheckSquare, FaTrash, FaPlusSquare} from "react-icons/fa";

const App = () => {
  return (
        <section id="todo">
            <h1 className="m-3">Liste de tâches</h1>
            <ul className="list-group m-3ls ">
                <li className="list-group-item d-flex align-tiems-center justify-content-between">
                    Ranger la vaisselle 
                    <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
                </li>
                <li className="list-group-item d-flex align-tiems-center justify-content-between">
                    Répondre appel d'offres
                    <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
                </li>
                <li className="list-group-item d-flex align-tiems-center justify-content-between">
                    Signer contrat
                    <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
                </li>
                <li className="list-group-item d-flex align-tiems-center justify-content-between">
                    Ranger la salon
                    <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
                </li>
            </ul>
            <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
                <div className="btn-group">
                    <a href="#" className="btn btn-outline-dark bg-light"><FaListAlt/></a>
                    <a href="#" className="btn btn-outline-dark bg-light"><FaCheckSquare/></a>
                    <a href="#" className="btn btn-outline-dark bg-light"><FaPlusSquare/></a>
                </div>
                <button className="btn btn-outline-dark bg-light"><FaTrash/></button>
            </footer>
        </section>
  )
}

export default App
