import type { Catalago } from "../types/Catalago.ts";
import '../estilos/estilos016.css'


type Props = {
    catalago : Catalago
    onToggle: (id?: string) => void;
    onDelete: (id?: string) => void; 
}


const BookItem = ({catalago, onToggle, onDelete}: Props) => {

    if(catalago.status == false){
        return(
            <li className="linha-naolida">
                <input 
                type="checkbox" 
                checked={catalago.status}
                onChange={() => onToggle(catalago._id)}
                />
                <p>Status: NÃO LIDO</p>
                <p className={catalago.status ? 'concluida' : ''}>Livro: {catalago.title}</p>
                <p className={catalago.status ? 'concluida' : ''}>Autor: {catalago.author}</p>
                <button onClick={() => onDelete(catalago._id)} className="botao-remover">REMOVER</button>
            </li>
        )
    }

    return(
            <li className="linha-lida">
                <input 
                type="checkbox" 
                checked={catalago.status}
                onChange={() => onToggle(catalago._id)}
                />
                <p>Status: LIDO</p>
                <p className={catalago.status ? 'concluida' : ''}>Livro: {catalago.title}</p>
                <p className={catalago.status ? 'concluida' : ''}>Autor: {catalago.author}</p>
                <button onClick={() => onDelete(catalago._id)} className="botao-remover">REMOVER</button>
            </li>
    )
}

export default BookItem;