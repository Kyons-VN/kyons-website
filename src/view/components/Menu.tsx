import { useStore } from '@nanostores/preact';
import '@styles/menu.scss';
import { activeMenu, setActive } from 'src/application/app';
type Props = {
	l: any
};

export default function Menu({ l }: Props) {

  const $activeMenu = useStore(activeMenu)
  function setActiveMenu(index:number) {
		setActive(index)
	}
  return <nav class='menu'>
      <img class='w-[100px] cursor-pointer' src='logo.svg' alt='Logo' onClick={()=>{setActiveMenu(0)}} />
      <ul class='menu-items'>
        <li className={$activeMenu==1?'active':null}><span onClick={()=>{setActiveMenu(1)}}>{l.aboutUs}</span></li>
        <li className={$activeMenu==2?'active':null}><span onClick={()=>{setActiveMenu(2)}}>{l.solution}</span></li>
        <li className={$activeMenu==3?'active':null}><span onClick={()=>{setActiveMenu(3)}}>{l.kyonsCreator}</span></li>
        <span class='flex-1'></span>
        <li className={$activeMenu==4?'active':null}><span onClick={()=>{setActiveMenu(4)}}>{l.contact}</span></li>
      </ul>
    </nav>
}
