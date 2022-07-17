import AnimeCard from "./AnimeCard";

const AnimeList = ({ data }) => {
    return ( 
        <div className="grid gap-2 grid-cols-2 mx-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {data &&
            data.anime_popular.media.map(datas => (
                <AnimeCard imgLink={datas.coverImage.large} title={datas.title.romaji} id={datas.id}/>
            ))

            
            }
        </div>
     );
}
 
export default AnimeList;