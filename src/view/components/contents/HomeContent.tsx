type Props = {
	l: any
}

export function HomeContent({l}:Props){
  return <div class='w-full md:w-[600px] py-6 flex flex-col gap-6 items-center'>
  <div class='why'>
    <h1 class='text-5xl font-bold text-center'><span class='text-base'>{l.home.knowledgeStart1}</span><br/><span class=' leading-normal'>{l.home.knowledgeStart2}</span></h1>
  </div>
  <span class='text-center'>{l.home.kyonsIs}</span>
  <div className="flex flex-col gap-2 items-center text-center">
    <span>{l.home.ifStudent}</span>
    <a class='flex justify-center gap-3 px-4 py-2 text-orange border border-blueGrey-300 rounded-md' href="https://student.tuhoconline.org" target='_blank' title='Kyons App'>
      <span class='icon-monitor'></span>
      <strong class='leading-6'>{l.home.startNow}</strong>
    </a>
  </div>
</div>;
}