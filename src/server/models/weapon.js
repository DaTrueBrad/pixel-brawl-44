import { db } from "../util/db.js";
import { DataTypes } from "sequelize";

export const Weapon = db.define("weapon", {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  name: DataTypes.STRING,
  attack: DataTypes.INTEGER,
  type: DataTypes.STRING
})