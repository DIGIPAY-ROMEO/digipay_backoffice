/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import moment from "moment";
import Router from "next/router";
import { useEffect, useState } from "react";
import { AiFillFileAdd } from "react-icons/ai";
import { FaSearch, FaFilter } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import {
  CreateModal,
  FilterModal,
  SearchModal,
  ViewRowDataModal,
} from "~/components/dashboard/modals";
interface MockDataType {
  [key: string]: unknown;
}

const GenericTable = (): JSX.Element => {
  const [mockData, setMockData] = useState<MockDataType[] | null>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pageLength, setPageLength] = useState<number>(0);
  const isTopupOrTransactionPage =
    Router.asPath.includes("top-ups") || Router.asPath.includes("transactions");
  const pageLimit = 20;

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
    <>
      <div className="flex max-w-full flex-col items-stretch overflow-y-scroll p-9">
        <div className="btn-group flex w-full flex-row flex-wrap items-end justify-between space-x-5 p-5">
          <small>
            <span className="font-bold">Note:</span> Transaction page only
            retrieves 1 WEEK of data, including filter section. Please contact
            the DEVELOPER to obtain the older records.
          </small>
          <div className="flex flex-row space-x-5">
            <div className="tooltip tooltip-bottom ml-auto" data-tip="Search">
              <label htmlFor="search-modal" className="btn btn-square">
                <FaSearch />
              </label>
            </div>
            <div className="tooltip tooltip-bottom" data-tip="Filter">
              <label htmlFor="filter-modal" className="btn btn-square">
                <FaFilter />
              </label>
            </div>
            {!isTopupOrTransactionPage && (
              <div className="tooltip tooltip-bottom" data-tip="Create">
                <label htmlFor="create-data-modal" className="btn btn-square">
                  <AiFillFileAdd />
                </label>
              </div>
            )}
          </div>
        </div>
        <table className="table w-full overflow-x-scroll shadow-lg sm:table-fixed">
          {/* head */}
          <thead>
            <tr>
              <th>ID</th>
              {isTopupOrTransactionPage ? <th>STATUS</th> : null}
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
                onClick={
                  Object.keys(Router.query).length > 1
                    ? undefined
                    : () =>
                        void Router.push({
                          pathname: Router.asPath,
                          query: { ...data },
                        })
                }
              >
                <td className="bg-white">{data?.id}</td>

                {isTopupOrTransactionPage ? (
                  <td className="bg-white">
                    <div
                      className="tooltip tooltip-bottom w-full"
                      data-tip={
                        data?.completed
                          ? "Successful"
                          : data?.id % 2 === 0
                          ? ` Failed to complete transaction`
                          : "Pending"
                      }
                    >
                      <p
                        className={`max-w-full truncate p-2 text-center text-white rounded-md${
                          data?.completed
                            ? ` bg-success`
                            : data?.id % 2 === 0
                            ? ` bg-error`
                            : ` bg-amber-500`
                        }`}
                      >
                        {data?.completed
                          ? "Successful"
                          : data?.id % 2 === 0
                          ? ` Failed to complete transaction`
                          : "Pending"}
                      </p>
                    </div>
                  </td>
                ) : null}
                <td className="max-w-[50px] truncate whitespace-pre-line bg-white">
                  {moment().format("MMMM Do YYYY") +
                    "\n" +
                    moment().format("h:mm:ss a")}
                </td>
                <td className="max-w-[50px] truncate bg-white">
                  {data?.title}
                </td>
                <td className="max-w-[50px] truncate bg-white">
                  {data?.title}
                </td>
                <td className=" bg-white">666.66</td>
                <td className=" bg-white">666.66</td>
                <td className=" bg-white">666.66</td>
                <td className=" bg-white">666.66</td>
                <td className=" bg-white">666.66</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="btn-group flex w-full flex-row items-start justify-start p-5">
          <small>
            <span>Export as: </span>
            <span
              role="button"
              className="font-bold hover:text-info hover:underline"
            >
              CSV,{" "}
            </span>
            <span
              role="button"
              className="font-bold hover:text-info hover:underline"
            >
              XML,{" "}
            </span>
            <span
              role="button"
              className="font-bold hover:text-info hover:underline"
            >
              JSON{" "}
            </span>
          </small>
          {isLoading ? (
            <p className="btn btn-disabled loading mx-3 ml-auto bg-base-100 text-black">
              Loading...
            </p>
          ) : (
            <div></div>
          )}
          <div className="btn-group ml-auto">
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

      <SearchModal />
      <FilterModal />
      <ViewRowDataModal />
      <CreateModal />
    </>
  );
};

export default GenericTable;
