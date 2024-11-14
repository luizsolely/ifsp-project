import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {

        const data = await fetch("http://localhost:8080").then(res => res.json());
        
        // Ordena os dados por rank e pega os 10 primeiros     
        setData(data.sort((a, b) => a.rank - b.rank).slice(0, 10));

      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
      }
    }

    loadData();
  }, []);

  return (
    <>
      {data.length > 0 ? (
        data.map((currency) => (
          <div key={currency.id}>
            <p>ID: {currency.id} - {currency.name} - Rank: {currency.rank}</p>
          </div>
        ))
      ) : (
        <p>Carregando...</p>
      )}
    </>
  );
}

export default App;
