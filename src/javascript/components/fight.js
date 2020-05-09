import { controls } from '../../constants/controls';
import { getFighterInfo } from './fighterSelector';

export async function fight(firstFighter, secondFighter) {
  return new Promise((resolve) => {
    let firstFighterData = getFighterInfo(firstFighter._id);
    let secondFighterData = getFighterInfo(secondFighter._id);

    document.addEventListener('keydown', function (controls) {
      switch (controls.code) {
        case 'KeyA': {
          const damage = getDamage(firstFighter, secondFighter);
          secondFighter.health -= damage;

          const bar = document.getElementById('right-fighter-indicator');
          bar.innerText = secondFighter.health;

          if (secondFighter.health < 0) {
            return resolve(firstFighter);
          }
          break;
        }
        case 'KeyJ':
          // eslint-disable-next-line no-case-declarations
          const damage = getDamage(secondFighter, firstFighter);
          firstFighter.health -= damage;

          // eslint-disable-next-line no-case-declarations
          const bar = document.getElementById('left-fighter-indicator');
          bar.innerText = firstFighter.health;

          if (firstFighter.health < 0) {
            return resolve(secondFighter);
          }
          break;
        case 'KeyD':
          getBlockPower(firstFighter);
          break;
        case 'KeyL':
          getBlockPower(secondFighter);
          break;
      }
    });
  });
}

export function getDamage(attacker, defender) {
  const damage = getHitPower(attacker) - getBlockPower(defender);
  console.log(damage);
  if (damage > 0) {
    return damage;
  }
  return 0;

  // return damage
}

export function getHitPower(fighter) {
  const { attack } = getFighterInfo(fighter._id);
  
  const criticalHitChance = Math.random() * 1 + 1;
  console.log('Damage = ' + attack * criticalHitChance);

  return attack * criticalHitChance;
  // return hit power
}

export function getBlockPower(fighter) {
  const { defense } = getFighterInfo(fighter._id);
  const dodgeChance = Math.random() * 1 + 1;
  console.log('block = ' + defense * dodgeChance);

  return defense * dodgeChance;
  // return block power
}
