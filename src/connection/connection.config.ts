import { DataSource } from "typeorm"
import { config } from 'dotenv';

config();

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
});

AppDataSource.initialize()
    .then(() => {
        console.log("Connection Work");
    })
    .catch((e) => {
        console.log(`Error In Connection: ${e}`);
    })