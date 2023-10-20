function Input({type, text, name, placeholder, handleOnChange, value}) {
  return (
    <div className="flex flex-col mb-4">
      <label className="mb-2.2 font-bold" htmlFor={name}>{text}:</label>
      <input
        type={type} 
        name={name} 
        placeholder={placeholder}
        id={name} 
        onChange={handleOnChange} 
        value={value}
        className="p-2.3 border-none rounded-none placeholder:text-[#7B7B7B]"/>
    </div>
  )
}

export default Input