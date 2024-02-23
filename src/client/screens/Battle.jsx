import React from "react";
import BattleChar from "../components/BattleChar";

//TODO BATTLE SEQUENCE DOES NOT USE WEAPONS OR LUCK.

const Battle = ({ selected, setSelected }) => {
  console.log("battle", selected);

  const assignHealth = (c) => {
    let index = selected.findIndex((e) => e.id === c.id);
    let newState = [...selected];
    newState[index].health = c.health;
    setSelected(newState);
  };

  const nextTurn = () => {
    //? EASY VARIABLES FOR ACCESS
    let char1 = selected[0];
    let char2 = selected[1];
    // check which character is faster, they move first.
    // the attack is will be the char.attack x (weapon.attack/10) ()
    // random chance for Luck to crit damage by 1.5x. Determined by luck /10. ex: if luck = 50, 5% chance to crit.
    // assign health values
    // check to see if any health values are less than 0
    //? CHECKING TO SEE WHO MOVES FIRST BASED ON SPEED
    //* MAY NEED TO ALTER THIS IN CASE THEY HAVE EQUAL SPEED.
    let firstToMove = char1.speed > char2.speed ? char1 : char2;
    let secondToMove = char1.speed < char2.speed ? char1 : char2;

    //? CREATING THE TOTAL DAMAGE FOR THE ATTACK. WILL NEED TO CHANGE HARDCODED 20 FOR WEAPON ATTACK VALUE
    let firstAttack = firstToMove.attack * 20;
    secondToMove.health -= firstAttack;
    console.log(
      `${firstToMove.name} attacks ${secondToMove.name} for ${firstAttack} damage! ${secondToMove.name} health is now ${secondToMove.health}`
    );
    //? CHECK TO SEE IF THE SLOWER CHARACTER LOST YET! IF THEY DID, THEY DON'T GET A CHANCE TO ATTACK.
    if (secondToMove.health <= 0) {
      secondToMove.health = 0;
      alert(`${secondToMove.name} lost!`);
      assignHealth(secondToMove);
    } else {
      assignHealth(secondToMove);
      let secondAttack = secondToMove.attack * 20;
      firstToMove.health -= secondAttack;
      console.log(
        `${secondToMove.name} attacks ${firstToMove.name} for ${secondToMove} damage! ${firstToMove.name} health is now ${firstToMove.health}`
      );
      if (firstToMove.health <= 0) {
        assignHealth(firstToMove);
        firstToMove.health = 0;
        alert(`${firstToMove.name} lost!`);
      } else {
        assignHealth(firstToMove);
      }
    }
  };

  return (
    <div className="w-full">
      <h1>{selected.length === 2 ? "Let's battle" : "Pick two characters"}</h1>
      <div className="w-full flex justify-around">
        {selected.map((c) => (
          <BattleChar char={c} />
        ))}
      </div>
      <button onClick={nextTurn} className="p-2 bg-orange-600 rounded">Go!</button>
    </div>
  );
};

export default Battle;
