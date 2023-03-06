/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
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
    <div className="w-full overflow-x-scroll overflow-y-scroll p-9">
      <table className="table w-full shadow-lg">
        {/* head */}
        <thead>
          <tr>
            <th>TRANSACTION ID</th>
            <th>USER</th>
            <th>TOTAL COST</th>
            <th>CREATED AT</th>
            <th>TRANSACTION STATUS</th>
          </tr>
        </thead>
        <tbody>
          {mockData?.map((data, index) => (
            <tr
              key={index}
              role={"button"}
              className="hover"
              onClick={() => alert(JSON.stringify(data, 0, 2))}
            >
              <td className="bg-white">{data?.id}</td>
              <td className="truncate bg-white">{data?.title}</td>
              <td className="text-ellipsis bg-white">666.66</td>
              <td className="text-ellipsis bg-white">March 05, 2023 11:11</td>
              <td className="bg-white">
                <p
                  className={`p-2 text-center text-white rounded-md${
                    data?.completed ? ` bg-success` : ` bg-amber-500`
                  }`}
                >
                  {data?.completed ? "Successful" : "Pending"}
                </p>
              </td>
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
            disabled={currentPage <= 1}
            className="btn"
            onClick={() => setCurrentPage((prevState) => (prevState -= 1))}
          >
            «
          </button>
          <button className="btn">{`Page ${currentPage}`}</button>
          <button
            disabled={currentPage >= pageLength}
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
