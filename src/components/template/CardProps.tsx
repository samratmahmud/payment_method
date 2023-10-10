import React, {ReactNode} from "react";

interface randomCard {
  pic: string;
  name: string;
  date: string;
  defaul: string;
  edit: string;
  isActive?: boolean;
  handelclick?: () => void;
}

function CardProps(props: randomCard) {
  const {pic, name, date, defaul, edit, isActive, handelclick} = props;

  return (
    <div onClick={handelclick}>
      <div
        className={`flex flex-row justify-between gap-10 p-4 rounded-lg w-full ${
          isActive
            ? "border border-gray-300"
            : "border border-violet-300 bg-violet-100"
        }`}
      >
        <div className="flex gap-8">
          <div>
            <img src={pic} alt="" />
          </div>
          <div>
            <div
              className={`text-sm font-medium ${
                isActive ? "text-gray-700" : "text-purple-800"
              }`}
            >
              {name}
            </div>
            <div
              className={`text-sm ${
                isActive ? "text-neutral-500" : "text-indigo-500"
              }`}
            >
              {date}
            </div>
            <div className="flex gap-3">
              <div
                className={`text-sm font-medium ${
                  isActive ? "text-neutral-500" : "text-indigo-500"
                }`}
              >
                {defaul}
              </div>
              <div className="text-sm font-medium text-indigo-700">{edit}</div>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0">
          <img
            src={`${
              isActive
                ? "/picture/_Checkbox base (1).svg"
                : "/picture/_Checkbox base.svg"
            }`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default CardProps;
