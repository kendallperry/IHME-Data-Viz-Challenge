
import '../index.css'
import Citation from "./Citation";
import Viz from "./Viz";
import Header from './Header';

export default function App() {

  return (
    <>
    <Header />
    <div className="App">
      <Viz className='viz-data' />
    </div>
    <Citation />
    </>
  );
}
