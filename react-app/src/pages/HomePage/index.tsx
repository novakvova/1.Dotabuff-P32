import {useGetNewsQuery} from "../../entityes/news/api/newsApi.ts";
import Loading from "../../widgets/Loading";
import Error from "../../widgets/Error";
import LeftPanel from "../../entityes/news/ui/LeftPanel.tsx";

const HomePage= () => {
    const {data, isError, isLoading} = useGetNewsQuery();

    console.log(data);

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
          <div className={"flex gap-6 px-6 py-6"}>
              <LeftPanel/>

              <main className="w-full">
                  <h1 className="mb-2 border-b-4 border-[#37474f] pb-4 text-3xl font-bold text-white">
                      Новини Dota 2
                  </h1>

              </main>
          </div>
      </>
  );
};

export default HomePage;