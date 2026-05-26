import {useGetNewsQuery} from "../api/newsApi.ts";
import Loading from "../../../widgets/Loading";
import Error from "../../../widgets/Error";
import NewsCard from "./NewsCard.tsx";

const NewsDetails = () => {
    const {data, isError, isLoading} = useGetNewsQuery();
    const sortedNews = [...(data ?? [])].sort(
        (a, b) =>
            new Date(b.createdAt).getTime() -
            new Date(a.createdAt).getTime()
    );

    if (isLoading) {
        return (
            <>
                <Loading/>
            </>
        );
    }

    if (isError) {
        return (
            <>
                <Error message={"Помилка: Не вдалося завантажити дані з API. Перевірте підключення до інтернету."}/>
            </>
        );
    }

    return (
        <>
            <div className="grid grid-cols-1 gap-4 2xl:grid-cols-2">
                {sortedNews?.map((news) => (
                    <div className={"mb-4"}
                         key={news.id}>
                        <NewsCard
                            news={news}
                        />
                    </div>
                ))}
            </div>
        </>
    );
}

export default NewsDetails;