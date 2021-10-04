import { useState, useEffect, useRef } from 'react';
import './NetworkData.scss';
import { ref, onValue } from "firebase/database";
import { database } from '../../config';
import nodes from '../../data/nodes.json'
import edges from '../../data/edges.json'
import { Network } from "vis-network";

export const NetworkData: React.FC = () => {

  const [ fireBaseData, setFireBaseData ] = useState({});
  const visJsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const networkData = ref(database, '/')
    onValue(networkData, (snapshot) => {
      const data = snapshot.val();
      console.log(data)
      setFireBaseData(data);
    });

  const network =
    visJsRef.current &&
    new Network(
      visJsRef.current,
      { nodes, edges },
      {
        autoResize: true,
        edges: {
          color: "#411811"
        }
      }
    );
  network?.on("selectNode", (event: { nodes: string[] }) => {
    if (event.nodes?.length === 1) {
      window.location.href = event.nodes[0];
    }
  });
  }, [visJsRef])

  return (
    <div className="container">
      <p>Testing output</p>
      {Object.keys(fireBaseData).length === 0 ? 
        "no data to show here!" 
        : 
        console.log(fireBaseData)}
      
      <div ref={visJsRef} className="network" />
    </div>
  );}
