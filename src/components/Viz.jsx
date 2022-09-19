import {
  VictoryChart,
  VictoryBar,
  VictoryTheme,
  VictoryAxis,
  VictoryLabel,
} from "victory";
import { useEffect, useState } from "react";
import TopCountriesControl from "./TopCountriesControl";
import ControlPanel from "./ControlPanel";

export default function Viz() {
  const [vizData, setVizData] = useState([]);
  const [topNumber, setTopNumber] = useState(20);

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
    <>
      <div className="controls">
        <ControlPanel updateData={updateData} />
        <TopCountriesControl
          topNumber={topNumber}
          setTopNumber={setTopNumber}
        />
      </div>

      <div className="viz">
        <VictoryChart
          horizontal
          style={{
            tickLabels: { fontSize: 4 },
            ticks: { fill: 1 },
          }}
          domainPadding={8.5}
          title="Mean amount of people per 100,000"
        >
          <VictoryAxis
            style={{
              axis: { strokeWidth: 0 },
              grid: { stroke: "none" },
              tickLabels: {
                fontSize: topNumber > 15 ? topNumber > 35 ? 4 : 4.3 : 6,
                padding: 0.9,
              },
            }}
          />
          <VictoryAxis dependentAxis 
            orientation="top"
            label="Mean amount of people per 100,000"
            style={{ 
              axisLabel: { fontSize: 9, padding: 20 },
              tickLabels: { fontSize: 6, padding: 5 }
            }} />
          <VictoryBar
            theme={VictoryTheme.material}
            data={vizData}
            style={{ data: { fill: "#0095A8" } }}
            events={[{
              target: "data",
              eventHandlers: {
                onClick: (data) => {
                  console.log("Clicked!", data)
                }}
            }]}
          />
        </VictoryChart>
      </div>
    </>
  );
}
