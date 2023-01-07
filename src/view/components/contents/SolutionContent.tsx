import {
  activeSolution,
  isInSolution,
  setActiveSolution,
  setNextSolution,
  setPreviousSolution,
} from '@application/app';
import { useStore } from '@nanostores/preact';
import { Component } from 'preact';
import { useSwipeable } from 'react-swipeable';
import { SolutionSVG, SvgFile } from './SVG/SolutionSVG';
import './SVG/style.scss';

type Props = {
  l: any;
};

export class SolutionContent extends Component<Props> {
  s: NodeListOf<Element>[];
  initialized = false;
  activeSolution: number;
  componentDidMount() {
    this.s = [document.querySelectorAll('.s0'), document.querySelectorAll('.s1'), document.querySelectorAll('.s2')];
    activeSolution.subscribe((value) => {
      this.activeSolution = value;

      // if (this.isInSolution && value == 0) {
      // setTimeout(() => {
      // this.setClassName('start in');
      // }, 1000);
      // }
    });
  }
  componentWillUnmount() {
    activeSolution.off();
  }
  render(props) {
    const l = props.l;
    // state === this.state
    const $activeSolution = this.activeSolution;
    const $isInSolution = useStore(isInSolution);

    function hide(elms: HTMLElement[]) {
      elms.forEach((e) => {
        console.log(e.classList);
      });
    }

    function setActive(index: number) {
      setActiveSolution(index);
      switch (index) {
        case 0:
          // console.log(this.s[0]);
          // hide([...this.s[1], ...this.s[2]]);
          break;
        case 1:
          // console.log(this.s[1]);
          break;
        case 2:
          // console.log(this.s[2]);
          break;

        default:
          break;
      }
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
            <h5
              class='text-orange custom-transition'
              style={!$isInSolution ? 'opacity: 0;transform: translateY(80px);' : null}
            >
              {l.solution.ourSolution}
            </h5>
            <div class='md:hidden flex justify-center h-[25vh]'>
              <img
                // className={$activeSolution == 0 ? 'opacity-1 custom-transition delay-2 s0' : 'opacity-0'}
                // class='custom-transition delay-2 s0'
                // style={!$isInSolution ? 'opacity: 0' : null}
                src={`/images/${l.menu.lang}/mock-test.svg`}
                alt={l.solution.mockTest}
              />
              <img
                class='custom-transition delay-2 s1'
                style={!$isInSolution ? 'opacity: 0' : null}
                src={`/images/${l.menu.lang}/learning-path.svg`}
                alt={l.solution.yourLearningPath}
              />
              <img
                class='custom-transition delay-2 s2'
                style={!$isInSolution ? 'opacity: 0' : null}
                src={`/images/${l.menu.lang}/tutor.svg`}
                alt={l.solution.tutor}
              />
            </div>
            <div className='relative h-40'>
              <div
                // className={
                //   $activeSolution == 0 ? 'flex flex-col gap-2 h-40 custom-transition delay-3 opacity-1' : 'opacity-0 hidden'
                // }
                class='flex flex-col gap-2 h-40 absolute'
              >
                <h6
                  class='font-bold custom-transition delay-2 s0'
                  style={!$isInSolution ? 'opacity: 0;transform: translateY(80px);' : null}
                >
                  {l.solution.mockTest}
                </h6>
                <span
                  class='custom-transition delay-3 s0'
                  style={!$isInSolution ? 'opacity: 0;transform: translateY(80px);' : null}
                >
                  {l.solution.mockTestDesc}
                </span>
              </div>
              <div class='flex flex-col gap-2 h-40 custom-transition delay-3 s1 absolute invisible'>
                <h6 class='font-bold custom-transition delay-2'>{l.solution.yourLearningPath}</h6>
                <span class='custom-transition delay-3'>{l.solution.yourLearningPathDesc}</span>
              </div>
              <div class='flex flex-col gap-2 h-40 custom-transition delay-3 s2 absolute invisible'>
                <h6 class='font-bold custom-transition delay-2'>{l.solution.tutor}</h6>
                <span class='custom-transition delay-3'>{l.solution.tutorDesc}</span>
              </div>
            </div>
            <span
              class='custom-transition delay-4'
              style={!$isInSolution ? 'opacity: 0;transform: translateY(80px);' : null}
              dangerouslySetInnerHTML={{ __html: l.solution.registerNow }}
            ></span>
            <div
              class='custom-transition delay-5'
              style={!$isInSolution ? 'opacity: 0;transform: translateY(80px);' : null}
            >
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
            <li
              className={$activeSolution == 0 ? 'active custom-transition' : 'custom-transition'}
              onClick={() => setActive(0)}
            ></li>
            <li
              className={$activeSolution == 1 ? 'active custom-transition' : 'custom-transition'}
              onClick={() => setActive(1)}
            ></li>
            <li
              className={$activeSolution == 2 ? 'active custom-transition' : 'custom-transition'}
              onClick={() => setActive(2)}
            ></li>
          </ul>
        </div>
        <div class='hidden md:flex w-full flex-1 h-full bg-lightOrange-4'>
          <ul class='inner'>
            <li className={$activeSolution == 0 ? 'active' : null}>
              {/* <img src={`/images/${l.menu.lang}/mock-test.svg`} alt={l.solution.mockTest} /> */}
              {/* <MockTest l={l.menu.languageCode} /> */}
              <SolutionSVG l={l.menu.languageCode} file={SvgFile.MockTest} size={[588, 562]} />
            </li>
            <li className={$activeSolution == 1 ? 'active' : null}>
              <SolutionSVG l={l.menu.languageCode} file={SvgFile.LearningPath} size={[674, 557]} />
              {/* <img src={`/images/${l.menu.lang}/learning-path.svg`} alt={l.solution.yourLearningPath} /> */}
            </li>
            <li className={$activeSolution == 2 ? 'active' : null}>
              <img src={`/images/${l.menu.lang}/tutor.svg`} alt={l.solution.tutor} />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
