import { useContext } from "react";
import { CollectionContext } from "../hooks/context/CollectionContext";
import {useCollectionList} from '../hooks/useCollectionList'
import AnimeCard from "../component/AnimeCard";
import ClipLoader from "react-spinners/ClipLoader";


const Collection = () => {
    const { collection, dispatch } = useContext(CollectionContext);
    const { error, data, loading } = useCollectionList(1 , collection.length, collection)

    const handleClickX = (id) => {
        dispatch({ type: 'REMOVE_ANIME', id: id })
    }

    return (
        <div className="min-h-screen bg-zinc-200 p-3">
            <div className="mb-8">
                <h2 className="text-4xl font-bold">My Collection</h2>
            </div>
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
            { data &&
<div className="grid gap-2 grid-cols-2 mx-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {data &&
            data.Page.media.map(datas => (
                <div>
                    <div className="absolute cursor-pointer ml-3 mt-2 bg-black px-2" onClick={() => handleClickX(datas.id)}>
                    <p className="font-bold text-white text-xl">X</p>
                    </div>
                <AnimeCard imgLink={datas.coverImage.large} title={datas.title.romaji} id={datas.id}/>
                </div>
            ))
            }
            </div>
            }
            
        </div>
    );
}

export default Collection;