const Footer = () => {
    return (
        <>
            <footer className="bottom-fix border-t border-gray-800 bg-[#111] text-gray-400">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">

                    <div className="flex flex-col items-center sm:items-start">
            <span className="text-xl font-bold tracking-wide text-red-500">
                DOTABUFF
            </span>

                        <p className="mt-1 text-sm text-gray-500">
                            Dota 2 statistics, heroes and match analytics
                        </p>
                    </div>

                    <div className="text-sm text-gray-500">
                        © 2026 DOTABUFF Clone
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;