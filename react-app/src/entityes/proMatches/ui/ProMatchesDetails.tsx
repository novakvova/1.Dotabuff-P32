import ProMatchCard from "./ProMatchCard.tsx";
import type {IProMatches} from "../model/IProMatches.tsx";

type Props = {
    matches: IProMatches[];
};

const ProMatchesDetails = ({matches}:Props) => {

    return (
        <>
            <div className="w-full">
                <div>
                    {matches?.map((match) => (
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