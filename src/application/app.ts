import { atom } from 'nanostores';

export const isMenuOpen = atom(false);

export const activeMenu = atom(1);

export function setActive(index: number) {
  activeMenu.set(index);
}
