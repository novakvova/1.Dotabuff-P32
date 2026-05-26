import type {IProMatches} from "../../proMatches/model/IProMatches.tsx";

type Props = {
    match: IProMatches;
};

const ProMatchesMiniCard = ({match}:Props) => {
    return (
        <>
            <div className="shadow rounded-xl border-2 border-gray-700 px-3 p-2 w-full hover:bg-gray-900 transition doration-200">
                <div>
                    <p className="text-sm text-gray-500">
                        {match.league_name}
                    </p>
                    <div className="flex justify-center">
                        <p className="flex mt-1 text-lg text-sm text-white">
                            {match.radiant_name}
                            <span className=" flex justify-center mx-1 text-gray-500">vs</span>
                            {match.dire_name}
                        </p>
                    </div>
                </div>

                <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center justify-between gap-3 w-full">
                        <div className="flex items-center gap-1">
                            <p className="text-xs uppercase tracking-wide text-gray-500">
                                Radiant
                            </p>

                            <p className="text-sm font-bold text-green-400">
                                {match.radiant_score}
                            </p>
                        </div>

                        <div className="text-gray-600">
                            —
                        </div>

                        <div className="flex items-center gap-1">
                            <p className="text-xs uppercase tracking-wide text-gray-500">
                                Dire
                            </p>

                            <p className="text-sm font-bold text-red-400">
                                {match.dire_score}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProMatchesMiniCard;