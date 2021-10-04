import React, { useState } from 'react';
import { NetworkData } from '../../components/Network/NetworkData';
import { NewNodeModal } from '../../components/NewNodeModal/NewNodeModal';
import './App.scss';

export const App = () => {
  const [ modalOpen, setModalOpen ] = useState(false)
  return (
    <div>
      <NetworkData />
      <button onClick={() => setModalOpen(true)}>Add Node</button>
      {modalOpen &&
        <NewNodeModal />
      }
    </div>
    
  );}
