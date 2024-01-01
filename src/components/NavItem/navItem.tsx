import {
    BiCalendar,
    BiCog,
    BiCube,
    BiFile,
    BiGroup,
    BiLogOut,
    BiMoney,
    BiPaperclip,
    BiSolidDashboard,
    BiStore,
    BiSupport,
    BiUser,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import "./stylesNavItem.css";

export enum OpcaoIcon {
    Dashboard = "BiSolidDashboard",
    Money = "BiMoney",
    User = "BiUser",
    Calendar = "BiCalendar",
    Paperclip = "BiPaperclip",
    LogOut = "BiLogOut",
    Support = "BiSupport",
    Paramentros = "BiCog",
    Relatorio = "BiFile",
    Produto = "BiCube",
    Serviço = "BiGroup",
    Vendas = "BiStore",
}

interface IconInterface {
    icon: OpcaoIcon;
    text: string;
    page: string;
}

function NavItem(props: IconInterface) {
    return (
        <>
            <div className="container">
                <span className="Icon">
                    {props.icon === "BiSolidDashboard" ? (
                        <BiSolidDashboard />
                    ) : (
                        ""
                    )}
                    {props.icon === "BiMoney" ? <BiMoney /> : ""}
                    {props.icon === "BiUser" ? <BiUser /> : ""}
                    {props.icon === "BiPaperclip" ? <BiPaperclip /> : ""}
                    {props.icon === "BiCalendar" ? <BiCalendar /> : ""}
                    {props.icon === "BiLogOut" ? <BiLogOut /> : ""}
                    {props.icon === "BiSupport" ? <BiSupport /> : ""}
                    {props.icon === "BiCog" ? <BiCog /> : ""}
                    {props.icon === "BiFile" ? <BiFile /> : ""}
                    {props.icon === "BiCube" ? <BiCube /> : ""}
                    {props.icon === "BiGroup" ? <BiGroup /> : ""}
                    {props.icon === "BiStore" ? <BiStore /> : ""}
                </span>
                <Link className="link" to={`/${props.page}`}>
                    {props.text}
                </Link>
                {/* <button>{props.text}</button> */}
            </div>
        </>
    );
}

export default NavItem;
