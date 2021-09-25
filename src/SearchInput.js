import React, {useState} from 'react'
import './SearchInput.css';


const SearchInput = ({onSearch}) => {
    const [inputText, setInputText] = useState('');

    const handleChange = (event) => {
        setInputText(event.target.value);
    }

    return (
        <div className="container">
            <input className="input-text" placeholder="What do you want to watch?" onChange={handleChange} value={inputText}></input>
            <button className="button" type="button" onClick={() => onSearch(inputText)}>Search</button>
        </div>
    )
}


export default SearchInput;