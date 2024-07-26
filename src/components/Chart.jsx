import ChartUI from './ChartUI';
import compareSVG from '../assets/compare.svg';
import fullScreenSVG from '../assets/fullscreen.svg';

// Array of time periods for the time selector
const time = ['1d', '3d', '1w', '1m', '6m', '1y', 'max'];

// ChartTab component
export default function ChartTab() {
    return (
        // Main container for the chart tab
        <div className='flex flex-col w-full'>
            {/* Actions container for the fullscreen and compare buttons and the time selector */}
            <div className="Actions flex justify-between flex-col md:flex-row gap-3 md:gap-0 mb-8">
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
                <ChartUI />
            </div>
        </div>
    )
}