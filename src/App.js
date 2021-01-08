import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';

function App() {
  return (
    <>
      <Navbar dark color="danger">
        <div className="container">
          <NavbarBrand href="/">Dev Restaurant</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </>
  );
}

export default App;
