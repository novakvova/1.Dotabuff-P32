import type {IProMatches} from "../../proMatches/model/IProMatches.tsx";
import ProMatchesMiniCard from "./ProMatchesMiniCard.tsx";

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
                            <ProMatchesMiniCard
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