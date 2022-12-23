const SelectList = (props) => {
  const {data, className} = props

  return (
    <ul className={className}>
      {data.map(menuItem => 
        <li key={menuItem.id}>
          <button>
            {menuItem.name}
          </button>  
        </li>
      )}
    </ul>
  )
}

export default SelectList