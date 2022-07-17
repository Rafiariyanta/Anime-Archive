import BrowseInit from "../component/BrowseInit";
import SearchBar from "../component/SearchBar";
import { useAnimeSort } from "../hooks/useAnimeSort";
import ClipLoader from "react-spinners/ClipLoader";
import { useState } from "react";
import AnimeList from "../component/AnimeList";
import { useEffect } from "react";


const Browse = () => {
    const [searchInput, setSearchInput] = useState("");
    const { getAnimeSort, error, data, loading } = useAnimeSort(searchInput);

    useEffect(() => {
        getAnimeSort();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setSearchInput(lowerCase);
        getAnimeSort();

    }

    return (
        <div className="w-full h-full bg-zinc-200">
            <div className="m-auto flex flex-col justify-center xl:mx-36">
                <div className="flex-[1] self-center m-10">
                    <SearchBar inputHandler={inputHandler}/>
                </div>
                {error &&
                    <div className=" relative w-full h-[77.5vh] flex justify-center items-center">
                        There are some errors. Please wait developer to fix the problems.
                    </div>
                }
                {loading &&
                <div className=" relative w-full h-[77.5vh] flex justify-center items-center">
                <ClipLoader loading={loading}/>
                </div>
                }
                { data && searchInput === ""  ? <BrowseInit data={data}/> : <AnimeList data={data}/>  }
            </div>
        </div>
    );
}

export default Browse;