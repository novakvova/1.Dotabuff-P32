import ProMatchCard from "./ProMatchCard.tsx";
import {useGetProMatchesQuery} from "../api/proMatchesApi.ts";

const ProMatchesDetails = () => {
    const {data, isLoading, isError} = useGetProMatchesQuery();

    console.log(data);
    console.log("Error data...", isError);
    console.log("Loading data...", isLoading);

    return (
        <>
            <div className="w-full">
                <div>
                    {data?.map((match) => (
                        <div className={"mb-4"}
                             key={match.match_id}>
                            <ProMatchCard
                                match={match}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ProMatchesDetails;