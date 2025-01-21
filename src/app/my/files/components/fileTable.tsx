export default function FileTable(): JSX.Element {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead>
          <tr>
            <th className="px-4 py-2">
              <label htmlFor="SelectAll" className="sr-only">
                Select All
              </label>

              <input
                type="checkbox"
                id="SelectAll"
                className="size-5 rounded border-gray-300 accent-emerald-500"
              />
            </th>
            <th
              className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
              align="left"
            >
              File Name
            </th>
            <th
              className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
              align="left"
            >
              Uploaded at
            </th>
            <th
              className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
              align="left"
            >
              Size
            </th>
            <th
              className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
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
                className="size-5 rounded border-gray-300"
                type="checkbox"
                id="Row1"
              />
            </td>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
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
            <td className="whitespace-nowrap px-4 py-2">
              <a
                href="#"
                className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
              >
                View
              </a>
            </td>
          </tr>

          <tr>
            <td className="px-4 py-2" align="center">
              <label className="sr-only" htmlFor="Row2">
                Row 2
              </label>

              <input
                className="size-5 rounded border-gray-300"
                type="checkbox"
                id="Row2"
              />
            </td>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Jane Doe
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              04/11/1980
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              Web Designer
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              $100,000
            </td>
            <td className="whitespace-nowrap px-4 py-2">
              <a
                href="#"
                className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
              >
                View
              </a>
            </td>
          </tr>

          <tr>
            <td className="px-4 py-2" align="center">
              <label className="sr-only" htmlFor="Row3">
                Row 3
              </label>

              <input
                className="size-5 rounded border-gray-300"
                type="checkbox"
                id="Row3"
              />
            </td>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Gary Barlow
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              24/05/1995
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              Singer
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              $20,000
            </td>
            <td className="whitespace-nowrap px-4 py-2">
              <a
                href="#"
                className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
              >
                View
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
