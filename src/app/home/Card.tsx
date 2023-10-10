"use client";
import CardProps from "@/components/template/CardProps";
import React, {useState} from "react";

const cardDetails = [
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
    <div>
      <div className="lg:px-8">
        <div className="flex lg:flex-row flex-col lg:gap-8 gap-5 mb-8">
          <div>
            <div className="text-sm font-medium text-gray-700">
              Card details
            </div>
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
                  pic={item.pic}
                  name={item.name}
                  date={item.date}
                  defaul={item.defaul}
                  edit={item.edit}
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
        <div className="flex lg:flex-row flex-col gap-5 justify-between lg:items-center mb-6">
          <div className="text-base font-medium text-gray-900">
            Billing history
          </div>
          <div
            role="button"
            className="flex items-center gap-2 py-2.5 px-4 border border-gray-300 rounded-lg shadow-md"
          >
            <div>
              <img src="/picture/download-cloud.svg" alt="" />
            </div>
            <div className="text-sm font-medium text-gray-700">
              Download all
            </div>
          </div>
        </div>
        <div className="w-full overflow-auto">
          <div style={{minWidth: 880}}>
            <div className="border border-gray-300 rounded-xl">
              <table className="w-full ">
                <thead className="text-neutral-500 text-xs font-medium">
                  <tr className="border-b border-neutral-500">
                    <th className="pl-6 text-left py-3 w-14">
                      <input
                        role="button"
                        className="w-5 h-5 translate-y-0.5"
                        type="checkbox"
                      />
                    </th>
                    <th className="text-left">
                      <div className="flex items-center gap-1">
                        <div className="text-xs text-neutral-500 font-medium">
                          Invoice
                        </div>
                        <div>
                          <img src="/picture/arrow-down.svg" alt="" />
                        </div>
                      </div>
                    </th>

                    <th className="text-left">Amount</th>
                    <th className="text-left">Date</th>
                    <th className="text-left">Status</th>
                    <th className="text-left">Users on plan</th>
                    <th className="text-left"></th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(6)].map((_, index) => (
                    <tr className="border-b border-gray-300" key={index}>
                      <td className="py-4 pl-6">
                        <input
                          role="button"
                          className="w-5 h-5 translate-y-0.5"
                          type="checkbox"
                        />
                      </td>
                      <td className="text-sm font-medium text-gray-900">
                        Users on plan
                      </td>
                      <td className="text-sm text-neutral-500">USD $10.00</td>
                      <td className="text-sm text-neutral-500">Dec 1, 2022</td>
                      <td>
                        <div aria-label="status" className="flex items-center">
                          <img src="/picture/check.svg" alt="" />
                          <span>Paid</span>
                        </div>
                      </td>
                      <td>
                        <img src="/picture/Avatar group.png" alt="" />
                      </td>
                      <td>
                        <img src="/picture/Button.svg" alt="" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
