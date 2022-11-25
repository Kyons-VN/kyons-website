import { useStore } from '@nanostores/preact';
import '@styles/menu.scss';
import { useState } from 'preact/hooks';
import { activeMenu, isMenuOpen, setActive, toggleMenu } from 'src/application/app';

type Props = {
  l: any;
};

export default function Menu({ l }: Props) {
  const $activeMenu = useStore(activeMenu);
  const language = l.lang;
  const [isHover, setIsHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  let isMobile = window.screen.width < 768;

  const defaultClass =
    'md:absolute flex flex-col gap-2 py-[6px] px-4 rounded-lg shadow-2 bg-white text-black w-full md:left-0';

  function setActiveMenu(index: number) {
    if (isMobile) {
      setIsOpen(false);
      toggleMenu();
    }
    setActive(index, true);
  }

  function setLanguage(lang: string) {
    if (lang != language) {
      if (lang == 'VI') {
        window.location.href = window.location.origin;
      } else {
        window.location.href = window.location.origin + '/en/';
      }
    } else {
      setIsHover(false);
    }
  }

  function toggle() {
    if (!isMobile) return;
    toggleMenu();
    setIsOpen(!isOpen);
  }

  return (
    <nav class='menu' style={!isOpen && isMobile ? { maxHeight: '78px' } : {}}>
      <div className='flex flex-row justify-between'>
        <a href='#'>
          <img
            class='w-[100px] cursor-pointer'
            src='/images/logo.svg'
            alt='Logo'
            onClick={() => {
              setActiveMenu(0);
            }}
          />
        </a>
        <button class='md:hidden text-[24px]' onClick={toggle}>
          <i className={isMenuOpen.get() ? 'icon-Close' : 'icon-MenuHambuger'}></i>
        </button>
      </div>
      <ul class='menu-items'>
        <li className={$activeMenu == 1 ? 'active' : null}>
          <a
            class='cursor-pointer'
            href='#about-us'
            onClick={() => {
              setActiveMenu(1);
            }}
          >
            {l.aboutUs}
          </a>
        </li>
        <li className={$activeMenu == 2 ? 'active' : null}>
          <a
            class='cursor-pointer'
            href='#solution'
            onClick={() => {
              setActiveMenu(2);
            }}
          >
            {l.solution}
          </a>
        </li>
        <li className={$activeMenu == 3 ? 'active' : null}>
          <a
            class='cursor-pointer'
            href='#creator'
            onClick={() => {
              setActiveMenu(3);
            }}
          >
            {l.kyonsCreator}
          </a>
        </li>
        <span class='hidden md:flex flex-1'></span>
        <li className={$activeMenu == 4 ? 'active' : null}>
          <a
            class='cursor-pointer'
            href='#contact'
            onClick={() => {
              setActiveMenu(4);
            }}
          >
            {l.contact}
          </a>
        </li>
      </ul>
      <div
        class='flex flex-row relative h-10 md:px-4 md:py-[10px] items-center justify-between text-sm md:w-24'
        onClick={() => setIsHover(!isHover)}
        onBlur={() => setIsHover(false)}
        tabIndex={0}
      >
        <span>{language}</span>
        <i className={isHover ? 'icon-ArrowUp' : 'icon-ArrowDown'}></i>
        <div
          className={isHover ? `${defaultClass} hidden md:flex` : `${defaultClass} hidden`}
          style='bottom: calc(-100% - 30px);'
          onClick={() => setIsHover(false)}
        >
          <div
            className={language == 'VI' ? 'text-orange cursor-pointer' : 'cursor-pointer'}
            onClick={() => setLanguage('VI')}
          >
            VI
          </div>
          <hr class='text-blueGrey-300' />
          <div
            className={language == 'EN' ? 'text-orange cursor-pointer' : 'cursor-pointer'}
            onClick={() => setLanguage('EN')}
          >
            EN
          </div>
        </div>
      </div>
      <div
        className={isHover ? `${defaultClass} flex md:hidden` : `${defaultClass} hidden`}
        style='bottom: calc(-100% - 30px);'
        onClick={() => setIsHover(false)}
      >
        <div
          className={language == 'VI' ? 'text-orange cursor-pointer' : 'cursor-pointer'}
          onClick={() => setLanguage('VI')}
        >
          VI
        </div>
        <hr class='text-blueGrey-300' />
        <div
          className={language == 'EN' ? 'text-orange cursor-pointer' : 'cursor-pointer'}
          onClick={() => setLanguage('EN')}
        >
          EN
        </div>
      </div>
    </nav>
  );
}
