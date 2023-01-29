 import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  //port: config.dbPort,
  host: config.host,

  dialect: "postgres",
  storage: ":memory:",
});
// export let sequelize: Sequelize;
// if (process.env.NODE_ENV === "production") {
//   sequelize = new Sequelize(process.env.URL);
// } else {
//   sequelize = new Sequelize(
//     process.env.POSTGRES_DB || "udagram",
//     process.env.POSTGRES_USERNAME || "postgres",
//     "",
//     {
//       host: process.env.POSTGRES_HOST || "localhost",
//       dialect: "postgres",
//       pool: {
//         max: 100,
//         min: 0,
//         idle: 200000,
//         acquire: 1000000,
//       },
//     }
//   );
// }