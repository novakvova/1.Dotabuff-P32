import {useGetBooksQuery} from "../api/bookApi.ts";
import {BookCard} from "./BookCard.tsx";

export const BookList = () => {
    const { data, isLoading, isError } = useGetBooksQuery();

    if (isLoading) {
        return <div className={"text-center"}>Loading...</div>;
    }

    if (isError) {
        return <div className={"text-center"}>Error...</div>;
    }

    return (
        <div className="space-y-4">
            {data?.map(book => (
                <div
                    key={book.id}
                >
                    <BookCard book={book}/>
                </div>
            ))}
        </div>
    );
};