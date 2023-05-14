import './App.css';
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';
import Comp3 from './components/Comp3';

function App() {
  return (
    <>
      <Comp1 send="ส่งแบบ props" />
      <hr />
      <Comp2 />
      <hr />
      <Comp3 />
    </>
    // <div className='container'>
    //   <h1>Hello</h1>
    //   <button>+</button>
    //   <button>-</button>

    //   <Comp1 />
    //   <Comp2 />
    // </div>
  );
}

export default App;
