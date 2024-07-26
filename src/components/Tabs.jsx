/**
 * Tabs component
 * @returns {React.ReactElement} 
 */
import ChartTab from './Chart';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

const data = ['Summary', 'Chart', 'Statistics', 'Analysis', 'Settings'];

export default function Tabs() {
    return (
        <TabGroup defaultIndex={1} className='relative px-0'>
            {/* TabList component, which renders a list of tabs */}
            <TabList className='relative z-50 flex'>
                {/* Loop through the data array and render a Tab component for each item */}
                {
                    data.map((item, index) => <Tab key={index} className={
                        `${index === 0 ? 'ml-4 md:ml-10 lg:ml-20' : ''} 
                        z-50 border-b-4 border-transparent data-[selected]:border-blue 
                        text-text-300 data-[selected]:text-indigo text-lg font-csb mx-2 lg:mx-2 
                        pb-3 px-2.5 outline-none`
                    }>{item}</Tab>)
                }
                {/* Separator component, which renders a horizontal line below the tabs */}
                <div className="Separator absolute z-10 bottom-0 w-full border border-offWhite-100"></div>
            </TabList>
            {/* TabPanels component, which renders a panel for each tab */}
            <TabPanels className='ml-0 md:ml-10 lg:ml-20 px-0 w-full lg:w-[80%] xl:w-[50.2%]'>
                {/* Loop through the data array and render a TabPanel component for each item */}
                {
                    data.map((item, index) => <TabPanel key={index} className='p-0 py-14 '>{<ChartTab />}</TabPanel>)
                }
            </TabPanels>
        </TabGroup>
    )
}