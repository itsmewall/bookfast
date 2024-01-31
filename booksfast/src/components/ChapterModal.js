// ChapterModal.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ChapterModal = () => {
  const { titulo } = useParams();
  const [livro, setLivro] = useState({ titulo: '', capitulos: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/resumos/${titulo}`);
        const livroData = await response.json();

        if (livroData.livro) {
          setLivro(livroData.livro);
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, [titulo]);

  return (
    <div className="chapter-modal">
      <h2>{livro.titulo}</h2>
      {livro.capitulos && livro.capitulos.map((capitulo) => (
        <div key={capitulo.id}>
          <h3>{capitulo.titulo}</h3>
          <p>{capitulo.conteudo}</p>
        </div>
      ))}
    </div>
  );
};

export default ChapterModal;
