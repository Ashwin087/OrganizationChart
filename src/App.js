import './App.css';
import Data from './data.json'  
import Header from './Components/Header'
import OrgTree from './Components/OrgTree'

function App() {

  // console.log(Data[0].Organization.Team1.NorthAmerica.Country.Canada.Cities.Toronto.Rep);
  
  return (
    <div className="App">
      <Header />
      <OrgTree />
    </div>
  );
}

export default App;
