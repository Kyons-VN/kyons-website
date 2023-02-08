import { activeMenu } from '@application/app';
import { useStore } from '@nanostores/preact';
import { CreatorSVG } from './SVG/files/CreatorSVG';

type Props = {
  l: any;
};

export function CreatorContent({ l }: Props) {
  const $activeMenu = useStore(activeMenu);
  const isMobile = document.body.offsetWidth < 768;

  return (
    <div class='flex flex-col md:flex-row w-full h-full px-6 py-14 gap-6 items-start bg-about-us'>
      <div id='creator' class='absolute mt-[-120px]'></div>
      {/* <img class='w-full md:w-1/2' src={`/images/${l.menu.lang}/creator.svg`} alt={l.menu.kyonsCreator} /> */}
      <CreatorSVG
        l={l.menu.languageCode}
        class={$activeMenu == 3 ? 'start in' : 'start'}
        size={isMobile ? [null, 214] : [704, 436]}
        viewBox={'0 0 704 436'}
      />
      <div class='w-full md:w-1/4 md:mt-5 flex flex-col gap-6 py-6 md:p-6 text-center md:text-left'>
        <h5
          class='text-orange custom-transition'
          style={$activeMenu != 3 ? 'opacity: 0;transform: translateY(80px);' : null}
        >
          {l.menu.kyonsCreator}
        </h5>
        <span
          class='custom-transition delay-1'
          style={$activeMenu != 3 ? 'opacity: 0;transform: translateY(80px);' : null}
        >
          {l.creator.kyonsCreatorDesc}
        </span>
        <div
          class='custom-transition delay-2'
          style={$activeMenu != 3 ? 'opacity: 0;transform: translateY(80px);' : null}
        >
          <a class='btn flex md:inline-block justify-center' href='https://forms.gle/yaLgbmicUXabCHz68' target='_blank'>
            {l.creator.joinUs}
          </a>
        </div>
      </div>
    </div>
  );
}
