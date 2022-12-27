import { activeMenu, setActive } from '@application/app';
import { useStore } from '@nanostores/preact';

type Props = {
  l: any;
};

export function CreatorContent({ l }: Props) {
  const $activeMenu = useStore(activeMenu);

  function setActiveMenu(index: number) {
    setActive(index);
  }

  return (
    <div class='flex flex-col md:flex-row w-full h-full px-6 py-14 gap-6 items-start bg-about-us'>
      <div id='creator' class='absolute mt-[-120px]'></div>
      <img class='w-full md:w-1/2' src={`/images/${l.menu.lang}/creator.svg`} alt={l.menu.kyonsCreator} />
      <div class='w-full md:w-1/4 md:mt-5 flex flex-col gap-6 p-6 text-center md:text-left'>
        <h5 class='text-orange'>{l.menu.kyonsCreator}</h5>
        <span>{l.creator.kyonsCreatorDesc}</span>
        <div>
          <a
            class='btn'
            href='https://docs.google.com/forms/d/e/1FAIpQLSff0jnr-WEPHdRkSTx17umXf6TkfIbuQjvZbFgbXt7jl7KM5w/viewform?usp=sf_link'
            target='_blank'
          >
            {l.creator.joinUs}
          </a>
        </div>
      </div>
    </div>
  );
}
