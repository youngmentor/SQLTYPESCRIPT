import { Sequelize } from "sequelize";
import envVariables from "../configs/environmental";

const sequelize = new Sequelize({
    username: "root",
    password: "root",
    database: "first_class",
    host: "127.0.0.1",
    port: envVariables.databasePort,
    dialect: "mysql",
});

export default sequelize;
