import React, { useState, useEffect } from 'react';
import './Network.scss';
import { db } from '../../config'

export const Network = () => {
  const [ data, setData ] = useState({});
  useEffect(() => {
    db.ref('/').on('value', (querySnapShot:any) => {
      let info = querySnapShot.val() ? querySnapShot.val() : {};
      let allInfo = {...info};
      setData(allInfo)
    });
  }, [])
  return (
    <div>
      <p>Testing output</p>
      {data === {} ? "no data to show here!" : console.log(data)}
    </div>
  );}
