import type {INews} from "../model/INews.ts";

type Props = {
    news: INews
}

const NewsCard = ({news}:Props) => {
    return (
        <>
            <div className="flex h-full flex-col rounded-xl border-2 border-gray-700 bg-gray-900 p-3 shadow transition duration-200 hover:bg-gray-800">
                <div className="overflow-hidden rounded-lg">
                    <img
                        src={news.imageUrl}
                        alt={news.title}
                        className="h-64 w-full object-cover"
                    />
                </div>

                <div className="mt-3">
                    <p className="text-xs text-gray-500">
                        {new Date(news.createdAt).toLocaleString("uk-UA", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                        })}
                    </p>

                    <h2 className="mt-2 line-clamp-2 text-xl font-bold text-white">
                        {news.title}
                    </h2>

                    <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-gray-400">
                        {news.content}
                    </p>
                </div>
            </div>
        </>
    )
}

export default NewsCard;