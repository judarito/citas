import { createClient } from "@libsql/client/.";

export const tursoConn=()=>
    createClient({
                    url: process.env.DB_URL ,
                    authToken: process.env.DB_TOKEN,
                })