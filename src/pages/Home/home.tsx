import Dashboard from "../Dashboard/dashboard";
import "./stylesHome.css";

export default function Home() {
    return (
        <div className="containerHome">
            <Dashboard page="dashboard" />
        </div>
    );
}
