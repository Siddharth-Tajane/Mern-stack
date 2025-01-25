import React, { useState } from 'react'

function Calculator() {
const[num1, setnum1] = useState(0);
const[num2, setnum2] = useState(0);
const[res, setres] = useState(0);

const storenum1 = (e) => {
  setnum1(parseFloat(e.target.value));

}
const storenum2 = (e) => {
    setnum2(parseFloat(e.target.value))
}
const addition = (e) => {
    
    var c = num1 + num2
    setres(c)
}
const substraction = (e) => {
    
    var c = num1 - num2
    setres(c)
}
const multiplication = (e) => {
    
    var c = num1 * num2
    setres(c)
}
const division = (e) => {
    
    var c = num1 / num2;
    setres(c);
}

  return (
    <>
<div className='calculator'>
    <center>
    <div className='calculatorname'>
    <h1>Calculator</h1>
    </div>
    
    <form id='myform'>
      <div className='input-container1'>
        <label>
        <input type="number" id='num1' placeholder='Enter Number' onChange={storenum1} /><br />
        <input type="number" id='num2' placeholder='Enter Number' onChange={storenum2} /><br />
        </label>
      </div>
      <div className='button-container'>
        <input type="button" value='add' onClick={addition} /><br />
        <input type="button" value='sub' onClick={substraction} /><br />
        <input type="button" value='mul' onClick={multiplication} /><br />
        <input type="button" value='div' onClick={division} /><br />
      </div>
        <h1 className='result'>Result : {res}</h1>
    </form> 
    </center>
</div>
    </>
    
  )
}

export default Calculator