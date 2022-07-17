import { useNavigate, useParams } from "react-router-dom";
import { useAnimeDetail } from "../hooks/useAnimeDetail";
import ClipLoader from "react-spinners/ClipLoader";
import ReadMore from "../component/readMore";
import { useState } from "react";
import CharacterCard from "../component/CharacterCard";
import MediaStreamCard from "../component/MediaStreamCard";
import { useContext } from "react";
import { CollectionContext } from "../hooks/context/CollectionContext";
import {v4} from 'uuid'
import { useAuth } from "../hooks/context/auth";


const AnimeDetail = () => {
    const { id } = useParams();
    const { error, data, loading } = useAnimeDetail(id);
    const [selectState, setSelectState] = useState("overview");
    const { collection ,dispatch } = useContext(CollectionContext);

    const auth = useAuth();
    const navigate = useNavigate();

    const handleClick = () => {
        if(auth.user){
            dispatch({ type: 'ADD_ANIME', anime: { id: data.Media.id} })
        }else{
            navigate('/login')
        }
     
    }

    return (
        <div className="w-full h-full bg-zinc-200">
            {error &&
                <div className=" relative w-full h-[77.5vh] flex justify-center items-center">
                    There are some errors. Please wait developer to fix the problems.
                </div>
            }
            {loading &&
                <div className=" relative w-full h-[91.5vh] flex justify-center items-center">
                    <ClipLoader loading={loading} />
                </div>
            }
            {data &&
                <div className="w-full h-full flex flex-col">
                    <div>
                        <img src={data.Media.bannerImage} alt="" />
                    </div>
                    <div className="bg-white mx-5 mt-3 flex flex-row">
                        <div className="flex flex-col pt-3 pl-2">
                            <img src={data.Media.coverImage.large} alt="" className="object-cover w-full h-full" />
                            <button className="bg-black px-1 my-3 disabled:bg-gray-500 disabled:text-black" onClick={() => handleClick()} disabled={collection.includes(data.Media.id)}>{collection.includes(data.Media.id) ? "Added" : "Add to Collection"}</button>
                        </div>
                        <div>
                            <h2 className="ml-3 mt-5 font-bold text-3xl">{data.Media.title.romaji}</h2>
                            <ReadMore limit={200}>
                                {data.Media.description}
                            </ReadMore>
                        </div>
                    </div>
                    <div className="bg-white mt-4 flex flex-col mx-5 mb-3">
                        <div className="flex flex-row justify-around border border-sky-700 font-semibold">
                            <div className="border border-sky-900 flex-[1] cursor-pointer" onClick={() => setSelectState("overview")}>
                                <h2 className="text-center">Overview</h2>
                            </div>
                            <div className="border border-sky-900 flex-[1] cursor-pointer" onClick={() => setSelectState("character")}>
                                <h2 className="text-center">Character</h2>
                            </div>
                            <div className="border border-sky-900 flex-[1] cursor-pointer" onClick={() => setSelectState("watch")}>
                                <h2 className="text-center">Watch</h2>
                            </div>
                        </div>
                        <div className="">
                            {selectState === "overview" &&
                                <div className="grid gap-2 grid-cols-[repeat(3,_1fr)] [grid-auto-rows:_minmax(100px,_auto)] [grid-template-areas:'startDate_endDate_status'_'genre_genre_genre'_'studios_studios_studios'] mt-3">
                                    <div className="[grid-area:startDate]  text-center border-b-2 border-black">
                                        <h2 className="font-medium">Start Date</h2>
                                        <p>{data.Media.startDate.day}-{data.Media.startDate.month}-{data.Media.startDate.year}</p>
                                    </div>
                                    <div className="[grid-area:endDate] text-center border-b-2 border-black">
                                        <h2 className="font-medium">End Date</h2>
                                        { data.Media.endDate.day!==null ?
                                        <p>{data.Media.endDate.day}-{data.Media.endDate.month}-{data.Media.endDate.year}</p>

                                        :

                                        <p>-</p>
                                        }
                                    </div>
                                    <div className="[grid-area:status] text-center border-b-2 border-black">
                                        <h2 className="font-medium">Status</h2>
                                        <p>{data.Media.status}</p>
                                    </div>
                                    <div className="[grid-area:studios] pl-3 border-b-2 border-black">
                                        <h2 className="font-medium text-xl mb-2">Studio</h2>
                                        {data.Media.studios.edges.map(studio => (
                                            <p className="ml-3" key={studio.node.id}>- {studio.node.name}</p>
                                        ))
                                        }
                                    </div>
                                    <div className="[grid-area:genre] pl-3 border-b-2 border-black pb-3">
                                        <h2 className="font-medium text-xl mb-2">Genre</h2>
                                        {data.Media.genres.map(genre => (
                                            <p className="ml-3" key={v4()}>- {genre}</p>
                                        ))

                                        }
                                    </div>
                                </div>
                            }
                            {selectState === "character" &&
                                <div className="mt-5 mx-4">
                                    {data.Media.characters.edges.map(char => (
                                        <CharacterCard data={char}/>
                                    ))

                                    }
                                </div>
                            }
                            {selectState === "watch" &&
                            <div className="mt-5 mx-4 md:grid md:gap-2 md:grid-cols-[repeat(auto-fit,_minmax(20rem,0.5fr))]">
                                {data.Media.streamingEpisodes.length !== 0 ?
                                
                                data.Media.streamingEpisodes.map(vid => (
                                    <MediaStreamCard data={vid}/>
                                ))

                                :

                                <div className="h-[50vh] text-center font-bold">
                                    Sorry, there are no videos for this anime.
                                </div>
                                }
                            </div>
                            }
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default AnimeDetail;