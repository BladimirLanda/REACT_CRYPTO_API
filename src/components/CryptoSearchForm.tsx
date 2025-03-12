//COMPONENT CRIPTO-SEARCH-FORM
import { useCryptoStore } from "../store/store";
import { currencies } from "../data"
import { ChangeEvent, FormEvent, useState } from "react";
import { Pair } from "../types";
import Alert from "./Alert";

function CryptoSearchForm() {
    //State
    const { cryptoCurrencies, fetchData } = useCryptoStore();
    const [ pair, setPair ] = useState<Pair>({
        currency: '',
        cryptocurrency: ''
    });
    const [ error, setError ] = useState('');

    //Eventos
    const handleChange = (e : ChangeEvent<HTMLSelectElement>) => {
        setPair({
            ...pair,
            [e.target.name] : e.target.value
        })
    }

    const handleSumbit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(Object.values(pair).includes('')) {
            setError('Todos los campos son obligatorios');
            return;
        }

        setError('');
        fetchData(pair);
    }

    //---VIEW---//
    return (
        <form className="form" onSubmit={ handleSumbit }>

            {error && <Alert>{error}</Alert>}

            <div className="field">
                <label htmlFor="currency">Moneda:</label>
                <select 
                name="currency" 
                id="currency"
                value={pair.currency}
                onChange={ handleChange }>
                    <option value="">-- Seleccione --</option>
                    {currencies.map(currency => (
                        <option key={currency.code} value={currency.code}>{currency.name}</option>
                    ))}
                </select>
            </div>

            <div className="field">
                <label htmlFor="cryptocurrency">Criptomoneda:</label>
                <select 
                name="cryptocurrency" 
                id="cryptocurrency"
                value={pair.cryptocurrency}
                onChange={ handleChange }>
                    <option value="">-- Seleccione --</option>
                    {cryptoCurrencies.map(crypto => (
                        <option key={crypto.CoinInfo.Name} value={crypto.CoinInfo.Name}>
                            {crypto.CoinInfo.FullName}
                        </option>
                    ))}
                </select>
            </div>

            <input type="submit" value='Cotizar' />
        </form>
    )
}

export default CryptoSearchForm;