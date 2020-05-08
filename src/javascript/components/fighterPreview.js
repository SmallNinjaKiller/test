import { createElement } from '../helpers/domHelper';
import { getFighterInfo } from './fighterSelector';

export function createFighterPreview(fighter, position) {
  const positionClassName = position === 'right' ? 'fighter-preview___right' : 'fighter-preview___left';
  const fighterElement = createElement({
    tagName: 'div',
    className: `fighter-preview___root ${positionClassName}`,
  });

  if (fighter) {
    const { name, health, attack } = getFighterInfo(fighter._id);
    const infoElement = createElement({
      tagName: 'div',
      className: `fighter-preview___root___info`,
    });

    const imgElement = createFighterImage(fighter);
    infoElement.innerText = `name: ${name}, health: ${health}, attack: ${attack}`

    fighterElement.append(infoElement)
    fighterElement.append(imgElement);
  }

  console.log(fighterElement);

  return fighterElement;
}

export function createFighterImage(fighter) {
  const { source, name } = fighter;
  const attributes = {
    src: source,
    title: name,
    alt: name,
  };
  const imgElement = createElement({
    tagName: 'img',
    className: 'fighter-preview___img',
    attributes,
  });

  return imgElement;
}
