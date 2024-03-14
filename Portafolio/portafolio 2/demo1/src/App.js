//import Cabecera from './components/Cabecera';
import './App.css';
import Welcome from './components/Welcome'
import Text from './components/Text';
import Image from './components/Image';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
     <Welcome name="yisus" />
     <Welcome msg="Hola como estas??"/>
     <Text p="lorem ipsun lo que sea"/>
     <Image />
     <Table/>
     <h1>Hola Mundo 2</h1>
    </div>
  );
}

export default App;
