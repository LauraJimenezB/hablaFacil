export const SearchBox = (setSearchField, searchField) => {
    const cleanInput = () => {
      setSearchField('');
    }
    return (
      <div>
        <input type="text" placeholder='   Buscar...' value={searchField} onChange={(e)=>setSearchField(e.target.value)}></input>
        <button onClick={()=>cleanInput()}>Volver</button>
      </div>
    ) 
  }