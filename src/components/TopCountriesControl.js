
export default function TopCountriesControl({ topNumber, setTopNumber }) {
  return (
    <div className='control-panel'>
      <p>Set Top Countries</p>
      <div className="control">
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
