import {useGetProMatchesQuery} from "../../proMatches/api/proMatchesApi.ts";
import ProMatchesDetailsMini from "./ProMatchesDetailsMini.tsx";
import Loading from "../../../widgets/Loading";
import Error from "../../../widgets/Error";
import {NavLink} from "react-router-dom";

const LeftPanel = () => {
    const {data, isError, isLoading} = useGetProMatchesQuery();

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
            <aside className="sticky top-6 h-fit w-64 shrink-0 rounded-lg border border-gray-700 bg-gray-900 p-4 shadow">
                <h3 className="mb-3 border-b border-gray-700 pb-2 text-sm font-bold dota-color hover:underline">
                    <NavLink to="pro-matches-page" className="block">
                        Останні матчі
                    </NavLink>

                </h3>

                <div className="flex flex-col gap-2">
                    <ProMatchesDetailsMini matches={data ?? []}/>
                </div>
            </aside>
        </>
    )
}

export default LeftPanel;