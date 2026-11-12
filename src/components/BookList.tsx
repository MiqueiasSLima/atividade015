import type { Catalago } from "../types/Catalago.ts";
import BookItem from "./BookItem"
import '../estilos/estilos016.css'

type Props = {
    catalago : Catalago[];
    onToggle: (id?: string) => void;
    onDelete: (id?: string) => void;
}


const BookList = ({catalago, onToggle, onDelete}: Props) => {

    if(catalago.length === 0){
        return <p>Nenhuma livro registado.</p>
    }

    return(
        <div>
            {
                catalago.map(item => (
                <BookItem 
                key={item._id} 
                catalago={item} 
                onToggle={onToggle}
                onDelete={onDelete}
                />))
            }
        </div>
    )
}

export default BookList;