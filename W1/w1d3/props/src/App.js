import './App.css';
import MenuItems from './components/MenuItems';

function App() {
  return (
    <div className="App">
              <h1>My First React APP</h1>

      <MenuItems dishName={"Calamari"} price={15.25} likes={10}>
        Test your food heat level
      </MenuItems>


      <MenuItems dishName={"Pizza"} price={20.50} likes={8}/>
      <MenuItems dishName={"Sushi"} price={19.10} likes={9}/>
      <MenuItems dishName={"PrimeRib"} price={30.99} likes={10}/>
    </div>
  );
}

export default App;
