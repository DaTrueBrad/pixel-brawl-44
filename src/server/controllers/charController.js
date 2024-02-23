import { Character } from "../models/char.js";
import { Weapon } from "../models/weapon.js";

export const addCharacter = async (req, res) => {
  try {
    let newChar = await Character.create(req.body);
    console.log(newChar.id);
    let tempWeapons = req.body.weapons.map((w) => {
      w.characterId = newChar.id;
      return w;
    });
    await Weapon.bulkCreate(req.body.weapons);
    res.status(200).send("Success");
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

export const getCharacters = async (req, res) => {
  try {
    let info = await Character.findAll({ include: Weapon });
    res.status(200).send(info);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

export const getCharacter = async (req, res) => {
  try {
    let info = await Character.findOne({
      where: { id: req.params.charId },
      include: Weapon,
    });
    console.log("Here", info)
    res.status(200).send(info)
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

export const getMyCharacters = async (req, res) => {
  try {
    let myCharacters = await Character.findAll({where: {userId: req.params.userId}})
    res.status(200).send(myCharacters)
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
}