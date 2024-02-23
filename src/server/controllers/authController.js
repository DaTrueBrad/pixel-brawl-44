import { User } from "../models/user.js";

export const register = async (req, res) => {
  try {
    // ? simple check to see if the username is alrady taken.
    let checkUser = await User.findOne({where: {username: req.body.username}})

    if(checkUser) {
      console.log("Username taken")
      res.status(401).send("Username is already in use.")
    } else {
      console.log("Free to do")
      let newUser = await User.create(req.body)
      res.status(200).send(newUser)
    }
  } catch (error) {
    console.error(error)
    res.status(400).send(error)
  }
}

export const login = async (req, res) => {
  try {
    // ? checkign if user exists with that name
    let validUser = await User.findOne({where: {username: req.body.username}})

    if(!validUser) {
      res.status(401).send("User does not exist with that name")
    } else {
      if(validUser.password !== req.body.password) {
        res.status(401).send("Password Incorrect")
      } else {
        res.status(200).send(validUser)
      }
    }
  } catch (error) {
    console.error(error)
    res.status(400).send(error)
  }
}