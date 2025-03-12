//COMPONENT CRYPTO-PRICE-DISPLAY
import { useMemo } from "react";
import { useCryptoStore } from "../store/store";
import Spinner from "./Spinner";

function CryptoPriceDisplay() {
    //State
    const { loading, resultCurrency } = useCryptoStore();

    const hasResult = useMemo(() => !Object.values(resultCurrency).includes('') , [resultCurrency]);

    //---VIEW---//
    return (
        <div className="result-wrapper">
            {loading ? <Spinner /> : hasResult && (
                <>
                    <h2>Cotización</h2>
                    <div className="result">
                        <img src={`https://cryptocompare.com/${resultCurrency.IMAGEURL}`} alt="img-crypto" />
                        <div>
                            <p>El precio es de: <span>{resultCurrency.PRICE}</span></p>
                            <p>Precio más alto del día: <span>{resultCurrency.HIGHDAY}</span></p>
                            <p>Precio más bajo del día: <span>{resultCurrency.LOWDAY}</span></p>
                            <p>Variación últimas 24 horas: <span>{resultCurrency.CHANGEPCT24HOUR}</span></p>
                            <p>Última actualización: <span>{resultCurrency.LASTUPDATE}</span></p>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default CryptoPriceDisplay;