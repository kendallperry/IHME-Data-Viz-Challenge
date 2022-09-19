export default function TopCountriesControl({ topNumber, setTopNumber }) {
  return (
    <div className="control-panel">
      <div className="control">
        <p>Set Top Countries</p>
        <input
          type="range"
          min={5}
          max={50}
          onChange={(e) => setTopNumber(e.target.value)}
          value={topNumber}
        />
        <p>{topNumber}</p>
      </div>
    </div>
  );
}
