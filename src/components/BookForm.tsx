import { useState } from "react";
import type { Catalago } from "../types/Catalago.ts";
import '../estilos/estilos016.css'

type Props = {
    aoEnviar : (catalago: Catalago) => void;

}

const BookForm = ({ aoEnviar } : Props) => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [status] = useState(false);

    const enviar = (e: React.FormEvent) => {
        e.preventDefault();
        if(!title || !author) return;
        aoEnviar({title, author, status});
        setTitle('');
        setAuthor('');
    }

    return(
        <form onSubmit={enviar}>
            <input
                type="text"
                placeholder="Nome do livro"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Nome do autor"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />
            <button type="submit" className="botao-add">Adicionar</button>
        </form>
    )
}

export default BookForm;