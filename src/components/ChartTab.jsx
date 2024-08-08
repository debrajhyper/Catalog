// import ChartUI from './ChartUI';
import compareSVG from '../assets/compare.svg';
import fullScreenSVG from '../assets/fullscreen.svg';
import { useState, useEffect } from 'react';
import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from "igniteui-react-charts";
import { StocksHistory } from './StocksHistory';

// Array of time periods for the time selector
const time = ['1d', '3d', '1w', '1m', '6m', '1y', 'max'];

IgrFinancialChartModule.register();


// ChartTab component
export function ChartTab() {
    const [data, setData] = useState([]);
    const [zoomRange, setZoomRange] = useState({ start: 0, end: 0 });

    useEffect(() => {
        const initData = async () => {
            const stocks = await StocksHistory.getMultipleStocks();
            setData(stocks);
            setZoomRange({ start: 0, end: stocks.length });
        };
        initData();
    }, []);

    return (
        // Main container for the chart tab
        <div className='flex flex-col w-full'>
            {/* Actions container for the fullscreen and compare buttons and the time selector */}
            <div className="Actions flex justify-between flex-col md:flex-row gap-3 md:gap-0 mb-2">
                {/* Container for the fullscreen and compare buttons */}
                <div className='inline-flex gap-9'>
                    {/* Fullscreen button */}
                    <span className='inline-flex justify-between items-center gap-3 cursor-pointer'>
                        <img src={fullScreenSVG} alt="Fullscreen" width={20} height={20} />
                        <div className="Fullscreen text-text-300 text-lg font-normal">Fullscreen</div>
                    </span>
                    {/* Compare button */}
                    <span className='inline-flex justify-between items-center gap-3 cursor-pointer'>
                        <img src={compareSVG} alt="Compare" width={20} height={20} />
                        <div className="Compare text-text-300 text-lg font-normal">Compare</div>
                    </span>
                </div>
                {/* Time selector */}
                <div className="Time flex justify-evenly items-center gap-1.5">
                    {/* Loop through the time array and render a span element for each item */}
                    {
                        time.map((item, index) => <span key={index} className={`${index === 2 ? 'bg-blue text-white' : ''} rounded-[5px] p-[0.157rem] px-[0.886rem] text-text-300 text-lg font-normal align-middle cursor-pointer`}>{item}</span>)
                    }
                </div>
            </div>
            {/* Container for the chart UI */}
            <div className="mixed-chart h-full w-full">
                {/* Chart UI component */}
                {/* <FinancialChart /> */}
                <div className="container sample">
                    <div className="container relative" style={{ height: "calc(100vh - 22rem)" }}>

                        <IgrFinancialChart
                            width="100%"
                            height="100%"
                            chartType="Line"
                            thickness={1.5}
                            // dataSource={data}
                            dataSource={data.slice(zoomRange.start, zoomRange.end)}
                            toolTipType="None"
                            finalValueAnnotationsVisible={false}
                            brushes="#4b40ee"
                            zoomSliderType="None"

                            isToolbarVisible={false}
                        // yAxisLabelLocation={-5}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}