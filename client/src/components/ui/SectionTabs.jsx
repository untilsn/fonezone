import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const SectionTabs = ({ tabs, title }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.value || "");

  return (
    <div className="w-full mt-5">
      {title && <h2 className="text-xl font-bold text-gray-900 mb-4">{title}</h2>}
      <Tabs className="mb-16" value={activeTab}>
        <TabsHeader
          className="rounded-none bg-transparent p-2 max-w-[600px] w-full mx-auto mb-10"
          indicatorProps={{
            className:
              "bg-transparent border-b border-gray-800 opacity-75 shadow-none rounded-none",
          }}
        >
          {tabs.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={`text-gray-900  uppercase transition-colors duration-500 text-sm
                ${activeTab === value ? "" : "text-gray-500 hover:text-yellow"}`}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {tabs.map(({ value, component }) => (
            <TabPanel key={value} value={value}>
              {React.createElement(component)}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default SectionTabs;

