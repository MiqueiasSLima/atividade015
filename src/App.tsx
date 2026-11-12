import { useEffect, useState } from 'react'
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import type { Catalago } from './types/Catalago';
import axios from 'axios';

const API_URL = 'https://crudcrud.com/api/dbc1a99581a54690994666d1ab31c490/livros';

function App() {

  const [livros, setLivros] = useState<Catalago[]>([])

  const adicionarLivro = (dados: Catalago) => {
    return axios
    .post<Catalago>(API_URL, dados)
    .then(resposta => {setLivros(prev => [...prev, resposta.data])})
    .catch(erro => {
      console.error("Erro ao salvar livro:", erro);
      throw erro;
    });
  }

  const alternarStatus = (id?: string) => {
    
    const livroAtual = livros.find(item => item._id === id);
    if (!livroAtual) return;

    const novoStatus = !(livroAtual.status ?? false);

    const { _id, ...dadosAtualizados } = livroAtual;
    const livroParaEnviar = { ...dadosAtualizados, status: novoStatus };

    axios
      .put(`${API_URL}/${id}`, livroParaEnviar)
      .then(() => {
        setLivros(prevLista =>
          prevLista.map(item => {
            if (item._id === id) {
              return { ...item, status: novoStatus };
            }
            return item;
          })
        );
      })
      .catch(() => alert("Erro ao atualizar lista!"));
  };

  const removerLivro = (id?: string) => {
    axios
      .delete(`${API_URL}/${id}`)
      .then(() => {
        setLivros(prevLista => prevLista.filter(item => item._id !== id));
      })
      .catch(() => alert("Erro ao remover livro!"));
      
  };

  useEffect(() => {
      axios
      .get<Catalago[]>(API_URL)
      .then(resposta => setLivros(resposta.data));
  },[]);


  return (
    <>
      <main>
        <h2>Registrar Livro</h2>
        <BookForm aoEnviar={adicionarLivro}/>
        <BookList catalago={livros} onToggle={alternarStatus} onDelete={removerLivro}/>
      </main>
    </>
  )
}

export default App
