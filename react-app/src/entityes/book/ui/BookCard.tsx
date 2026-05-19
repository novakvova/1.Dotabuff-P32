import type { IBook } from '../model/IBook'
import {BookText} from "./BookText.tsx";

type Props = {
    book: IBook
}

export const BookCard = ({ book }: Props) => {

    return (
        <div className="border rounded-xl p-4 transition duration-200">
            <h2 className="text-xl font-bold">
                {book.title}
            </h2>

            <p className="text-gray-500">
                {book.author}
            </p>

            <BookText text={book.text}/>
        </div>
    )
}