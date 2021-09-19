import logo from "./logo.svg";
import "./App.css";

import Data from "./Data";


function App() {

  const data = [ 
    {
      id: 1,
      label: "India",
    },
    {
      id: 2,
      label: "Australia",
    },
    {
      id: 3,
      label: "New Zeland",
    },
    {
      id: 4,
      label: "USA",
    },
  ];

  return (
    <div className="App">
      <Data data={data} />
    </div>
  );
}

export default App;
