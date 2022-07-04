import AnimeCard from "../component/AnimeCard";
import SearchBar from "../component/SearchBar";

const Browse = () => {
    return (
        <div className="w-full h-screen bg-zinc-200">
            <div className="m-auto flex flex-col justify-center xl:mx-36">
                <div className="flex-[1] self-center m-10">
                    <SearchBar />
                </div>
                <div className="m-8 grid gap-2 grid-cols-2 md:grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))]">
                    <AnimeCard />
                    <AnimeCard />
                    <AnimeCard />
                    <AnimeCard />
                    <AnimeCard />
                    <AnimeCard />
                </div>
            </div>
        </div>
    );
}

export default Browse;