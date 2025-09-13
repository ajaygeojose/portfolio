const Navbar = ({navs}) => {
  return (
    <div>{
        navs.map((item,index)=>{return <button key={index}>{item}</button>})
    }</div>
  )
}

export default Navbar