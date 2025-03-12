//TYPES
import { z } from "zod"
import { CryptoCurrencyResponseSchema, CryptoDataSchema, CurrencySchema, PairSchema } from "../schema/crypto-schema"

//Inferir Esquema
export type Currency = z.infer<typeof CurrencySchema>;

export type CryptoCurrency = z.infer<typeof CryptoCurrencyResponseSchema>;

export type Pair = z.infer<typeof PairSchema>;

export type CryptoData = z.infer<typeof CryptoDataSchema>;