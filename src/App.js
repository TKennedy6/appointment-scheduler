import logo from './logo.svg';
import './App.css';
import HaircutStuff from './HaircutStuff';

const servicesList = [
  {
    id: 0,
    type: 'Adult Haircut',
    price: 40
  },
{
  id: 1,
  type: 'Kids Haircut',
  price: 20
},
{
  id: 2,
  type: 'Beard Trim',
  price: 10
},
{
  id: 3,
  type: 'Mustache Trim',
  price: 5
}
]

function App() {
  return (
    <div>
      Appointment Scheduling App
      <h1>Services Offered</h1>
      { servicesList.map( service => <HaircutStuff service={service}/>) }
    </div>
  );
}

export default App;
