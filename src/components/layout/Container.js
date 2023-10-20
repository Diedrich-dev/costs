function Container(props) {
  return (
    <div className={`w-full flex justify-between m-0-auto flex-wrap ${props.customClass}`} >
      {props.children}
    </div>
  )
}

export default Container