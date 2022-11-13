import { atom } from 'nanostores';

export const isMenuOpen = atom(false);

export const activeMenu = atom(0);

export function setActive(index: number) {
  activeMenu.set(index);
}
