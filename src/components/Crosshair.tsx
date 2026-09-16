
const Crosshair = ({className}: {className?:string})=>(
    <svg xmlns="http://w3.org" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" width="100" height="100">

  <line x1="2" y1="12" x2="8" y2="12" />
  <line x1="16" y1="12" x2="22" y2="12" />
</svg>

)
export default function crosshair() {
  return (
    <div>crosshair</div>
  )
}
