import './App.css';
import {useState} from "react";
import * as events from "events";


function saveWord(){
    document.getElementById('keyLabel').style.display = 'none';
    document.getElementById('valueLabel').style.display = 'none';
    let inputKey = document.getElementById('inputKey').value.toString();
    let inputValue = document.getElementById("inputValue").value.toString();
    inputKey = inputKey.replace(/ +/g, ' ');
    inputValue = inputValue.replace(/ +/g, ' ');
    if(localStorage.getItem(inputKey) || inputValue === '' || inputKey === '' || inputKey === " " || inputValue === " "){
        if(localStorage.getItem(inputKey)){
            const error = document.getElementById('keyLabel');
            error.textContent = 'The key has already been used';
            error.style.display = 'block';
        }
        if(inputValue === '' || inputValue === ' '){
            const error = document.getElementById('valueLabel');
            error.textContent = 'You must introduce a valid word';
            error.style.display = 'block';
        }
        if(inputKey === '' || inputKey === ' '){
            const error = document.getElementById('keyLabel');
            error.textContent = 'You must introduce a valid key';
            error.style.display = 'block';
        }
    }

    else{
        document.getElementById('inputValue').value = '';
        document.getElementById('inputKey').value = '';
        localStorage.setItem(inputKey, inputValue);
    }
}

function showDrop(){
    if(document.getElementById('dropdown').style.display === "none"){
        document.getElementById('dropdown').style.display = "flex";
    }
    else{
        document.getElementById('dropdown').style.display = 'none';
    }
}


function App() {
    const [key, setKey] = useState('');
    const [value, setValue] = useState('');

    const handleChange = (event) =>{
        let localStorageValue = localStorage.getItem(event.target.value);
        setKey(event.target.value);
        setValue(localStorageValue);
    }
  return (
      <div className={'App'}>
          <div className={'newWords'}>
              <button className={'createNewWordButton'} onClick={showDrop}>Add new word to Vocabulary</button>
              <div className={'dropdown'} id={'dropdown'}>
                  <div className={'inputDiv'}>
                      <input className={'input'} type={'text'} placeholder={"New word's key"} id={'inputKey'}></input>
                      <label id={'keyLabel'} className={'label'}></label>
                  </div>
                  <button className={'saveBtn'} onClick={saveWord}>Save</button>
                  <div className={'inputDiv'}>
                      <input className={'input'} type={'text'} placeholder={"New word's value"} id={'inputValue'}></input>
                      <label id={'valueLabel'} className={'label'}></label>
                  </div>
              </div>
          </div>
          <input className={'input'} type={'text'} placeholder={'Introduce the key'} id={'outputKey'} onChange={handleChange}></input>
          <main>
              <p className={'outputBox'}>{ key }</p>
              <hr className={'line'}></hr>
              <p className={'outputBox'}>{ value }</p>
          </main>
      </div>
      );
}

export default App;
