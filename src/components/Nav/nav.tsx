import logo from "../../assets/img/infoLogo.png";
import NavItem, { OpcaoIcon } from "../NavItem/navItem";
import "./stylesNav.css";

function Nav() {
    return (
        <div className="containerNav">
            <div className="clickLogo">
                <img
                    className="imgLogo"
                    src={logo}
                    alt="logotipo"
                    width={100}
                />
            </div>
            <hr />
            <div className="itemMenu">
                <NavItem
                    page="dashboard"
                    text="Dashboard"
                    icon={OpcaoIcon.Dashboard}
                />
                <NavItem
                    page="clientes"
                    text="Clientes"
                    icon={OpcaoIcon.User}
                />
                <NavItem
                    page="agenda"
                    text="Agenda"
                    icon={OpcaoIcon.Calendar}
                />
                <NavItem page="vendas" text="Vendas" icon={OpcaoIcon.Vendas} />
                <NavItem
                    page="servicos"
                    text="Serviços"
                    icon={OpcaoIcon.Serviço}
                />
                <NavItem
                    page="produtos"
                    text="Produtos"
                    icon={OpcaoIcon.Produto}
                />
                <NavItem
                    page="relatorios"
                    text="Relatórios"
                    icon={OpcaoIcon.Relatorio}
                />
                <NavItem
                    page="parametros"
                    text="Parâmetros"
                    icon={OpcaoIcon.Paramentros}
                />
                <NavItem page="logoff" text="LogOff" icon={OpcaoIcon.LogOut} />
            </div>
        </div>
    );
}

export default Nav;
