import { useEffect, useState } from "react";
import VizDashboard from "./VizDashboard";
import VizChart from "./VizChart";
import "./Viz.css"

export default function VizContainer() {
  const [vizData, setVizData] = useState([]);
  const [topNumber, setTopNumber] = useState(20);
  const [viewNums, setViewNums] = useState(false);

  const [data, setData] = useState({});
  const updateData = (newData) => setData(newData);

  useEffect(() => {
    if (data.length) {
      let newVizData = [];

      for (let i = topNumber - 1; i >= 0; i--) {
        let country = `${data[i].location_name} ${i + 1}`;
        if (country.length > 18 && topNumber <= 15) {
          let end = country.slice(-2);
          country = `${country.slice(0, 16)}..${end}`;
        }
        let mean = data[i].mean;
        let displayObj = { x: country, y: mean };
        newVizData.push(displayObj);
      }
      setVizData(newVizData);
    }
  }, [data, topNumber]);

  return (
    <div id="Viz-container">
      <VizDashboard
        updateData={updateData}
        topNumber={topNumber}
        setTopNumber={setTopNumber}
        viewNums={viewNums}
        setViewNums={setViewNums}
      />
      <VizChart topNumber={topNumber} viewNums={viewNums} vizData={vizData} />
    </div>
  );
}
