import React, { useState } from 'react';

let response;

function ChatGptFormComponent() {
    const [inputText, setInputText] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the inputText, like sending it to an API or processing it.
        console.log(inputText);
      };

    return (
      <form onSubmit={handleSubmit}>
        <div class="form-wrapper">
          <textarea id="textInput" value={inputText} onChange={handleInputChange} placeholder="Ask ChatGPT a question!" rows="5" cols="50"></textarea>
          <button type="submit" id="submitButton">Submit</button>
        </div>
        <p>{response}</p>
      </form>
    );
  }

export default ChatGptFormComponent;