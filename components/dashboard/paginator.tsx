"use server";

import Link from "next/link";
import { rSeq } from "../../util/gen/seqs";

export async function Pagination({
  totalArticles,
  nowPage,
}: {
  totalArticles: number;
  nowPage: number;
}) {
  const lastPage = Math.ceil(totalArticles / 5);
  const pages = [...rSeq(lastPage)];
  const isLeftButtonOk = !(nowPage - 1 <= 0);
  const isRightButtonOk = nowPage < lastPage;

  return (
    <div className="flex items-center justify-center bg-white px-4 py-3 px-6">
      <div className="flex flex-2 items-center justify-between">
        <nav
          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          {isLeftButtonOk ? (
            <Link
              href={`/dashboard/${nowPage - 1}`}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          ) : undefined}
          {pages.map((page) => (
            <Link
              href={`/dashboard/${page}`}
              aria-current="page"
              className={`relative z-10 
              inline-flex items-center ${
                page === nowPage ? "bg-blue-500" : "bg-gray-500"
              }
              px-4 py-2 text-sm font-semibold 
              text-white focus:z-20 focus-visible:outline 
              focus-visible:outline-2 focus-visible:outline-offset-2 
              focus-visible:outline-indigo-600 active`}
              key={page}
            >
              {page}
            </Link>
          ))}
          {isRightButtonOk ? (
            <Link
              href={`/dashboard/${nowPage + 1}`}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          ) : undefined}
        </nav>
      </div>
    </div>
  );
}
