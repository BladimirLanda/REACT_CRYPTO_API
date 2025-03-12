//COMPONENT APP
import { useEffect } from "react";
import { useCryptoStore } from "./store/store"
import CryptoSearchForm from "./components/CryptoSearchForm"
import CryptoPriceDisplay from "./components/CryptoPriceDisplay";

function App() {
  //State
  const { fetchCryptos } = useCryptoStore();

  useEffect(() => {
    fetchCryptos();
  }, []);

  //---VIEW---//
  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Cotizador de <span>Criptomonedas</span>
        </h1>

        <div className="content">
          <CryptoSearchForm />

          <CryptoPriceDisplay />
        </div>
      </div>
    </>
  )
}

export default App
