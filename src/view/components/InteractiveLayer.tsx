import { useStore } from '@nanostores/preact';
import { activeMenu, setActive } from 'src/application/app';
import { AboutUsContent } from './contents/AboutUsContent';
import { HomeContent } from './contents/HomeContent';

type Props = {
	l: any
}

export default function InteractiveLayer({ l }: Props) {
  const $activeMenu = useStore(activeMenu)
  function setActiveMenu(index:number) {
		setActive(index)
	}
  let running = false;
  let interval;
  function wheel(e:MouseEvent){
    console.log(running);
    
    if(running) return;
    else{
      running = true;
      console.log(e);
      interval = setInterval(()=>{

        running = false;
      },5000);
    }
  }
  const defaultClasses = 'absolute top-0 left-0 w-full h-full md:px-20 flex justify-center'

  return <div class='w-full h-full flex items-center relative' onWheel = {(e) => wheel(e)}>
    <div className={$activeMenu==0?`${defaultClasses} visible`:`${defaultClasses} invisible`}>
      <HomeContent l={l}/>
    </div>
    <div className={$activeMenu==1?`${defaultClasses} visible`:`${defaultClasses} invisible`}>
      <AboutUsContent l={l} />
    </div>
  </div>
}