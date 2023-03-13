/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/jsx-key */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FiMoreHorizontal, FiShare2 } from "react-icons/fi";
const ViewRowDataModal = (): JSX.Element => {
  const router = useRouter();
  const { id, completed } = router.query;
  const transId = id ? id : 0;
  const [linkCopied, setLinkCopied] = useState(false);
  const [willUpdateData, setWillUpdateData] = useState(false);
  const [approvedRequest, setApprovedRequest] = useState<boolean | undefined>(
    undefined
  );
  const [actionSelected, setActionSelected] = useState<boolean | undefined>(
    undefined
  );

  const isTopupPage = router.asPath.includes("top-ups");
  const isTransactionsPage = router.asPath.includes("transactions");

  useEffect(() => {
    if (linkCopied === true) {
      const delay = setTimeout(() => setLinkCopied(false), 5000);

      return () => clearTimeout(delay);
    }
  }, [linkCopied]);

  const resetState = () => {
    setActionSelected(undefined);
    setApprovedRequest(undefined);
    setWillUpdateData(false);
  };

  const CopyLinkToast = (): JSX.Element => (
    <div
      className={`toast-end toast toast-top ${linkCopied ? "flex" : "hidden"}`}
    >
      <div className="alert alert-success">
        <div>
          <span className="text-white">Link copied to clipboard!</span>
        </div>
      </div>
    </div>
  );

  const Headers = (): JSX.Element => (
    <div className="flex flex-row items-start justify-start">
      <div>
        <p className="text-slate-400">
          {isTransactionsPage ? "Transaction #" : "Top-up #"}
        </p>
        <h3 className="text-2xl font-bold">{transId}</h3>
      </div>
      <div className="ml-auto flex flex-row items-center justify-start space-x-5">
        <label
          role="button"
          htmlFor="view-row-data-modal"
          onClick={() => {
            void navigator.clipboard.writeText(window.location.href);
            setLinkCopied((prevState) => !prevState);
          }}
        >
          <FiShare2 />
        </label>
        {!isTopupPage && (
          <div className="dropdown-end dropdown ml-0">
            <label role="button" tabIndex={0}>
              <FiMoreHorizontal />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box w-52 bg-slate-600 p-2 text-white shadow"
            >
              <li>
                <a>Change to Failed</a>
              </li>
              <li>
                <a>Change to Success</a>
              </li>
              <li>
                <a>Add Rebates</a>
              </li>
              <li>
                <a>Deduct Rebates</a>
              </li>
              <li>
                <a>Resend Email Notification</a>
              </li>
              <li>
                <a>Reverse Trasnsaction</a>
              </li>
            </ul>
          </div>
        )}
        <label
          role="button"
          htmlFor="view-row-data-modal"
          onClick={() => void router.back()}
        >
          ✕
        </label>
      </div>
    </div>
  );

  const TopupImageProof = (): JSX.Element => (
    <div
      className={`flex min-h-screen flex-[4] flex-col items-start justify-start`}
    >
      <p className="center my-auto self-center text-slate-400">
        No Top-up image attached
      </p>

      <p className="mt-5 font-bold">Comments</p>

      <p className="text-center text-slate-400">
        No comments to display currently.
      </p>
      <div className="my-5 flex w-full flex-row space-x-5">
        <div className="flex w-full flex-col">
          <input
            className="input w-full border border-slate-300 text-xs"
            placeholder="Add a comment..."
          />
          <small className="pt-3 text-slate-400">
            <span className="font-bold">Pro Tip:</span> Press enter to submti
            your comment
          </small>
        </div>
      </div>
    </div>
  );

  const AgentLedger = (): JSX.Element => (
    <div className="min-h-screen flex-[7] flex-col items-stretch overflow-x-auto">
      <p className="pb-5 text-2xl font-bold">Agent Ledger</p>
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody className=" border">
          {/* row 1 */}
          <tr className="hover">
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
          {/* row 2 */}
          <tr className="hover">
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
          </tr>
          {/* row 3 */}
          <tr className="hover">
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
          </tr>
        </tbody>
      </table>
      <p className="mt-5 font-bold">Comments</p>

      <p className="text-center text-slate-400">
        No comments to display currently.
      </p>
      <div className="my-5 flex flex-row space-x-5">
        <div className="flex w-full flex-col">
          <input
            className="input w-full border border-slate-300 text-xs"
            placeholder="Add a comment..."
          />
          <small className="pt-3 text-slate-400">
            <span className="font-bold">Pro Tip:</span> Press enter to submti
            your comment
          </small>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <input
        type="checkbox"
        id="view-row-data-modal"
        className="modal-toggle"
        checked={transId ? true : false}
      />
      <div className="modal modal-bottom sm:modal-middle">
        {isTransactionsPage || isTopupPage ? (
          <div
            className={`modal-box ${
              isTopupPage
                ? "min-h-[90vh] min-w-[95vw]"
                : "min-h-[90vh] min-w-[95vw]"
            }`}
          >
            <Headers />

            <div className="flex flex-col items-stretch justify-start pt-5 sm:flex-row">
              {isTopupPage ? <TopupImageProof /> : <AgentLedger />}
              <div className="divider divider-horizontal" />
              <div
                className={`flex min-h-full  flex-col items-start justify-start ${
                  isTopupPage ? "flex-[7]" : "flex-[3]"
                }`}
              >
                <p className="pb-3 text-xl font-bold">Status</p>
                <div
                  className="tooltip tooltip-bottom"
                  data-tip={
                    completed === "true" && router.isReady
                      ? "Successful"
                      : parseInt(transId.toString()) % 2 === 0
                      ? ` Failed to complete transaction`
                      : "Pending"
                  }
                >
                  <p
                    className={`max-w-full truncate p-2 text-center text-white rounded-md${
                      completed === "true" && router.isReady
                        ? ` bg-success`
                        : parseInt(transId.toString()) % 2 === 0
                        ? ` bg-error`
                        : ` bg-amber-500`
                    }`}
                  >
                    {completed === "true" && router.isReady
                      ? "Successful"
                      : parseInt(transId.toString()) % 2 === 0
                      ? ` Failed to complete transaction`
                      : "Pending"}
                  </p>
                </div>
                <div className="divider" />
                <p className="pb-3 text-xl font-bold">Details</p>

                <div className="flex w-full flex-col items-stretch space-y-3">
                  {Object.keys(router.query)
                    .filter(
                      (query) => query !== "page_view" && query !== "userId"
                    )
                    .map((query) => (
                      <div className="flex w-full flex-row justify-between">
                        <small className="font-bold capitalize text-slate-400">
                          {query}
                        </small>
                        <p className="text-end">{router.query[query]}</p>
                      </div>
                    ))}
                </div>

                <div className="divider" />
                {isTopupPage &&
                parseInt(transId.toString()) % 2 !== 0 &&
                completed === "false" ? (
                  <>
                    <p className="pb-3 text-xl font-bold">Request Actions</p>

                    <div className="flex w-full flex-col items-stretch space-y-3">
                      <div className="flex flex-row items-center justify-start space-x-5">
                        <p>Approve Request?</p>
                        <div className="form-control">
                          <label className="label cursor-pointer">
                            <input
                              type="radio"
                              name="radio-10"
                              className="radio mr-3 checked:bg-primary"
                              onChange={(e) => {
                                setApprovedRequest(true);
                                setActionSelected(true);
                              }}
                            />
                            <span className="label-text">YES</span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label cursor-pointer">
                            <input
                              type="radio"
                              name="radio-10"
                              className="radio mr-3 checked:bg-primary"
                              onChange={(e) => {
                                setApprovedRequest(false);
                                setActionSelected(true);
                              }}
                            />
                            <span className="label-text">NO</span>
                          </label>
                        </div>
                      </div>
                      {actionSelected !== undefined &&
                        approvedRequest === true && (
                          <div className={`flex w-full flex-col space-y-5`}>
                            <input
                              type="number"
                              className="input border-slate-300"
                              placeholder="Confirm Amount here..."
                            />
                            <input
                              type="text"
                              className="input border-slate-300"
                              placeholder="Reference Number here..."
                            />
                            <input
                              type="text"
                              className="input border-slate-300"
                              placeholder="Confirm Reference Numer here..."
                            />
                            <button className="btn btn-primary">SUBMIT</button>
                          </div>
                        )}
                      {actionSelected !== undefined &&
                        approvedRequest === false && (
                          <div className={`flex w-full flex-col space-y-5`}>
                            <select className="select w-full border-slate-300">
                              <option disabled selected>
                                Select reason for declining...
                              </option>
                              <option>Wrong reference number</option>
                              <option>Date issued invalid</option>
                              <option>Request already sent</option>
                              <option>
                                Request already sent and processed
                              </option>
                            </select>
                            <button className="btn btn-primary">SUBMIT</button>
                          </div>
                        )}
                    </div>
                  </>
                ) : (
                  <>
                    <p className="pb-3 text-xl font-bold">Agent Details</p>

                    <div className="flex w-full flex-col items-stretch space-y-3">
                      {Object.keys(router.query)
                        .filter(
                          (query) => query !== "page_view" && query !== "userId"
                        )
                        .map((query) => (
                          <div className="flex w-full flex-row justify-between">
                            <small className="font-bold capitalize text-slate-400">
                              {query}
                            </small>
                            <p className="text-end">{router.query[query]}</p>
                          </div>
                        ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="modal-box min-h-[90vh] min-w-[40vw]">
            <div className="flex flex-row items-start justify-start">
              <div>
                <p className="text-slate-400">Admin ID #</p>
                <h3 className="text-2xl font-bold">{transId}</h3>
              </div>
              <div className="ml-auto flex flex-row items-center justify-start space-x-5">
                <label
                  role="button"
                  htmlFor="view-row-data-modal"
                  onClick={() => {
                    void navigator.clipboard.writeText(window.location.href);
                    setLinkCopied((prevState) => !prevState);
                  }}
                >
                  <FiShare2 />
                </label>
                <div className="dropdown-end dropdown ml-0">
                  <label role="button" tabIndex={0}>
                    <FiMoreHorizontal />
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu rounded-box w-52 bg-slate-600 p-2 text-white shadow"
                  >
                    <li onClick={() => setWillUpdateData(true)}>
                      <a>Update</a>
                    </li>
                    <li>
                      <a>Delete</a>
                    </li>
                  </ul>
                </div>
                <label
                  role="button"
                  htmlFor="view-row-data-modal"
                  onClick={() => {
                    resetState();
                    router.back();
                  }}
                >
                  ✕
                </label>
              </div>
            </div>
            <div className="flex flex-col items-stretch justify-start">
              <p className="py-3 text-xl font-bold">Details</p>
            </div>
            <div className="flex flex-col items-stretch justify-start space-y-5">
              <div className="form-control">
                <label htmlFor="email" className="pl-2 text-sm text-slate-500">
                  Email
                </label>

                <input
                  id="email"
                  className="input w-full border-slate-300"
                  type="email"
                  defaultValue="test@email.com"
                  disabled={willUpdateData === false}
                />
              </div>
              <div className="form-control">
                <label htmlFor="role" className="pl-2 text-sm text-slate-500">
                  Role
                </label>
                <select
                  className="select-bordered select w-full"
                  id="role"
                  disabled={willUpdateData === false}
                >
                  <option disabled>Select Role...</option>
                  <option selected>Super Admin</option>
                  <option>Sales</option>
                  <option>ANM</option>
                </select>
              </div>
              <div className="form-control">
                <label htmlFor="name" className="pl-2 text-sm text-slate-500">
                  Name
                </label>

                <input
                  id="name"
                  className="input w-full border-slate-300"
                  type="text"
                  defaultValue="test@email.com"
                  disabled={willUpdateData === false}
                />
              </div>
              <div className="form-control">
                <label
                  htmlFor="password"
                  className="pl-2 text-sm text-slate-500"
                >
                  Password
                </label>

                <input
                  id="email"
                  className="input w-full border-slate-300"
                  type="password"
                  defaultValue={willUpdateData ? "" : "test@email.com"}
                  disabled={willUpdateData === false}
                />
              </div>
              {willUpdateData && (
                <div className="form-control">
                  <label
                    htmlFor="confirm_password"
                    className="pl-2 text-sm text-slate-500"
                  >
                    Confirm Password
                  </label>

                  <input
                    id="confirm_password"
                    className="input w-full border-slate-300"
                    type="password"
                  />
                </div>
              )}
              {willUpdateData && (
                <div className="flex flex-row items-stretch justify-end space-x-5">
                  <button
                    className="btn border-none bg-slate-400 text-white"
                    onClick={() => setWillUpdateData(false)}
                  >
                    CANCEL
                  </button>
                  <button className="btn btn-primary">SUBMIT</button>
                </div>
              )}
            </div>
          </div>
        )}

        <CopyLinkToast />
      </div>
    </>
  );
};
export default ViewRowDataModal;
