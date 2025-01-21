import FileTable from "./components/fileTable";

export default function Page(): JSX.Element {
  return (
    <div className="relative h-screen">
      <div className="w-full px-4 py-16 sm:px-6 lg:px-16">
        <div className="flex justify-between">
          <h5 className="text-3xl font-bold md:text-4xl md:font-semibold">
            My Files
          </h5>
        </div>

        <FileTable />
      </div>
    </div>
  );
}
