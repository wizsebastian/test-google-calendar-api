import { Sequelize } from "sequelize";
import dotenv from "dotenv"

dotenv.config({ pDB_HOSTath: ".env" })

const { DB_NAME,
    DB_USER,
    DB_PASSWORD,
    DB_PORT,
    DB_HOST } = process.env

const db = new Sequelize(
    DB_NAME, DB_USER, DB_PASSWORD ?? "",
    {
        host: DB_HOST,
        port: DB_PORT,
        dialect: "mysql",
        define: {
            timestamps: true
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        operatorsAliases: false
    }
);

export default db;