import React, { useState } from "react";
import { Down } from "./icons"; // Adjust the import based on where your Down icon is located

interface TableProps {
  data: any;
}

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  return new Date(dateString).toLocaleDateString("en-GB", options);
};

const Table = ({ data }: TableProps) => {
  const [dropdownIndex, setDropdownIndex] = useState<number | null>(null);
  const [isActiveList, setIsActiveList] = useState<boolean[]>(
    Array(5).fill(false)
  );

  // const [isActiveList, setIsActiveList] = useState<boolean[]>(
  //   Array(data?.data.length).fill(false)
  // );

  const handleToggleDropdown = (index: number) => {
    const newIsActiveList = isActiveList.map((value, i) =>
      i === index ? !value : value
    );
    setDropdownIndex(dropdownIndex === index ? null : index);
    setIsActiveList(newIsActiveList);
  };

  if (!data || !Array.isArray(data.data)) {
    return <div>Data is not in the expected format.</div>;
  }

  return (
    <div className="container w-9/12 bg-white rounded-2xl p-5 flex flex-col items-start">
      <h2 className="font-semibold text-xl leading-6 text-accent-800 pb-8">
        Transactions History
      </h2>
      <table className="w-full">
        <thead>
          <tr className="text-black font-semibold leading-4 text-sm text-center">
            <th>Type</th>
            <th>Location</th>
            <th>Rental Period</th>
            <th>Number of IP</th>
            <th>Specific Purpose</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.data.map((d: any, index: number) => (
            <React.Fragment key={index}>
              <tr className="text-accent-800 text-center text-sm leading-4 border-b border-accent-300">
                <td className="py-5">{d.type}</td>
                <td>{d.location}</td>
                <td>{d.rental}</td>
                <td>{d.ipcount}</td>
                <td>{d.purpose}</td>
                <td>{formatDate(d.date)}</td>
                <td className="align-middle relative">
                  <div className="flex justify-center items-center h-full">
                    <button
                      className={`shadow-[0_0_2px_rgba(0,0,0,0.15)] font-medium rounded h-6 w-[85px] flex items-center justify-between px-2 ${
                        isActiveList[index] ? "text-primary-950" : "text-black"
                      }`}
                      onClick={() => handleToggleDropdown(index)}
                    >
                      Actions{" "}
                      <Down
                        className={` inline-block align-middle transition-transform ${
                          isActiveList[index]
                            ? "transform rotate-180 mt-1 !text-primary-950"
                            : "mb-1"
                        }`}
                      />
                    </button>
                  </div>
                  {dropdownIndex === index && (
      <div className="absolute shadow-[0_2px_2px_rgba(0,0,0,0.15)] top-9 w-[85px] left-[30px]  bg-white  rounded z-10 text-accent-400 transition-max-height duration-300 overflow-hidden">
      <ul>
                        <li className="text-left px-2 pt-2.5 pb-1 cursor-pointer text-[8px] leading-3	">
                          Processing
                        </li>
                        <li className="text-left px-2 pb-1 cursor-pointer text-[8px] leading-3">
                          In Progress
                        </li>
                        <li className="text-left px-2 pb-2.5 cursor-pointer text-[8px] leading-3">
                          Completed
                        </li>
                      </ul>
                    </div>
                  )}
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
