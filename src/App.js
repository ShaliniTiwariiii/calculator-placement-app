import React,{useState}from 'react'
import './App.css';
import './cal.css'
function App() {
  const[result,setResult]=useState('')
  function handleOnClick(e){
setResult(result.concat(e.target.name))
  }
  function clear(){
setResult('')
  }
  function backspace(){
setResult(result.slice(0,-1))
  }
  function calculate(){
    try{
      setResult(eval(result).toString())
    }catch(err){
      setResult('Error')
    }

  }
  return (
    <div className='bigdiv'>
    <div className="App">
   <from>
    <input type='text' value={result}/>
   </from>
   <div className='keypad'>

<div className='div1'>
<button className='seven'  name='7'onClick={handleOnClick}>7</button>
<button className= 'eight'name='8'onClick={handleOnClick}>8</button >
<button className='nine' name='9'onClick={handleOnClick}>9</button >
<button className= 'ten'name='/'onClick={handleOnClick}>&divide;</button >
</div>
<div className='div2'>
  <button className='four'name='4'onClick={handleOnClick}>4</button >
<button className='five'name='5'onClick={handleOnClick}>5</button>
<button className='six'name='6'onClick={handleOnClick}>6</button>
<button className='multipyly'name='*'onClick={handleOnClick}>&times;</button>
</div>
<div className='div3'>
<button className='one'name='1'onClick={handleOnClick}>1</button>
<button className='two'name='2'onClick={handleOnClick}>2</button >
<button className='three'name='3'onClick={handleOnClick}>3</button >
<button className='subtract'name='-'onClick={handleOnClick}>&ndash;</button >
</div>
<div className='div4'>
<button className='zero'name='0'onClick={handleOnClick}>0</button >
<button className='dot'name='.'onClick={handleOnClick}>.</button >
<button className='equal'name='='onClick={calculate}>=</button >
<button className='sum'name='+'onClick={handleOnClick}>+</button >


{/* <button onClick={backspace}>C</button > */}
 
    </div>
    <div className='div5'>
<button className='clear' onClick={clear} >Clear</button>
</div>
    </div>
    </div>
    </div>
  );
}

export default App;
