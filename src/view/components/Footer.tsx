type Props = {
	l: any
}

export default function Footer({ l }: Props) {
  return <div class='md:h-[171px] w-full bg-blueGrey-800 flex flex-col text-blueGrey-200 md:bg-footer'>
    <div class='w-full md:h-[124px] p-6 md:px-11 md:py-8'>
      <div class='flex flex-col md:flex-row justify-between items-start gap-6'>
        <img class='w-[126px]' src='images/logo.svg' alt='' />
        <div class='flex flex-col gap-2'>
          <div class='flex flex-row gap-2'>
            <i class='icon-Location'></i>
            <span><strong>{l.footer.company}</strong><br /><span>{l.footer.address}</span></span>
          </div>
          <div class='flex flex-row gap-2'>
            <i class='icon-Phone'></i>
            <span>{l.footer.phone}</span>
          </div>
        </div>
        <div class='flex flex-row gap-2 md:w-[214px]'>
          <strong>{l.footer.social}</strong>
          <i class='icon-linkedin'></i>
          <a class='flex' href="https://www.facebook.com/groups/605349140894461" title='Kyons Community'><i class='icon-facebook'></i></a>
          <i class='icon-youtube'></i>
          <i class='icon-zalo'></i>
        </div>
      </div>
    </div>
    <div class='w-full md:h-[47px] text-center p-6 md:p-0'>
      {l.footer.copy}
    </div>
  </div>
}