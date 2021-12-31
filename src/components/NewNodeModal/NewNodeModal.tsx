import React, { useState } from 'react';
import './NewNodeModal.scss';
// import { ref, set } from "firebase/database";
// import { database } from '../../config';

export const NewNodeModal = () => {
  const [ prompt, setPrompt ] = useState('')
  // const addNode = () => {
  //   set(ref(database, '/'), {
  //     prompt: prompt,
  //   });
  // }
  return (
    <div>
      <input 
        type="text" 
        value={prompt} 
        onChange={(event) => setPrompt(event.target.value)} 
        placeholder='Enter some text' 
      />
      {/* <button onClick={addNode}>Add Node</button> */}
    </div>
    
  );}
