import {useGetProMatchesQuery} from "../../entityes/proMatches/api/proMatchesApi.ts";
import ProMatchesDetails from "../../entityes/proMatches/ui/ProMatchesDetails.tsx";
import LeftPanel from "../../entityes/proMatches/ui/LeftPanel.tsx";
import {useState} from "react";
import type {SortType} from "../../entityes/proMatches/model/SortType.ts";


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

    return (
        <>
            <div className={"flex gap-6 px-6 py-6"}>
                <LeftPanel
                    sortType={sortType}
                    setSortType={setSortType}
                />

                <main className="w-full">
                    <ProMatchesDetails
                        matches={sortedMatches}
                    />
                </main>
            </div>
        </>
    )
}

export default ProMatchesPage;