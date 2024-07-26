/**
 * Price component
 * @returns {React.ReactElement} 
 */
export default function Price() {
    return (
        <div className="Price text-start ml-4 md:ml-10 lg:ml-24 mb-9">
            {/* Current price with currency type */}
            <div className="flex leading-[4rem]">
                <h1 className="text-indigo text-[70px] font-normal font-csm">63,179.71</h1>
                <span className="Usd text-text-100 text-2xl ml-2 font-normal font-csm">USD</span>
            </div>
            {/* Price difference with percentage */}
            <p className="text-green text-lg mt-5 font-light">+ 2,161.42 (3.54%)</p>
        </div>
    )
}
