function Select({text, name, options, handleOnChange, value}) {
  return (
    <div className="flex flex-col mb-4">
      <label className="mb-2.2 font-bold" htmlFor={name}>{text}:</label>
      <select
        name={name} 
        id={name} 
        onChange={handleOnChange}
        value={value || ''}
        className="p-2.3 border-none rounded-none">
          <option>
            Selecione uma opção
          </option>
          {options.map((option) => (
            <option value={option.id} key={option.id}>{option.name}</option>
          ))}
      </select>
    </div>
  )
}

export default Select