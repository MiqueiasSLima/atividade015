import { useState } from "react";
import type { Catalago } from "../types/Catalago.ts";
import '../estilos/estilos016.css'

type Props = {
    aoEnviar : (catalago: Catalago) => Promise<any>;

}

const BookForm = ({ aoEnviar } : Props) => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [estado, setEstado] = useState('nao-lido');

    const enviar = async (e: React.FormEvent) => {
        e.preventDefault();

        if(!title || !author) return;

        const statusBoolean = estado === 'lido';

        try{
            await aoEnviar({title, author, status: statusBoolean});

            setTitle('');
            setAuthor('');
            setEstado('nao-lido');
        } catch (error) {
            console.error("Falha ao cadastrar o livro");
        } 
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
            <select value={estado} onChange={(e) => setEstado(e.target.value)}>
                <option value="lido">LIDO</option>
                <option value="nao-lido">NÃO LIDO</option>
            </select>
            <button type="submit" className="botao-add">Adicionar</button>
        </form>
    )
}

export default BookForm;