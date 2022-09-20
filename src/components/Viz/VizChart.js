import { VictoryChart, VictoryBar, VictoryTheme, VictoryAxis } from "victory";

export default function VizChart({ topNumber, viewNums, vizData }) {
    return (
        <div className="viz">
        <VictoryChart
          horizontal
          style={{
            tickLabels: { fontSize: 4 },
            ticks: { fill: 1 },
          }}
          domainPadding={8.5}
          title="Mean number of deaths per 100,000 people"
        >
          <VictoryAxis
            style={{
              axis: { strokeWidth: 0 },
              grid: { stroke: "none" },
              tickLabels: {
                fontSize: topNumber > 15 ? (topNumber > 35 ? 4 : 4.3) : 6,
                padding: 0.9,
              },
            }}
          />
          <VictoryAxis
            dependentAxis
            orientation="top"
            label="Mean number of deaths per 100,000 people"
            style={{
              axisLabel: { fontSize: 9, padding: 20 },
              tickLabels: { fontSize: 6, padding: 5 },
            }}
          />
          {viewNums ? (
            <VictoryBar
              theme={VictoryTheme.material}
              data={vizData}
              labels={({ datum }) => `${datum.y.toFixed(2)}`}
              style={{
                data: { fill: "#0095A8" },
                labels: { fontSize: 5, padding: 3 },
              }}
            />
          ) : (
            <VictoryBar
              theme={VictoryTheme.material}
              data={vizData}
              style={{ data: { fill: "#0095A8" } }}
            />
          )}
        </VictoryChart>
      </div>
    )
}