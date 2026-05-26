import LeftPanel from "../../entityes/news/ui/LeftPanel.tsx";
import NewsDetails from "../../entityes/news/ui/NewsDetails.tsx";

const HomePage= () => {
  return (
      <>
          <div className={"flex gap-6 px-6 py-6"}>
              <LeftPanel/>

              <div className="w-full">
                  <h1 className="mb-2 border-b-4 border-[#37474f] pb-4 text-3xl font-bold text-white">
                      Новини Dota 2
                  </h1>
                <NewsDetails/>
              </div>
          </div>
      </>
  );
};

export default HomePage;