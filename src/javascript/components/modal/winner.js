import { showModal } from './modal';

export function showWinnerModal(fighter) {
  // alert(fighter.name);
  showModal({
    title: fighter.name,
    bodyElement: fighter.name,
    onClose: () => {
      const root = document.getElementById('root');
      root.innerHTML = 'New GAME';
    },
  });
  // call showModal function
}
