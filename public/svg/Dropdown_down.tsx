interface Props{
  White?:boolean
}

export  function Dropdown_down({White}:Props) {
  return (
<svg height="8" width="12" fill="none" viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg">
	<path d="M1.41 -7.62939e-08L6 4.59L10.59 -7.62939e-08L12 1.42L6 7.42L0 1.42L1.41 -7.62939e-08Z" fill={White ? '#FFF' :"#343434"}/>
</svg>
  )
}
