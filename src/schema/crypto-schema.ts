//SCHEMA CRYPTO
import { z } from "zod" //Esquemas TS: npm i zod

/*
Zod es una librería de validación de esquemas de datos. Es una alternativa a otras bibliotecas como 
Valibot, pero tiene la ventaja de tener un enfoque más explícito en la creación de esquemas de validación.

Zod permite definir los tipos de datos que esperas recibir, validarlos, y realizar transformaciones 
sobre esos datos, todo ello sin perder la seguridad de tipos proporcionada por TypeScript.

1) Validación de datos: Puedes validar datos en objetos, arrays, cadenas de texto, números, etc.
2) Tipos inferidos: Zod está diseñado para trabajar de forma fluida con TypeScript, lo que te 
permite inferir tipos automáticamente a partir de los esquemas de validación que defines.
*/

//Esquema de Validación
export const CurrencySchema = z.object({
    code: z.string(),
    name: z.string()
});

export const CryptoCurrencyResponseSchema = z.object({
    CoinInfo : z.object({
        FullName: z.string(),
        Name: z.string()
    })
});

export const CryptoCurrenciesResponseSchema = z.array(CryptoCurrencyResponseSchema);

export const PairSchema = z.object({
    currency: z.string(),
    cryptocurrency: z.string()
});

export const CryptoDataSchema = z.object({
    IMAGEURL: z.string(),
    PRICE: z.string(),
    HIGHDAY: z.string(),
    LOWDAY: z.string(),
    CHANGEPCT24HOUR: z.string(),
    LASTUPDATE: z.string()
});