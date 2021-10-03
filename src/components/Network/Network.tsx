import { useState, useEffect } from 'react';
import './Network.scss';
import { ref, onValue } from "firebase/database";
import { database } from '../../config';

export const Network = () => {
  const [ data, setData ] = useState({});
  useEffect(() => {
    const network = ref(database, '/')
    onValue(network, (snapshot) => {
      const data = snapshot.val();
      console.log(data)
      setData(data);
    });
  }, [])
  return (
    <div>
      <p>Testing output</p>
      {Object.keys(data).length === 0 ? 
        "no data to show here!" 
        : 
        console.log(data)}
    </div>
  );}
