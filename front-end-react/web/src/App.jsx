import { useEffect, useState } from 'react';
import './App.css';
import CurrencyCard from './components/CurrencyCard';
import ProjectInfo from './components/ProjectInfo';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {

        const data = await fetch("http://localhost:8080").then(res => res.json());
        
        // Ordena os dados por rank e pega os 10 primeiros     
        setData(data.sort((a, b) => a.rank - b.rank).slice(0, 8));

      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
      }
    }

    loadData();
  }, []);

  return (
    <div id='main'>
      <div id='left-side'>
        <h1 id='project-title'>CRYPTOCURRENCIES STATUS</h1>
        {data.length > 0 ? (
          data.map((currency) => (
            <CurrencyCard key={currency.id} props={currency} />
          ))
        ) : (
          <p>Carregando...</p>
        )}
        <p>Informações atualizadas a cada 30s.</p>
        <p>API utilizada: <a href="https://coinmarketcap.com/api/documentation/v1/" target="_blank" >https://coinmarketcap.com/api/documentation/v1/</a></p>
      </div>
      <div id='right-side'>
        <ProjectInfo />
      </div>
    </div>
  );
}

export default App;
