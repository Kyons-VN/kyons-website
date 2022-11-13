import { activeSolution, setActiveSolution } from "@application/app";
import { useStore } from "@nanostores/preact";

type Props = {
	l: any
}

export function SolutionContent({l}:Props){

  const $activeSolution = useStore(activeSolution)
  
  function setActive(index:number) {
		setActiveSolution(index)
	}

  return <div class='flex flex-row w-full h-full'>
    <div class="w-full md:w-1/3 h-full bg-blueGrey-700 flex flex-col px-6">
      <div class='flex flex-col gap-6 p-6 text-white md:mt-28'>
        <h5 class='text-orange'>{l.solution.ourSolution}</h5>
        <div className={$activeSolution==0?'flex flex-col gap-2 h-32':'hidden'}>
          <h6 class='font-bold'>{l.solution.mockTest}</h6>
          <span class='text-justify'>{l.solution.mockTestDesc}</span>
        </div>
        <div className={$activeSolution==1?'flex flex-col gap-2 h-32':'hidden'}>
          <h6 class='font-bold'>{l.solution.yourLearningPath}</h6>
          <span class='text-justify'>{l.solution.yourLearningPathDesc}</span>
        </div>
        <div className={$activeSolution==2?'flex flex-col gap-2 h-32':'hidden'}>
          <h6 class='font-bold'>{l.solution.tutor}</h6>
          <span class='text-justify'>{l.solution.tutorDesc}</span>
        </div>
        <span dangerouslySetInnerHTML={{__html: l.solution.registerNow}}></span>
        <div><a href="" class='btn'>{l.solution.createAccount}</a></div>
      </div>
      <div class='flex-1'></div>
      <ul class='indicators'>
        <li className={$activeSolution==0?'active':null} onClick={()=>setActive(0)}></li>
        <li className={$activeSolution==1?'active':null} onClick={()=>setActive(1)}></li>
        <li className={$activeSolution==2?'active':null} onClick={()=>setActive(2)}></li>
      </ul>
    </div>
    <div class='w-full md:w-2/3 h-full'>
      <ul class='inner'>
        <li className={$activeSolution==0?'active':null} onClick={()=>setActive(0)}>
          <img src='images/Mock-Test/Group 1457.svg' />
        </li>
        <li className={$activeSolution==1?'active':null} onClick={()=>setActive(1)}>
          <img src='images/Learning-Path/Group 1458.svg' /></li>
        <li className={$activeSolution==2?'active':null} onClick={()=>setActive(2)}>
          <img src='images/Tutor/Group 1459.svg' /></li>
      </ul>
    </div>
  </div>;
  }