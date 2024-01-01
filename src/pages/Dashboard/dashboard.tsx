import { GraphChart } from "../../components/Graficos/graph";
import Nav from "../../components/Nav/nav";
import Agenda from "../Agenda/agenda";
import Clientes from "../Clientes/clientes";
import Logoff from "../Logoff/logoff";
import Parametros from "../Parametros/parametros";
import Produtos from "../Produtos/produtos";
import Relatorios from "../Relatorios/relatorios";
import Servicos from "../Servicos/servicos";
import Vendas from "../Vendas/vendas";
import "./stylesDashboard.css";

interface iDashboard {
    page: string;
}

function Dashboard(props: iDashboard) {
    return (
        <div className="container">
            {props.page === "dashboard" ? (
                <>
                    <Nav />
                    <GraphChart />
                </>
            ) : (
                ""
            )}
            {props.page === "agenda" ? (
                <>
                    <Nav />
                    <Agenda />
                </>
            ) : (
                ""
            )}
            {props.page === "clientes" ? (
                <>
                    <Nav />
                    <Clientes />
                </>
            ) : (
                ""
            )}
            {props.page === "vendas" ? (
                <>
                    <Nav />
                    <Vendas />
                </>
            ) : (
                ""
            )}
            {props.page === "servicos" ? (
                <>
                    <Nav />
                    <Servicos />
                </>
            ) : (
                ""
            )}
            {props.page === "produtos" ? (
                <>
                    <Nav />
                    <Produtos />
                </>
            ) : (
                ""
            )}
            {props.page === "relatorios" ? (
                <>
                    <Nav />
                    <Relatorios />
                </>
            ) : (
                ""
            )}
            {props.page === "parametros" ? (
                <>
                    <Nav />
                    <Parametros />
                </>
            ) : (
                ""
            )}
            {props.page === "logoff" ? (
                <>
                    <Nav />
                    <Logoff />
                </>
            ) : (
                ""
            )}
        </div>
    );
}

export default Dashboard;
