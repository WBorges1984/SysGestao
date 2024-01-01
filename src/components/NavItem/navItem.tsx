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
                        <BiSolidDashboard fontSize={30} />
                    ) : (
                        ""
                    )}
                    {props.icon === "BiMoney" ? <BiMoney fontSize={30} /> : ""}
                    {props.icon === "BiUser" ? <BiUser fontSize={30} /> : ""}
                    {props.icon === "BiPaperclip" ? (
                        <BiPaperclip fontSize={30} />
                    ) : (
                        ""
                    )}
                    {props.icon === "BiCalendar" ? (
                        <BiCalendar fontSize={30} />
                    ) : (
                        ""
                    )}
                    {props.icon === "BiLogOut" ? (
                        <BiLogOut fontSize={30} />
                    ) : (
                        ""
                    )}
                    {props.icon === "BiSupport" ? (
                        <BiSupport fontSize={30} />
                    ) : (
                        ""
                    )}
                    {props.icon === "BiCog" ? <BiCog fontSize={30} /> : ""}
                    {props.icon === "BiFile" ? <BiFile fontSize={30} /> : ""}
                    {props.icon === "BiCube" ? <BiCube fontSize={30} /> : ""}
                    {props.icon === "BiGroup" ? <BiGroup fontSize={30} /> : ""}
                    {props.icon === "BiStore" ? <BiStore fontSize={30} /> : ""}
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
