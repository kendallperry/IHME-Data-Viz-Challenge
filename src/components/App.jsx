import { useState, useEffect } from "react";

import '../index.css'
import * as api from "../api";
import Citation from "./Citation";
import ControlPanel from "./ControlPanel";
import Viz from "./Viz";

export default function App() {

  const [data, setData] = useState({});
  const updateData = (newData) => setData(newData);

  return (
    <>
    <h3 id='header'>Populations Most Affected by Opioid Use Disorders</h3>
    <div className="App">
      <ControlPanel updateData={updateData} className='controls' />
      <Viz data={data} className='viz-data' />
    </div>
    <Citation />
    </>
  );
}
