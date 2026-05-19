import { useState } from 'react'

type Props = {
    text: string
}

export const BookText = ({ text }: Props) => {
    const [expanded, setExpanded] = useState(false)

    return (
        <div>
            <p
                className={
                    expanded
                        ? ''
                        : 'line-clamp-2'
                }
            >
                {text}
            </p>

            <button
                onClick={() => setExpanded(!expanded)}
                className="mt-2 dark:text-blue-200 text-blue-400 font-bold w-full rounded-lg border border-gray-700 bg-gray-100 dark:border-gray-300 dark:bg-gray-600 hover:cursor-pointer"
            >
                {expanded
                    ? 'Згорнути'
                    : 'Читати далі'}
            </button>
        </div>
    )
}