import {Link} from "react-router-dom";
function Header() {
    return (
        <header>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-900">
                <div className="flex flex-wrap items-center mx-auto max-w-screen-xl">

                    <div className="flex items-center">
                        <h1 className="self-center font-semibold whitespace-nowrap p-3 dark:text-white">
                            <Link to="/" className="hover:text-gray-200 flex items-center font-medium text-lg dark:text-white">
                                Java-React
                            </Link>
                        </h1>
                    </div>
                    <div className="mx-auto justify-between items-center w-full sm:flex sm:w-auto ">
                        <ul className="flex flex-col font-medium sm:flex-row sm:space-x-5 sm:mt-0">
                            <Link to="/" className="hover:text-gray-200 flex items-center font-medium dark:text-white">
                                Головна
                            </Link>
                            <Link to="books-page" className="hover:text-gray-200 flex items-center font-medium dark:text-white">
                                Книги
                            </Link>
                        </ul>
                    </div>
                    {/*<div className="flex items-center gap-4">*/}
                    {/*    <Link to="/login" className="px-6 py-2 rounded-lg font-semibold text-white*/}
                    {/*            bg-gradient-to-r from-gray-500 to-gray-600*/}
                    {/*            hover:from-gray-600 hover:to-white-700*/}
                    {/*            shadow-md transition-transform transform hover:scale-105">*/}
                    {/*        Увійти*/}
                    {/*    </Link>*/}
                    {/*    <Link to="/register" className="px-6 py-2 rounded-lg font-semibold text-white*/}
                    {/*            bg-gradient-to-r from-blue-500 to-indigo-600*/}
                    {/*            hover:from-blue-600 hover:to-indigo-700*/}
                    {/*            shadow-md transition-transform transform hover:scale-105">*/}
                    {/*        Зареєструватись*/}
                    {/*    </Link>*/}
                    {/*</div>*/}
                </div>
            </nav>
        </header>
    );
}

export default Header;