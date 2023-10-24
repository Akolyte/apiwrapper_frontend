import React, { useState } from 'react';
import ChatGPTService from './chatgpt.service';

function TextChanger() {
    const [text, setText] = useState('Default Text');

    const handleChangeText = () => {
        const newText = ChatGPTService();
        setText(newText);
    };

    return (
        <div>
            <p>{text}</p>
            <button onClick={handleChangeText}>Change Text</button>
        </div>
    );
}

export default TextChanger;