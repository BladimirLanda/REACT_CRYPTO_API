//SERVICE
import axios from "axios"
import { Pair } from "../types";
import { CryptoCurrenciesResponseSchema, CryptoDataSchema } from "../schema/crypto-schema"

const getCryptos = async () => {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

    const { data: { Data } } = await axios(url);

    //Esquema.safeParse(Consulta): Valida los tipos y devuelve la estructura del Esquema
    //Estructura = {success, data}
    const result = CryptoCurrenciesResponseSchema.safeParse(Data);

    if(result.success) {
        return result.data;
    }
}

const getCryptoPrice = async (pair : Pair) => {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.cryptocurrency}&tsyms=${pair.currency}`;

    const { data : { DISPLAY } } = await axios(url);

    const result = CryptoDataSchema.safeParse(DISPLAY[pair.cryptocurrency][pair.currency]);

    if(result.success) {
        return result.data;
    }
}

export {
    getCryptos,
    getCryptoPrice
}