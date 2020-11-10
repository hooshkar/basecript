import { SSL_OP_NO_TLSv1_1 } from "constants";

export type KeysEnum<T> = { [P in keyof Required<T>]: number };
