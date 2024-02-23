import { db } from "../util/db.js";
import { DataTypes } from "sequelize";

export const Character = db.define("character", {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  name: DataTypes.STRING,
  origin: DataTypes.STRING,
  image: DataTypes.STRING,
  health: DataTypes.INTEGER,
  attack: DataTypes.INTEGER,
  defense: DataTypes.INTEGER,
  speed: DataTypes.INTEGER,
  special_attack: DataTypes.INTEGER,
  special_defense: DataTypes.INTEGER,
  luck: DataTypes.INTEGER,
})