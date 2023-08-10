import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import HeaderNavbar from './components/HeaderNavbar';
import PortfolioValue from './components/PortfolioValue';
import Invest from './components/Invest';
import DataTable from './components/DataTable';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Container fluid>
        <HeaderNavbar />
        <PortfolioValue />
        <Invest />
        <DataTable />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
