import {useGetProMatchesQuery} from "../../entityes/proMatches/api/proMatchesApi.ts";
import ProMatchesDetails from "../../entityes/proMatches/ui/ProMatchesDetails.tsx";


const ProMatchesPage = () => {
    const {data, isLoading, isError} = useGetProMatchesQuery();

    console.log(data);
    console.log("Error data...", isError);
    console.log("Loading data...", isLoading);

    return (
        <>
            <div className={"flex gap-6 px-6 py-6"}>
                <aside className="sticky top-6 h-fit w-64 shrink-0 rounded-lg border border-gray-900 bg-gray-900 p-4">
                    <h3 className="mb-3 border-b border-gray-700 pb-2 text-sm font-bold text-red-500">
                        Фільтер
                    </h3>

                    <div className="flex flex-col gap-2">
                        <div>
                            <button className={"rounded-md border border-red-500 text-red-500 w-full px-3 py-2 text-left text-xs transition-all duration-150 hover:cursor-pointer"}>Без фільтру</button>
                        </div>
                        <div>
                            <button className={"rounded-md border w-full px-3 py-2 text-left text-xs transition-all duration-150 hover:cursor-pointer"}>Перший фільтер</button>
                        </div>
                    </div>
                </aside>

                <main className="w-full">
                    <ProMatchesDetails/>
                </main>
            </div>
        </>
    )
}

export default ProMatchesPage;