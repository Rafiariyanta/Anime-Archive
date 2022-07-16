import AnimeCard from "../component/AnimeCard";

const BrowseInit = ({data}) => {
    console.log(data);
    return (
        <div>
            <div className="font-semibold text-lg ml-4 xl:ml-0"><h2>Trending Now</h2></div>
            <div className="m-8 grid gap-2 grid-cols-[repeat(auto-fit,_minmax(140px,_0.5fr))] md:grid-cols-[repeat(auto-fit,_minmax(140px,_1fr))]">
                {data.anime_trending.media.map(datas => (
                    <AnimeCard key={datas.id} imgLink={datas.coverImage.large} title={datas.title.romaji} id={datas.id}/>
                ))
                }
            </div>
            <div className="font-semibold text-lg ml-4 xl:ml-0"><h2>Popular All The Time</h2></div>
            <div className="m-8 grid gap-2 grid-cols-[repeat(auto-fit,_minmax(140px,_0.5fr))] md:grid-cols-[repeat(auto-fit,_minmax(140px,_1fr))]">
            {data.anime_popular.media.map(datas => (
                    <AnimeCard key={datas.id} imgLink={datas.coverImage.large} title={datas.title.romaji} id={datas.id}/>
                ))
                }
            </div>
            <div className="font-semibold text-lg ml-4 xl:ml-0"><h2>Favorite</h2></div>
            <div className="m-8 grid gap-2 grid-cols-[repeat(auto-fit,_minmax(140px,_0.5fr))] md:grid-cols-[repeat(auto-fit,_minmax(140px,_1fr))]">
            {data.favorite.media.map(datas => (
                    <AnimeCard key={datas.id} imgLink={datas.coverImage.large} title={datas.title.romaji} id={datas.id}/>
                ))
                }
            </div>
        </div>
    );
}

export default BrowseInit;