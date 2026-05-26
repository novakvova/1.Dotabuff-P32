import type {SortType} from "../model/SortType.ts";

type Props = {
    sortType: SortType;
    setSortType: (sortType: SortType) => void;
}

const LeftPanel = ({sortType, setSortType}: Props) => {
    return (
        <>
            <aside className="sticky top-6 h-fit w-64 shrink-0 rounded-lg border border-gray-700 bg-gray-900 p-4 shadow">
                <h3 className="mb-3 border-b border-gray-700 pb-2 text-sm font-bold dota-color">
                    Сортування
                </h3>

                <div className="flex flex-col gap-2">
                    <div>
                        <button className={`${sortType === "NEWEST" ? "dota-color" : "text-gray-400 border-gray-700 bg-gray-800 " }
                        rounded-md border w-full px-3 py-2 text-left text-xs transition-all duration-150 hover:cursor-pointer`}
                                onClick={() => setSortType("NEWEST")}
                        >
                            Нові матчі
                        </button>
                    </div>
                    <div>
                        <button className={`${sortType === "OLDEST" ? "dota-color" : "text-gray-400 border-gray-700 bg-gray-800 " }
                        rounded-md border w-full px-3 py-2 text-left text-xs transition-all duration-150 hover:cursor-pointer`}
                                onClick={() => setSortType("OLDEST")}
                        >
                            Старі матчі
                        </button>
                    </div>
                    <div>
                        <button className={`${sortType === "LONGEST" ? "dota-color" : "text-gray-400 border-gray-700 bg-gray-800 " }
                        rounded-md border w-full px-3 py-2 text-left text-xs transition-all duration-150 hover:cursor-pointer`}
                                onClick={() => setSortType("LONGEST")}
                        >
                            Найдовші матчі
                        </button>
                    </div>
                    <div>
                        <button className={`${sortType === "SHORTEST" ? "dota-color" : "text-gray-400 border-gray-700 bg-gray-800 " }
                        rounded-md border w-full px-3 py-2 text-left text-xs transition-all duration-150 hover:cursor-pointer`}
                                onClick={() => setSortType("SHORTEST")}
                        >
                            Найкоротші матчі
                        </button>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default LeftPanel;