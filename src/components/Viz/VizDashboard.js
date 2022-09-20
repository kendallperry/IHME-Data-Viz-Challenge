import ControlPanel from "../ControlPanel";
import TopCountriesControl from "../TopCountriesControl";

export default function VizDashboard({
  updateData,
  topNumber,
  setTopNumber,
  viewNums,
  setViewNums,
}) {
  return (
    <div className="display-bar">
      <div className="dashboard">
        <ControlPanel updateData={updateData} />
        <TopCountriesControl
          topNumber={topNumber}
          setTopNumber={setTopNumber}
        />
      </div>
      <button onClick={() => setViewNums(!viewNums)}>
        {viewNums ? "Remove Amounts" : "Display Mean Amounts"}
      </button>
    </div>
  );
}
