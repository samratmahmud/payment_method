"use client";
import Link from "next/link";
import React, {useState} from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

const pages = [
  {
    name: "",
    items: [
      {
        pic: "/picture/home.svg",
        name: "Home",
        url: "/",
      },
      {
        pic: "/picture/bar-chart-2.svg",
        name: "Dashboard",
        url: "/",
        badge: 10,
      },
      {
        pic: "/picture/3-layers.svg",
        name: "Projects",
        url: "/",
      },
      {
        pic: "/picture/check-square.svg",
        name: "Tasks",
        url: "/",
      },
      {
        pic: "/picture/flag.svg",
        name: "Reporting",
        url: "/",
      },
      {
        pic: "/picture/users.svg",
        name: "Users",
        url: "/",
      },
    ],
  },
  {
    name: "",
    items: [
      {
        pic: "/picture/life-buoy.svg",
        name: "Support",
        url: "/",
      },
      {
        pic: "/picture/settings.svg",
        name: "Settings",
        url: "/",
      },
    ],
  },
];

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const toggle = () => setOpen((prev) => !prev);
  let [tab, setTab] = useState(0);

  return (
    <nav>
      <div className="hidden lg:block">
        <SimpleBar style={{height: "100vh", width: 300}}>
          <div className="flex flex-col gap-6 justify-between my-8 px-5">
            <div className="flex flex-col gap-6 px-1">
              <div className="flex items-center gap-2">
                <div>
                  <img src="/picture/Logomark.svg" alt="" />
                </div>
                <div>
                  <img src="/picture/Logotype.svg" alt="" />
                </div>
              </div>
              <div className="flex items-center gap-2 py-2.5 px-3.5 border border-gray-500 rounded-lg shadow-md">
                <img role="button" src="/picture/search.svg" alt="" />
                <input
                  className="focus:outline-none"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col gap-1">
                {pages.map((group) => (
                  <div className="mb-6 last:mb-0">
                    {group.items.map((item, index) => (
                      <div key={index}>
                        <Link
                          href={item.url}
                          onClick={() => setTab(index)}
                          className={`flex gap-3 items-center py-2 px-3 ${
                            index === tab ? "bg-gray-200 rounded-md" : ""
                          }`}
                        >
                          <div>
                            <img src={item.pic} alt="" />
                          </div>
                          <div className="text-md font-medium text-gray-700 flex-grow">
                            {item.name}
                          </div>
                          {item.badge && (
                            <span className="text-sm font-medium text-gray-700 bg-neutral-300 rounded-2xl px-2.5 py-0.5">
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4 py-5 px-4">
                <div>
                  <div className="text-sm font-medium text-gray-900 mb-1">
                    New features available!
                  </div>
                  <div className="max-w-[215px] text-sm text-neutral-500">
                    Check out the new dashboard view. Pages now load faster.{" "}
                  </div>
                </div>
                <div className="">
                  <img src="/picture/Image.png" alt="" />
                </div>
                <div className="flex gap-3">
                  <div className="text-sm font-medium text-neutral-500">
                    Dismiss
                  </div>
                  <div
                    role="button"
                    className="text-sm font-medium text-indigo-700"
                  >
                    What’s new?
                  </div>
                </div>
              </div>
              <hr className="h-[1px] bg-gray-300" />
              <div className="flex gap-3 justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <img src="/picture/Avatar.png" alt="" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      Olivia Rhye
                    </div>
                    <Link href={""} className="text-sm text-neutral-500">
                      olivia@untitledui.com
                    </Link>
                  </div>
                </div>
                <div role="button" className="p-2 -mt-2">
                  <img src="/picture/_Button base.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </SimpleBar>
      </div>
      <div className="lg:hidden">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div>
              <img src="/picture/Logomark.svg" alt="" />
            </div>
            <div>
              <img src="/picture/Logotype.svg" alt="" />
            </div>
          </div>
          <div role="button" onClick={toggle}>
            <img src="/picture/_Application nav menu button.svg" alt="" />
          </div>
        </div>
        <div>
          <Drawer open={open} onClose={toggle} direction="left">
            <SimpleBar style={{height: "100vh", width: "100%"}}>
              <div className="flex flex-col gap-6 justify-between py-5 px-2">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-2">
                    <div>
                      <img src="/picture/Logomark.svg" alt="" />
                    </div>
                    <div>
                      <img src="/picture/Logotype.svg" alt="" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 py-2.5 px-3.5 border border-gray-500 rounded-lg shadow-md">
                    <img role="button" src="/picture/search.svg" alt="" />
                    <input
                      className="focus:outline-none"
                      type="text"
                      placeholder=""
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    {pages.map((group) => (
                      <div className="mb-6 last:mb-0">
                        {group.items.map((item, index) => (
                          <div key={index}>
                            <Link
                              href={item.url}
                              onClick={() => setTab(index)}
                              className={`flex gap-3 items-center py-2 px-3 ${
                                index === tab ? "bg-gray-200 rounded-md" : ""
                              }`}
                            >
                              <div>
                                <img src={item.pic} alt="" />
                              </div>
                              <div className="text-md font-medium text-gray-700">
                                {item.name}
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-4 py-5 px-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900 mb-1">
                        New features available!
                      </div>
                      <div className="max-w-[215px] text-sm text-neutral-500">
                        Check out the new dashboard view. Pages now load faster.{" "}
                      </div>
                    </div>
                    <div className="">
                      <img src="/picture/Image.png" alt="" />
                    </div>
                    <div className="flex gap-3">
                      <div className="text-sm font-medium text-neutral-500">
                        Dismiss
                      </div>
                      <div
                        role="button"
                        className="text-sm font-medium text-indigo-700"
                      >
                        What’s new?
                      </div>
                    </div>
                  </div>
                  <hr className="h-[1px] bg-gray-300" />
                  <div className="flex gap-3 justify-between">
                    <div className="flex items-center gap-3">
                      <div>
                        <img src="/picture/Avatar.png" alt="" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          Olivia Rhye
                        </div>
                        <Link href={""} className="text-sm text-neutral-500">
                          olivia@untitledui.com
                        </Link>
                      </div>
                    </div>
                    <div role="button" className="p-2 -mt-2">
                      <img src="/picture/_Button base.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </SimpleBar>
          </Drawer>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
