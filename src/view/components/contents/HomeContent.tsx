import { useEffect, useState } from 'preact/hooks';

type Props = {
  l: any;
};

export function HomeContent({ l }: Props) {
  const [textStyle, setTextStyle] = useState('opacity:0');

  useEffect(() => {
    setTextStyle('transition: all ease-out 0.8s; opacity: 1; transition-delay: 0.8s');
  });

  return (
    <div className='w-full h-full flex justify-center home-gradient text-white relative'>
      <div class='w-full h-screen p-10 md:py-6 md:px-0 md:w-[600px] flex flex-col gap-6 items-center' style={textStyle}>
        <div class='flex flex-col gap-4 md:gap-8 items-center w-full md:w-[346px] md:absolute top-[109px] left-[104px]'>
          <h1 class='md:text-5xl font-bold text-center md:text-left text-xl'>
            <span class='md:leading-normal'>{l.home.knowledgeStart1}</span>
            <br />
            <span class='md:leading-normal text-orange'>{l.home.knowledgeStart2}</span>
          </h1>
          <span>Thi đại học bao đậu với các bài thi thử với lộ trình học được tạo ra bởi AI của Kyons!</span>
        </div>
        <div class='flex flex-col gap-4 md:gap-8 w-[283px] absolute md:bottom-[200px] md:right-[180px] text-center md:text-left bottom-[80px]'>
          <h4>{l.home.noLimit1}</h4>
          <div className='flex flex-col gap-5 '>
            <a
              class='btn flex w-full md:w-auto md:inline-block'
              href='https://student.kyons.vn'
              target='_blank'
              title='Kyons App'
            >
              <span class='icon-monitor'></span>
              <span class='leading-6'>{l.home.noLimit2}</span>
            </a>
            <span>{l.home.noLimit3}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
