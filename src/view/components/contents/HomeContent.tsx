import { Component } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import './home.scss';

type Props = {
  l: any;
};
export class HomeContent extends Component<Props> {
  showPioneer;
  setShowPioneer;
  textStyle;
  setTextStyle;
  componentDidMount() {
    console.log('mounted');
    addEventListener('scroll', (event) => {
      if (this.showPioneer) this.setShowPioneer(false);
    });
  }
  componentWillUnmount(): void {
    console.log('unmounted');
  }
  render(props) {
    // export function HomeContent({ l }: Props) {
    [this.textStyle, this.setTextStyle] = useState('opacity:0');
    const [activeTab, setActiveTab] = useState(1);
    [this.showPioneer, this.setShowPioneer] = useState(false);
    const l = props.l;

    useEffect(() => {
      this.setTextStyle('transition: all ease-out 0.8s; opacity: 1; transition-delay: 0.8s');
    });

    return (
      <>
        <div className='w-full h-full flex justify-center home-gradient relative'>
          <div
            class='w-full h-screen p-10 md:py-6 md:px-0 flex flex-col items-center justify-start'
            style={this.textStyle}
          >
            <div class='h-0 md:h-[261px]'></div>
            <div class='flex flex-col gap-4 md:gap-6 items-center w-full  text-white text-center'>
              <h1 class='text-2xl md:text-5xl font-bold md:w-auto w-[189px] flex flex-col md:gap-6'>
                <span class='flex flex-col md:flex-row md:gap-8'>
                  <span>{l.home.knowledgeStart1}</span>
                  <span>{l.home.knowledgeStart2}</span>
                </span>
                <span class='md:text-8xl text-orange md:text-white'>{l.home.knowledgeStart3}</span>
              </h1>
              <span class='md:hidden'>{l.home.aiGenerator}</span>
            </div>
            <div class='h-full md:h-6'></div>
            <div class='flex flex-col justify-center'>
              <div className='flex flex-col gap-4 md:gap-9 text-white text-center items-center md:text-left'>
                <h2 class='md:text-2xl text-lg leading-relaxed md:w-auto w-[315px]'>{l.home.solveMathExam}</h2>
                <a class='btn flex md:inline-block' href='https://student.kyons.vn' target='_blank' title='Kyons App'>
                  <span class='icon-monitor'></span>
                  <span class='leading-6'>{l.home.doItNow}</span>
                </a>
                <div class='col gap-5 items-center text-center'>
                  <span>{l.home.syncRealTime}</span>
                  <span class='hidden md:block'>{l.home.aiGenerator}</span>
                </div>
              </div>
              <div class='h-[80px] md:h-0'></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
