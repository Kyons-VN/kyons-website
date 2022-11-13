type Props = {
	l: any
}

export function AboutUsContent({l}:Props){
  return <div class='w-full md:w-[666px] md:mt-[16vh] py-6 flex flex-col gap-6 items-center'>
    <h5 class='text-orange font-bold'>{l.aboutUs.kyons}</h5>
    <div class='flex flex-col gap-2 px-8 text-center'>
      <span>{l.aboutUs.text1}</span>
      <span>{l.aboutUs.text2}</span>
    </div>
    <div class='grid grid-cols-3 gap-4'>
      <div class='p-6 border border-blueGrey-300 text-center rounded-lg'>
        <img class='inline-block' src='images/About-Us/ethos.svg' alt='Ethos'/>
        <div class='h-3'></div>
        <span>{l.aboutUs.ethos}</span>
      </div>
      <div class='p-6 border border-blueGrey-300 text-center rounded-lg'>
        <img class='inline-block' src='images/About-Us/antler.svg' alt='Antler'/>
        <div class='h-3'></div>
        <span>{l.aboutUs.antler}</span>
      </div>
      <div class='p-6 border border-blueGrey-300 text-center rounded-lg'>
        <img class='inline-block' src='images/About-Us/bssc.svg' alt='BSSC'/>
        <div class='h-3'></div>
        <span>{l.aboutUs.bssc}</span>
      </div>
    </div>
  </div>;
}