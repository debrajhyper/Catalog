import lineSVG from '../assets/line.svg'; // Import line SVG image
import volumeSVG from '../assets/volume.svg'; // Import volume SVG image
import lineFillSVG from '../assets/lineFill.svg'; // Import line fill SVG image

export default function ChartUI() {
    return (
        // Main container for the chart UI
        <div className="Chart relative">
            <div className="Grid relative z-0">
                {/* Define the lines for the chart */}
                <div className="Line1 w-[750px] left-0 top-[340px] absolute border border-offWhite-300"></div>
                <div className="Line2 w-[341px] left-0 top-0 absolute origin-top-left rotate-90 border border-offWhite-300"></div>
                <div className="Line3 w-[341px] left-[125px] top-0 absolute origin-top-left rotate-90 border border-offWhite-300"></div>
                <div className="Line4 w-[341px] left-[250px] top-0 absolute origin-top-left rotate-90 border border-offWhite-300"></div>
                <div className="Line5 w-[341px] left-[375px] top-0 absolute origin-top-left rotate-90 border border-offWhite-300"></div>
                <div className="Line6 w-[341px] left-[500px] top-0 absolute origin-top-left rotate-90 border border-offWhite-300"></div>
                <div className="Line7 w-[341px] left-[625px] top-0 absolute origin-top-left rotate-90 border border-offWhite-300"></div>
                <div className="Line8 w-[341px] left-[750px] top-0 absolute origin-top-left rotate-90 border border-offWhite-300"></div>
            </div>
            {/* Display the volume SVG image */}
            <img src={volumeSVG} className="Volume z-10 absolute top-[305px] left-1" />
            {/* Display the line fill SVG image */}
            <img src={lineFillSVG} className="line-bg z-10 absolute" />
            {/* Display the line SVG image */}
            <img src={lineSVG} className="line z-10 absolute" />
            {/* Display the horizontal line for the chart */}
            <div className="Horizontal z-20 w-[750px] left-[750px] top-[61px] absolute origin-top-left -rotate-180 border border-dashed border-text-200"></div>
            {/* Display the vertical line for the chart */}
            <div className="Vertical z-20 w-[341px] left-[330px] top-0 absolute origin-top-left rotate-90 border border-dashed border-text-200"></div>
            {/* Display the labels for the chart */}
            <div className="Label py-[0.156rem] px-[0.903rem] z-40 left-[730px] top-[134px] absolute bg-blue rounded-[5px]">
                <div className=" text-white text-lg font-normal">63,179.71</div>
            </div>
            <div className="Label py-[0.156rem] px-[0.903rem] z-40 left-[730px] top-[45px] absolute bg-indigo rounded-[5px]">
                <div className="text-white text-lg font-normal">64,850.35</div>
            </div>
        </div>
    )
}