import { Chart } from "react-google-charts";
import "./stylesGraph.css";

enum TypeChart {
    "PieChart",
    "Area Chart",
    "Bar",
    "Bar Chart",
    "Bubble Chart",
    "Calendar",
    "andlestick Chart",
    "olumn Chart",
    "Combo Chart",
    "Gantt",
    "auge",
    "eo Chart",
    "Histogram",
    "ine",
    "ine Chart",
    "rg Chart",
    "Pie Chart",
    "Sankey",
    "catter",
    "Scatter Chart",
    "tepped Area Chart",
    "Table",
    "Timeline",
    "Tree Map",
    "Word Tree",
    "nimations",
    "Chart Editor",
    "Controls",
    "Interactions",
    "Layout",
    "Spreadsheet",
    "Toolbar",
}

export function GraphChart() {
    return (
        <div>
            <div className="conteudo">
                <div className="grafico">
                    <Chart
                        chartType="PieChart"
                        data={[
                            ["Sexo", "Percentual"],
                            ["Masculino", 5.5],
                            ["Feminino", 12],
                        ]}
                        width="400px"
                        height="400px"
                        legendToggle
                    />
                </div>
                <div className="grafico">
                    <Chart
                        chartType="PieChart"
                        data={[
                            ["Sexo", "Percentual"],
                            ["Masculino", 5.5],
                            ["Feminino", 12],
                        ]}
                        width="400px"
                        height="400px"
                        legendToggle
                    />
                </div>
                <div className="grafico">
                    <Chart
                        chartType="PieChart"
                        data={[
                            ["Sexo", "Percentual"],
                            ["Masculino", 5.5],
                            ["Feminino", 12],
                        ]}
                        width="400px"
                        height="400px"
                        legendToggle
                    />
                </div>
            </div>
        </div>
    );
}
