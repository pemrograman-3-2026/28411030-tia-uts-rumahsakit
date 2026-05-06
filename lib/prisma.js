import "dotenv/config"
import {PrismaMariaDb} from "@prisma/adapter-mariadb"
import {PrismaClient} from '../generated/prisma/client.ts'

const adapter = new PrismaMariaDb({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'uts_db_rumahsakit'
})


const prisma = new PrismaClient({adapter})
export{prisma}