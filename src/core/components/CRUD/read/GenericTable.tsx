/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import moment from "moment";
import Router from "next/router";
import { useEffect, useState } from "react";

interface MockDataType {
  [key: string]: unknown;
}

const GenericTable = (): JSX.Element => {
  const [mockData, setMockData] = useState<MockDataType[] | null>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pageLength, setPageLength] = useState<number>(0);
  const pageLimit = 10;

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((response) => response.json())
      .then((json) => {
        setPageLength(json.length / pageLimit);
        setIsLoading(false);
      })
      .catch((e) => console.error(e));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://jsonplaceholder.typicode.com/todos?_page=${currentPage.toString()}&_limit=${pageLimit}`
    )
      .then((response) => response.json())
      .then((json) => {
        setMockData(json);
        setIsLoading(false);
      })
      .catch((e) => console.error(e));
  }, [currentPage]);

  return (
    <div className="max-w-full p-9">
      <table className="table w-full table-fixed overflow-x-scroll shadow-lg">
        {/* head */}
        <thead>
          <tr>
            <th>ID</th>
            <th>STATUS</th>
            <th>CREATED AT</th>
            <th>CATEGORY</th>
            <th>PRODIVER PRODUCT</th>
            <th>COST</th>
            <th>CONVENIENCE FEE</th>
            <th>SERVICE FEE</th>
            <th>REBATES</th>
            <th>TOTAL COST</th>
          </tr>
        </thead>
        <tbody>
          {mockData?.map((data, index) => (
            <tr
              key={index}
              role={"button"}
              className="hover text-xs"
              onClick={() => alert(JSON.stringify(data, 0, 2))}
            >
              <td className="bg-white">{data?.id}</td>
              <td className="bg-white">
                <p
                  className={`p-2 text-center text-white rounded-md${
                    data?.completed ? ` bg-success` : ` bg-amber-500`
                  }`}
                >
                  {data?.completed ? "Successful" : "Pending"}
                </p>
              </td>
              <td className="max-w-[50px] truncate whitespace-pre-line bg-white">
                {moment().format("MMMM Do YYYY") +
                  "\n" +
                  moment().format("h:mm:ss a")}
              </td>
              <td className="max-w-[50px] truncate bg-white">{data?.title}</td>
              <td className="max-w-[50px] truncate bg-white">{data?.title}</td>
              <td className=" bg-white">666.66</td>
              <td className=" bg-white">666.66</td>
              <td className=" bg-white">666.66</td>
              <td className=" bg-white">666.66</td>
              <td className=" bg-white">666.66</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="btn-group flex w-full flex-row items-center justify-between p-5">
        {isLoading ? (
          <p className="btn-disabled loading btn mx-3 bg-base-100 text-black">
            Loading...
          </p>
        ) : (
          <div></div>
        )}
        <div className="btn-group">
          <button
            disabled={currentPage <= 1 || isLoading}
            className="btn"
            onClick={() => setCurrentPage((prevState) => (prevState -= 1))}
          >
            «
          </button>
          <button
            disabled={isLoading}
            className="btn"
          >{`Page ${currentPage}`}</button>
          <button
            disabled={currentPage >= pageLength || isLoading}
            className="btn"
            onClick={() => setCurrentPage((prevState) => (prevState += 1))}
          >
            »
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenericTable;
