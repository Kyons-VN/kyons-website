import { AboutUsContent } from '@components/contents/AboutUsContent';
import { CreatorContent } from '@components/contents/CreatorContent';
import { HomeContent } from '@components/contents/HomeContent';
import { SolutionContent } from '@components/contents/SolutionContent';
import { useStore } from '@nanostores/preact';
import { useEffect } from 'preact/hooks';
import { useSwipeable } from 'react-swipeable';
import { activeMenu, setActive, setNextSolution, setPreviousSolution, setScrolling } from 'src/application/app';
import { ContactContent } from './contents/ContactContent';

type Props = {
  l: any;
};

export default function InteractiveLayer({ l }: Props) {
  const $activeMenu = useStore(activeMenu);
  function setActiveMenu(index: number) {
    setActive(index);
  }
  let running = false;
  let interval: NodeJS.Timeout;
  let isMobile = window.screen.width < 768;
  const screenHeight = window.screen.height;
  var root = document.querySelector(':root');

  const handlers = useSwipeable({
    // onSwipedLeft: () => setActiveMenu($activeMenu + 1),
    // onSwipedRight: () => setActiveMenu($activeMenu - 1),
    // onSwipedDown: () => setActiveMenu($activeMenu-1),
    // onSwipedUp: () => setActiveMenu($activeMenu+1),
    onSwipedLeft: () => setNextSolution(),
    onSwipedRight: () => setPreviousSolution(),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  function wheel(e: MouseEvent) {
    // console.log(e.view.scrollTo(0,));

    //  e.stopPropagation()
    // 	e.preventDefault()
    //   e.stopImmediatePropagation()
    // console.log(running);

    if (running || isMobile) {
      return;
    } else {
      running = true;
      if (isMobile) {
        // console.log(window.scrollY);
        // if (window.scrollY > screenHeight / 2) {
        //   console.log('1');
        //   setActiveMenu(1);
        // } else {
        //   console.log('2');
        //   setActiveMenu(0);
        // }
      } else {
        root.setAttribute('style', 'scroll-behavior: auto;');
        if (e['wheelDelta'] > 0) {
          setActiveMenu($activeMenu - 1);
        } else {
          setActiveMenu($activeMenu + 1);
        }
        setScrolling(true);
      }
      clearInterval(interval);
      interval = setInterval(() => {
        running = false;
        root.removeAttribute('style');
        if (!isMobile) setScrolling(false);
        clearInterval(interval);
      }, 500);
    }
  }

  useEffect(() => {
    console.log('useEffect');
    // Trigger your effect
    const element = document.querySelector('#interactive-layer');
    const body = document.body;
    window.document.addEventListener('onhashchange', () => {
      console.log(window.location);
    });

    const scrollTop = 0,
      scrollLeft = 0;
    // window.pageYOffset || document.documentElement.scrollTop;
    // scrollLeft =
    // window.pageXOffset || document.documentElement.scrollLeft,
    // changeWheelSpeed(this.base,0.1);
    // element.addEventListener('wheel',(e) => wheel(e as MouseEvent));
    return () => {
      // Optional: Any cleanup code
    };
  }, []);

  const defaultClasses =
    'md:absolute md:top-0 md:left-0 w-full h-auto min-h-[calc(100vh_-_78px)] md:h-full md:flex-row md:justify-center';
  // console.log(isMobile);

  function test() {
    console.log('ok');
  }

  // if(isMobile) return <div class={defaultClasses} {...handlers}>
  //   <HomeContent l={l}/>
  //   {/* <AboutUsContent l={l} /> */}
  //   {/* <SolutionContent l={l} />
  //   <CreatorContent l={l} />
  //   <ContactContent l={l} /> */}
  // </div>

  // onWheel = {(e) => wheel(e)}

  return (
    <div id='interactive-layer' class='w-full h-full flex flex-col items-center relative' onWheel={(e) => wheel(e)}>
      <div className={$activeMenu == 0 ? `${defaultClasses} md:flex` : `${defaultClasses} md:hidden `}>
        <HomeContent l={l} />
      </div>
      <div
        className={$activeMenu == 1 ? `${defaultClasses} md:flex` : `${defaultClasses} md:hidden `}
        style='min-height: unset'
      >
        <AboutUsContent l={l} />
      </div>
      <div className={$activeMenu == 2 ? `${defaultClasses} md:flex` : `${defaultClasses} md:hidden `}>
        <SolutionContent l={l} />
      </div>
      <div className={$activeMenu == 3 ? `${defaultClasses} md:flex` : `${defaultClasses} md:hidden `}>
        <CreatorContent l={l} />
      </div>
      <div className={$activeMenu == 4 ? `${defaultClasses} md:flex` : `${defaultClasses} md:hidden `}>
        <ContactContent l={l} />
      </div>
    </div>
  );
}

function changeWheelSpeed(container, speedY) {
  console.log('do');

  var scrollY = 0;

  var handleScrollReset = function () {
    scrollY = container.scrollTop;
  };
  var handleMouseWheel = function (e) {
    e.stopPropagation();
    e.preventDefault();
    // scrollY += speedY * e.deltaY
    // if (scrollY < 0) {
    // 	scrollY = 0;
    // } else {
    // 	var limitY = container.scrollHeight - container.clientHeight;
    // 	if (scrollY > limitY) {
    // 		scrollY = limitY;
    // 	}
    // }
    // container.scrollTop = scrollY;
  };

  container.addEventListener('mouseup', handleScrollReset, false);
  container.addEventListener('mousedown', handleScrollReset, false);
  container.addEventListener('mousewheel', handleMouseWheel, false);

  var removed = false;

  return function () {
    if (removed) {
      return;
    }

    container.removeEventListener('mouseup', handleScrollReset, false);
    container.removeEventListener('mousedown', handleScrollReset, false);
    container.removeEventListener('mousewheel', handleMouseWheel, false);

    removed = true;
  };
}
