import { useState, useEffect } from 'react';
// import { IgrFinancialChart } from "@infragistics/igniteui-react-charts";
import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from "igniteui-react-charts";
import { StocksHistory } from './StocksHistory';

IgrFinancialChartModule.register();

export function FinancialChart() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const initData = async () => {
            const stocks = await StocksHistory.getMultipleStocks();
            setData(stocks);
        };
        initData();
    }, []);

    return (
        <div className="container sample">
            <div className="container relative" style={{ height: "calc(100vh - 19.5rem)" }}>
                
                <IgrFinancialChart
                    width="100%"
                    height="100%"
                    chartType="Line"
                    thickness={1.5}
                    dataSource={data}
                    toolTipType="None"
                    finalValueAnnotationsVisible={false}
                    brushes="#4b40ee"
                    zoomSliderType="None"
                    
                    // isToolbarVisible={false}
                    // yAxisLabelLocation={-5}
                />
            </div>
        </div>
    );
}