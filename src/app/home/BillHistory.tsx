import React from "react";

function BillHistory() {
  return (
    <section className="lg:px-8">
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
          <div className="text-sm font-medium text-gray-700">Download all</div>
        </div>
      </div>
      <div className="w-full overflow-auto">
        <div style={{minWidth: 870}}>
          <div className="border border-gray-300 rounded-xl">
            <table className="w-full ">
              <thead className="text-neutral-500 text-xs font-medium">
                <tr className="border-b border-gray-300">
                  <th className="pl-6 text-left py-3 w-14">
                    <input
                      role="button"
                      className="w-5 h-5 translate-y-0.5"
                      type="checkbox"
                    />
                  </th>
                  <th className="text-left">
                    <div role="button" className="flex items-center gap-1">
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
                    <td className="text-sm font-medium text-gray-900 lg:pr-12">
                      Users on plan
                    </td>
                    <td className="text-sm text-neutral-500 lg:pr-2">
                      USD $10.00
                    </td>
                    <td className="text-sm text-neutral-500 lg:pr-2">
                      Dec 1, 2022
                    </td>
                    <td className="inline-block">
                      <div
                        aria-label="status"
                        className="flex items-center gap-1 py-0.5 px-2 bg-emerald-300 lg:pr-2"
                      >
                        <img src="/picture/check.svg" alt="" />
                        <span className="text-xs font-medium text-emerald-700">
                          Paid
                        </span>
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
    </section>
  );
}

export default BillHistory;
