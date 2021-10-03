import React, { useState } from 'react';
import './NewNodeModal.scss';
import { db } from '../../config'

export const NewNodeModal = () => {
  const [ prompt, setPrompt ] = useState('')
  const addNode = () => {
    db.ref('/').push({ 
      prompt: prompt,
    });
  }
  return (
    <div>
      <input 
        type="text" 
        value={prompt} 
        onChange={(event) => setPrompt(event.target.value)} 
        placeholder='Enter some text' 
      />
      <button onClick={addNode}>Add Node</button>
    </div>
    
  );}
