import express from "express"
import ViteExpress from "vite-express"
import { db } from "./util/db.js";
import { User } from "./models/user.js";
import { Character } from "./models/char.js";
import { Weapon } from "./models/weapon.js";
import { addCharacter, getCharacters,getCharacter, getMyCharacters } from "./controllers/charController.js";
import { login, register } from "./controllers/authController.js";

const app = express();
app.use(express.json())

User.hasMany(Character)
Character.belongsTo(User)

Character.hasMany(Weapon)
Weapon.belongsTo(Character)


app.post('/api/addCharacter', addCharacter)
app.get('/api/characters', getCharacters)
app.get('/api/character/:charId', getCharacter)
app.get(`/api/myCharacter/:userId`, getMyCharacters)

app.post('/api/login', login)
app.post('/api/register', register)

db.sync()

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
