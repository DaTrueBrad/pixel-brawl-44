import { Sequelize } from "sequelize";
import { config } from "dotenv";
config()
const {CONNECTION_STRING} = process.env

export const db = new Sequelize(CONNECTION_STRING)