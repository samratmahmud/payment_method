"use client";
import Link from "next/link";
import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";

const buttons = [
  {
    name: "My details",
    url: "/",
  },
  {
    name: "Profile",
    url: "/",
  },
  {
    name: "Password",
    url: "/",
  },
  {
    name: "Team",
    url: "/",
  },
  {
    name: "Plan",
    url: "/",
  },
  {
    name: "Billing",
    url: "/",
  },
  {
    name: "Notifications",
    url: "/",
  },
  {
    name: "Integrations",
    url: "/",
  },
  {
    name: "API",
    url: "/",
  },
];

function Header() {
  return (
    <div>
      <div className="lg:p-8 py-8">
        <div className="lg:text-xl text-lg font-medium text-gray-900 mb-1">
          Settings
        </div>
        <div className="text-md text-neutral-500 mb-6">
          Manage your team and preferences here.
        </div>
        <ScrollContainer
          nativeMobileScroll={false}
          className="scroll-container"
        >
          <div className="flex mb-8">
            {buttons.map(({name, url}, index) => (
              <div
                key={index}
                className="first:rounded-s-lg last:rounded-e-lg border border-gray-500 py-2.5 px-4 flex-shrink-0"
              >
                <Link href={url} className="text-sm font-medium text-gray-700">
                  {name}
                </Link>
              </div>
            ))}
          </div>
        </ScrollContainer>
        <div className="text-base font-medium text-gray-900 mb-1">
          Payment method
        </div>
        <div className="text-sm text-neutral-500 mb-5">
          Update your billing details and address.
        </div>
        <hr className="h-[2px] bg-gray-300 mb-6" />
        <div className="flex lg:flex-row flex-col lg:gap-8 gap-5 mb-5">
          <div>
            <div className="text-sm font-medium text-gray-700">
              Contact email
            </div>
            <div className="text-sm text-neutral-500">
              Where should invoices be sent?
            </div>
          </div>
          <div>
            <div className="flex gap-2 items-start mb-4">
              <input
                role="button"
                className="mt-1.5"
                type="radio"
                name="contact-email"
              />
              <div>
                <div className="text-sm font-medium text-gray-700">
                  Send to my account email
                </div>

                <Link href={""} className="text-sm text-neutral-500">
                  olivia@untitledui.com
                </Link>
              </div>
            </div>
            <div className="flex gap-2 items-start">
              <input
                role="button"
                className="mt-1.5"
                type="radio"
                name="contact-email"
              />
              <div>
                <div className="text-sm font-medium text-gray-700 mb-3">
                  Send to an alternative email
                </div>
                <div
                  role="button"
                  className="flex items-center gap-2 py-2.5 px-3.5 border border-gray-500 rounded-lg shadow-md"
                >
                  <div>
                    <img src="/picture/mail.svg" alt="" />
                  </div>
                  <input
                    className="text-md text-gray-900 focus:outline-none"
                    type="email"
                    placeholder="billing@untitledui.com"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="h-[2px] bg-gray-300 mb-5" />
      </div>
    </div>
  );
}

export default Header;
