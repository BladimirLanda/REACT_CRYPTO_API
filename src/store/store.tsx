//STORE
import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { CryptoCurrency, CryptoData, Pair } from "../types"
import { getCryptos, getCryptoPrice } from "../services/CryptoService"

//Type
type CryptoStateType = {
    cryptoCurrencies: CryptoCurrency[],
    resultCurrency: CryptoData,
    loading: boolean,
    fetchCryptos: () => Promise<void>,
    fetchData: (pair : Pair) => Promise<void>
}

//Constantes
const initialState = {
    IMAGEURL: '',
    PRICE: '',
    HIGHDAY: '',
    LOWDAY: '',
    CHANGEPCT24HOUR: '',
    LASTUPDATE: ''
}

//Store
export const useCryptoStore = create<CryptoStateType>()(
    devtools(
        (set) => ({
            cryptoCurrencies: [],
            resultCurrency: {...initialState},
            loading: false,
        
            fetchCryptos: async () => {
                const cryptoResult = await getCryptos();
        
                set(() => ({
                    cryptoCurrencies: cryptoResult
                }));
            },

            fetchData: async (pair) => {
                set(() => ({
                    loading : true
                }));

                const cryptoResult = await getCryptoPrice(pair);

                set(() => ({
                    resultCurrency : cryptoResult,
                    loading: false
                }));
            }
        })
    )
);