import React, { useState } from 'react';
import { Network } from '../../components/Network/Network';
import { NewNodeModal } from '../../components/NewNodeModal/NewNodeModal';
import './App.scss';

export const App = () => {
  const [ modalOpen, setModalOpen ] = useState(false)
  return (
    <div>
      <Network />
      <button onClick={() => setModalOpen(true)}>Add Node</button>
      {modalOpen &&
        <NewNodeModal />
      }
    </div>
    
  );}
