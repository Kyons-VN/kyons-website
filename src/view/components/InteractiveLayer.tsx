import { AboutUsContent } from '@components/contents/AboutUsContent';
import { CreatorContent } from '@components/contents/CreatorContent';
import { HomeContent } from '@components/contents/HomeContent';
import { SolutionContent } from '@components/contents/SolutionContent';
import { useStore } from '@nanostores/preact';
import { useSwipeable } from 'react-swipeable';
import { activeMenu, setActive, setScrolling } from 'src/application/app';
import { ContactContent } from './contents/ContactContent';

type Props = {
	l: any
}

export default function InteractiveLayer({ l }: Props) {
  const $activeMenu = useStore(activeMenu)
  function setActiveMenu(index:number) {
		setActive(index)
	}
  let running = false
  let interval: NodeJS.Timeout
  let isMobile = window.screen.width<768

  const handlers = useSwipeable({
    onSwipedLeft: () => setActiveMenu($activeMenu+1),
    onSwipedRight: () => setActiveMenu($activeMenu-1),
    onSwipedDown: () => setActiveMenu($activeMenu-1),
    onSwipedUp: () => setActiveMenu($activeMenu+1),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true
  });

  function wheel(e:MouseEvent){
    
    if(running||isMobile) return
    else{
      running = true;
      if(e['wheelDelta']>0){
        setActiveMenu($activeMenu-1)
      }
      else{
        setActiveMenu($activeMenu+1)
      }
      setScrolling(true);
      clearInterval(interval);
      interval = setInterval(()=>{
        running = false;
        setScrolling(false);
        clearInterval(interval);
      },500);
    }
  }
  const defaultClasses = 'absolute top-0 left-0 w-full h-full flex flex-col md:flex-row md:justify-center'
  console.log(isMobile);
  
  // if(isMobile) return <div class={defaultClasses} {...handlers}>
  //   <HomeContent l={l}/>
  //   {/* <AboutUsContent l={l} /> */}
  //   {/* <SolutionContent l={l} />
  //   <CreatorContent l={l} />
  //   <ContactContent l={l} /> */}
  // </div>

  return <div class='w-full h-full flex items-center relative' onWheel = {(e) => wheel(e)} {...handlers}>
    <div className={$activeMenu==0?`${defaultClasses} visible`:`${defaultClasses} invisible`}>
      <HomeContent l={l}/>
    </div>
    <div className={$activeMenu==1?`${defaultClasses} visible`:`${defaultClasses} invisible`}>
      <AboutUsContent l={l} />
    </div>
    <div className={$activeMenu==2?`${defaultClasses} visible`:`${defaultClasses} invisible`}>
      <SolutionContent l={l} />
    </div>
    <div className={$activeMenu==3?`${defaultClasses} visible`:`${defaultClasses} invisible`}>
      <CreatorContent l={l} />
    </div>
    <div className={$activeMenu==4?`${defaultClasses} visible`:`${defaultClasses} invisible`}>
      <ContactContent l={l} />
    </div>
  </div>
}