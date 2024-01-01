import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard/dashboard";
import Home from "./pages/Home/home";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="" element={<Home />} />
                <Route
                    path="/dashboard"
                    element={<Dashboard page="dashboard" />}
                />
                <Route path="/agenda" element={<Dashboard page="agenda" />} />
                <Route
                    path="/clientes"
                    element={<Dashboard page="clientes" />}
                />
                <Route path="/vendas" element={<Dashboard page="vendas" />} />
                <Route
                    path="/servicos"
                    element={<Dashboard page="servicos" />}
                />
                <Route
                    path="/produtos"
                    element={<Dashboard page="produtos" />}
                />
                <Route
                    path="/relatorios"
                    element={<Dashboard page="relatorios" />}
                />
                <Route
                    path="/parametros"
                    element={<Dashboard page="parametros" />}
                />
                <Route path="/logoff" element={<Dashboard page="logoff" />} />
            </Routes>
        </Router>
    );
}

export default App;
