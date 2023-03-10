import { DataSource } from "typeorm";
require('dotenv').config()

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: false,
  logging: true,
  entities: ["src/entities/*.ts"],
  migrations: ["src/migrations/*.ts"],
})

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source initialized")
  })
  .catch((err) => {
    console.log("Error during Data Source initialization", err)
  })