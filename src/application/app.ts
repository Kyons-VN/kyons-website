import { atom } from 'nanostores';

export const isMenuOpen = atom(false);

export const activeMenu = atom(0);

export const activeSolution = atom(0);

export const isScrolling = atom(false);

export function setActive(index: number, force: boolean = false) {
  if (index < 0 || index > 4 || isScrolling.get()) return
  if (force) {
    activeMenu.set(index)
    return
  }
  if (activeMenu.get() == 2) {

    if (activeSolution.get() == 0 && index == 1) activeMenu.set(1);
    else if (activeSolution.get() == 2 && index == 3) activeMenu.set(3);
    else {
      if (index == 3) activeSolution.set(activeSolution.get() + 1)
      if (index == 1) activeSolution.set(activeSolution.get() - 1)
    }
  }
  else {
    activeMenu.set(index);
  }
}

export function setActiveSolution(index: number) {
  if (index < 0 || index > 2 || isScrolling.get()) return;
  activeSolution.set(index);
}

export function setScrolling(active: boolean) {
  isScrolling.set(active);
}

export function toggleMenu() {

  console.log(isMenuOpen.get());

  isMenuOpen.set(!isMenuOpen.get());
}
