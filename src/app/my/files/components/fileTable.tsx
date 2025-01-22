import Link from "next/link";

export default function FileTable(): JSX.Element {
  return (
    <div className="overflow-x-auto hidden md:block">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white">
        <thead>
          <tr>
            <th className="px-4 py-2" align="center">
              <label htmlFor="SelectAll" className="sr-only">
                Select All
              </label>

              <input
                type="checkbox"
                id="SelectAll"
                className="size-4 cursor-pointer rounded border-gray-300 accent-emerald-500"
              />
            </th>
            <th
              className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900"
              align="left"
            >
              File Name
            </th>
            <th
              className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900"
              align="left"
            >
              Category
            </th>
            <th
              className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900"
              align="left"
            >
              Uploaded at
            </th>
            <th
              className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900"
              align="left"
            >
              Size
            </th>
            <th
              className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900"
              align="left"
            >
              Uploaded to
            </th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="px-4 py-2" align="center">
              <label className="sr-only" htmlFor="Row1">
                Row 1
              </label>

              <input
                className="size-5 cursor-pointer rounded border-gray-300 accent-emerald-500"
                type="checkbox"
                id="Row1"
              />
            </td>
            <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">
              John Doe
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              24/05/1995
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              Web Developer
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              $120,000
            </td>
            <td className="whitespace-nowrap px-4 py-2">Public</td>
            <td className="whitespace-nowrap px-4 py-2 flex gap-2">
              <Link
                href="#"
                className="inline-block rounded bg-emerald-500 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-600"
              >
                Download
              </Link>

              <button
                type="button"
                className="inline-block rounded bg-red-500 px-4 py-2 text-xs font-semibold text-white hover:bg-red-600"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
