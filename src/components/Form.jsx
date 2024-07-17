import { useState } from 'react';
import { addPost } from '../store';

// Компонент формы
export const Form = () => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Обработка данных формы
        const newData = { title, text, id: Math.random() };
        addPost(newData);
    };

    return (
        <form className="form">
            <input value={title} onChange={(event) => setTitle(event.target.value)} type="text" />
            <textarea value={text} onChange={(event) => setText(event.target.value)}></textarea>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    );
};
