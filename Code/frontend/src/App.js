import Header from './components/Header';
import Footer from './components/Footer';
import AllServices from './components/AllServices';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route to='/' element={<AllServices />}>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
