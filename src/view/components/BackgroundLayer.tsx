import { useStore } from '@nanostores/preact'
import { activeMenu } from 'src/application/app'

export default function BackgroundLayer() {
  const defaultClasses = 'absolute top-0 left-0 w-full h-full transition-opacity opacity-'
  const $activeMenu = useStore(activeMenu)

  return <div class='w-full h-full flex items-center relative'>
    <div className={$activeMenu==0?`${defaultClasses}100 bg-home`:`${defaultClasses}0 bg-home`} class='opacity-100'></div>
    <div className={$activeMenu==1?`${defaultClasses}100 bg-about-us`:`${defaultClasses}0 bg-about-us`} class='opacity-0'></div>
    <div className={$activeMenu==2?`${defaultClasses}100 bg-lightOrange-4`:`${defaultClasses}0 bg-lightOrange-4`} class='opacity-0'></div>
  </div>
}