"use client";
import CardProps, {randomCard} from "@/components/template/CardProps";
import React, {useState} from "react";

const cardDetails: randomCard[] = [
  {
    pic: "/picture/Payment method icon.svg",
    name: "Visa ending in 1234",
    date: "Expiry 06/2024",
    defaul: "Set as default",
    edit: "Edit",
  },
  {
    pic: "/picture/Mastercard.svg",
    name: "Mastercard ending in 1234",
    date: "Expiry 06/2024",
    defaul: "Set as default",
    edit: "Edit",
  },
];

function Card() {
  const [tab, setTab] = useState(0);
  return (
    <section className="lg:px-8">
      <div className="flex lg:flex-row flex-col lg:gap-8 gap-5 mb-8">
        <div>
          <div className="text-sm font-medium text-gray-700">Card details</div>
          <div className="text-sm text-neutral-500">
            Select default payment method.
          </div>
        </div>
        <div className="flex flex-col gap-3 flex-grow">
          {cardDetails.map((item, index) => (
            <div key={index}>
              <CardProps
                handelclick={() => setTab(index)}
                isActive={tab !== index}
                {...item}
              />
            </div>
          ))}
          <div className="flex gap-2">
            <img role="button" src="/picture/plus.svg" alt="" />
            <div className="text-sm font-medium text-neutral-500">
              Add new payment method
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
