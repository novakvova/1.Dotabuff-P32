import {useGetProMatchesQuery} from "../../entityes/proMatches/api/proMatchesApi.ts";
import ProMatchesDetails from "../../entityes/proMatches/ui/ProMatchesDetails.tsx";
import LeftPanel from "../../entityes/proMatches/ui/LeftPanel.tsx";
import {useState} from "react";
import type {SortType} from "../../entityes/proMatches/model/SortType.ts";
import Loading from "../../widgets/Loading";
import Error from "../../widgets/Error";


const ProMatchesPage = () => {
    const {data, isLoading, isError} = useGetProMatchesQuery();
    const [sortType, setSortType] = useState<SortType>("NEWEST");
    const sortedMatches = [...(data || [])];

    sortedMatches.sort((a, b) => {
        switch (sortType) {
            case "NEWEST":
                return b.start_time - a.start_time;
            case "OLDEST":
                return a.start_time - b.start_time;
            case "LONGEST":
                return b.duration - a.duration;
            case "SHORTEST":
                return a.duration - b.duration;
            default:
                return 0;
        }
    });

    if (isLoading) {
        return (
            <>
                <Loading message={"Завантаження матчів з OpenDota..."}/>
            </>
        );
    }

    if (isError) {
        return (
            <>
                <Error message={"Помилка: Не вдалося завантажити дані з OpenDota API. Перевірте підключення до інтернету."}/>
            </>
        );
    }

    return (
        <>
            <div className={"flex gap-6 px-6 py-6"}>
                <LeftPanel
                    sortType={sortType}
                    setSortType={setSortType}
                />

                <main className="w-full">
                    <h1 className="mb-2 border-b-4 border-[#37474f] pb-4 text-3xl font-bold text-white">
                        Професійні матчі Dota 2
                    </h1>
                    <ProMatchesDetails
                        matches={sortedMatches}
                    />
                </main>
            </div>
        </>
    )
}

export default ProMatchesPage;