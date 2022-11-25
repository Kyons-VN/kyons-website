import { activeSolution, setActiveSolution, setNextSolution, setPreviousSolution } from '@application/app';
import { useStore } from '@nanostores/preact';
import { useSwipeable } from 'react-swipeable';

type Props = {
  l: any;
};

export function SolutionContent({ l }: Props) {
  const $activeSolution = useStore(activeSolution);

  function setActive(index: number) {
    setActiveSolution(index);
  }

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

  return (
    <div class='flex flex-row w-full h-full'>
      <div id='solution' class='absolute mt-[-78px]'></div>
      <div class='w-full md:w-[416px] h-full bg-lightOrange-4 md:bg-blueGrey-700 flex flex-col px-6' {...handlers}>
        <div class='flex flex-col gap-6 pt-6 md:p-6 md:text-white md:mt-28 h-full'>
          <h5 class='text-orange'>{l.solution.ourSolution}</h5>
          <div class='md:hidden flex justify-center h-[25vh]'>
            <img className={$activeSolution == 0 ? 'block' : 'hidden'} src='/images/Mock-Test/Group 1457.svg' />
            <img
              className={$activeSolution == 1 ? 'block' : 'hidden'}
              src={`images/${l.menu.lang}/learning-path.svg`}
            />
            <img className={$activeSolution == 2 ? 'block' : 'hidden'} src='/images/Tutor/Group 1459.svg' />
          </div>
          <div className={$activeSolution == 0 ? 'flex flex-col gap-2 h-40' : 'hidden'}>
            <h6 class='font-bold'>{l.solution.mockTest}</h6>
            <span>{l.solution.mockTestDesc}</span>
          </div>
          <div className={$activeSolution == 1 ? 'flex flex-col gap-2 h-40' : 'hidden'}>
            <h6 class='font-bold'>{l.solution.yourLearningPath}</h6>
            <span>{l.solution.yourLearningPathDesc}</span>
          </div>
          <div className={$activeSolution == 2 ? 'flex flex-col gap-2 h-40' : 'hidden'}>
            <h6 class='font-bold'>{l.solution.tutor}</h6>
            <span>{l.solution.tutorDesc}</span>
          </div>
          <span dangerouslySetInnerHTML={{ __html: l.solution.registerNow }}></span>
          <div>
            <a
              class='btn'
              href='https://student.tuhoconline.org/sign-up'
              target='_blank'
              title={`Kyons App | ${l.signUp}`}
            >
              {l.solution.createAccount}
            </a>
          </div>
        </div>
        <div class='flex-1'></div>
        <ul class='indicators'>
          <li className={$activeSolution == 0 ? 'active' : null} onClick={() => setActive(0)}></li>
          <li className={$activeSolution == 1 ? 'active' : null} onClick={() => setActive(1)}></li>
          <li className={$activeSolution == 2 ? 'active' : null} onClick={() => setActive(2)}></li>
        </ul>
      </div>
      <div class='hidden md:flex w-full flex-1 h-full bg-lightOrange-4'>
        <ul class='inner'>
          <li className={$activeSolution == 0 ? 'active' : null} onClick={() => setActive(0)}>
            <img src='/images/Mock-Test/Group 1457.svg' />
          </li>
          <li className={$activeSolution == 1 ? 'active' : null} onClick={() => setActive(1)}>
            <img src={`images/${l.menu.lang}/learning-path.svg`} />
          </li>
          <li className={$activeSolution == 2 ? 'active' : null} onClick={() => setActive(2)}>
            <img src='/images/Tutor/Group 1459.svg' />
          </li>
        </ul>
      </div>
    </div>
  );
}
