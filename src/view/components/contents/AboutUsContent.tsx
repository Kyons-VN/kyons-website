type Props = {
  l: any;
};

export function AboutUsContent({ l }: Props) {
  return (
    <div class='bg-about-us w-full md:h-full flex justify-center relative'>
      <div id='about-us' class='absolute mt-[-78px]'></div>
      <div class='w-full md:w-[666px] md:mt-[16vh] py-6 flex flex-col gap-6 items-center'>
        <h5 class='text-orange font-bold'>{l.aboutUs.kyons}</h5>
        <div class='flex flex-col gap-2 px-8 text-center'>
          <span>{l.aboutUs.text1}</span>
          <span>{l.aboutUs.text2}</span>
        </div>
        <div class='md:hidden w-1/2 p-6 border border-blueGrey-300 text-center rounded-lg bg-white'>
          <img class='inline-block h-10' src='/images/About-Us/antler.webp' alt='Antler' />
          <div class='h-3'></div>
          <span>{l.aboutUs.antler}</span>
        </div>
        <div class='grid grid-cols-2 md:grid-cols-3 gap-4 md:p-6 pt-0 px-6'>
          <div class='p-6 border border-blueGrey-300 text-center rounded-lg bg-white'>
            <img class='inline-block h-10' src='/images/About-Us/ethos.webp' alt='Ethos' />
            <div class='h-3'></div>
            <span>{l.aboutUs.ethos}</span>
          </div>
          <div class='hidden md:block p-6 border border-blueGrey-300 text-center rounded-lg bg-white'>
            <img class='inline-block h-10' src='/images/About-Us/antler.webp' alt='Antler' />
            <div class='h-3'></div>
            <span>{l.aboutUs.antler}</span>
          </div>
          <div class='p-6 border border-blueGrey-300 text-center rounded-lg bg-white'>
            <div class='flex items-center justify-center h-10'>
              <img class='inline-block w-[111px]' src='/images/About-Us/bssc.svg' alt='BSSC' />
            </div>
            <div class='h-3'></div>
            <span>{l.aboutUs.bssc}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
