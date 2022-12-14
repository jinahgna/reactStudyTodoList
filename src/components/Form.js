import React from 'react'

export default function form( {handleSubmit, value, setValue} ) {

    // 할일 input text에 입력
  const handleChange = (e) => {
    setValue(e.target.value)
  };

  return (
    <form style={{display:'flex', marginTop: '20px'}} onSubmit={ handleSubmit }>
        <input 
        type="text" 
        name="value" 
        style={{ flex:'10', padding:'5px'}} 
        placeholder="해야할 일을 입력하세요." 
        value={ value } 
        onChange={ handleChange }/>
        <input 
        type="submit" 
        value="입력" 
        className="btn" 
        style={{ flex:1 }}/>
    </form>
  )
}
