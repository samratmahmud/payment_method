"use client";
import React, {useState} from "react";
import Card from "../home/Card";
import Header from "../home/Header";

const tabs = ["profile", "password", "Team"];

function TabPage() {
  const [tab, setTab] = useState(0);

  return (
    <div>
      <div className="flex gap-[1px]">
        {tabs.map((item, index) => (
          <div
            key={item}
            role="button"
            className={`uppercase bg-slate-300 hover:bg-slate-400 px-3 py-2 ${
              index === tab ? "bg-slate-400" : ""
            }`}
            onClick={() => setTab(index)}
          >
            {item}
          </div>
        ))}
      </div>
      <div>
        {tab === 0 && <Header />}
        {tab === 1 && <div>Password tab content</div>}
        {tab == 2 && <Card />}
      </div>
    </div>
  );
}

export default TabPage;
