import type {IProMatches} from "../model/IProMatches.tsx";

type Props = {
    match: IProMatches;
};

const ProMatchCard = ({ match }: Props) => {

    const winner = match.radiant_win
        ? match.radiant_name
        : match.dire_name;

    return (
        <>
            <div className="shadow rounded-xl border-2 border-gray-700 px-3 p-2 w-full hover:bg-gray-900 transition doration-200">
                <div className="flex items-center justify-between ">

                    <div>
                        <p className="text-sm text-gray-500">
                            {match.league_name}
                        </p>

                        <h3 className="mt-1 text-lg font-bold text-white">
                            {match.radiant_name}
                            <span className="mx-2 text-gray-500">vs</span>
                            {match.dire_name}
                        </h3>
                    </div>

                    <div className="rounded-md bg-gray-900 px-3 py-1 text-sm font-semibold text-red-500">
                        BO{match.series_type + 1}
                    </div>
                </div>

                <div className="mt-5 flex items-center justify-between">

                    <div className="flex items-center gap-3">

                        <div>
                            <p className="text-xs uppercase tracking-wide text-gray-500">
                                Radiant
                            </p>

                            <p className="text-xl font-bold text-green-400">
                                {match.radiant_score}
                            </p>
                        </div>

                        <div className="text-gray-600">
                            —
                        </div>

                        <div>
                            <p className="text-xs uppercase tracking-wide text-gray-500">
                                Dire
                            </p>

                            <p className="text-xl font-bold text-red-400">
                                {match.dire_score}
                            </p>
                        </div>
                    </div>

                    <div className="text-right">

                        <p className="text-xs text-gray-500">
                            Winner
                        </p>

                        <p className="font-semibold text-white">
                            {winner}
                        </p>
                    </div>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-gray-800 pt-4">

                    <div>
                        <p className="text-xs text-gray-500">
                            Match ID
                        </p>


                        <p className="text-sm text-gray-300">
                            #{match.match_id}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-gray-500">
                            Початок матчу
                        </p>

                        <p className="text-sm text-gray-300">
                            <p className="text-sm text-gray-300">
                                {new Date(match.start_time * 1000).toLocaleString("uk-UA", {
                                    day: "2-digit",
                                    month: "2-digit",
                                    year: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}
                            </p>
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-gray-500">
                            Duration
                        </p>

                        <p className="text-sm text-gray-300">
                            {Math.floor(match.duration / 60)} min
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProMatchCard;