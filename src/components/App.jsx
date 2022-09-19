
import '../index.css'
import Citation from "./Citation";
import Viz from "./Viz";

export default function App() {

  return (
    <>
    <h2 id='header'>Populations Most Affected by Opioid Use Disorders</h2>
    <div className="App">
      <Viz className='viz-data' />
    </div>
    <Citation />
    </>
  );
}
