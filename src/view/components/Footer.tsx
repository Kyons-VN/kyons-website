type Props = {
	l: any
}

export default function Footer({ l }: Props) {
  return <div class='h-[171px] w-full bg-blueGrey-800 flex flex-col text-blueGrey-200 bg-footer'>
    <div class='w-full h-[124px] px-11 py-8'>
      <div class='flex flex-row justify-between'>
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
        <div class='flex flex-row gap-2'>
          <strong>{l.footer.social}</strong>
          <i class='icon-linkedin'></i>
          <i class='icon-facebook'></i>
        </div>
      </div>
    </div>
    <div class='w-full h-[47px] text-center'>
      {l.footer.copy}
    </div>
  </div>
}