import BrowseInit from "../component/BrowseInit";
import SearchBar from "../component/SearchBar";
import { useAnimeSort } from "../hooks/useAnimeSort";
import ClipLoader from "react-spinners/ClipLoader";


const Browse = () => {
    const { error, data, loading } = useAnimeSort();
    return (
        <div className="w-full h-full bg-zinc-200">
            <div className="m-auto flex flex-col justify-center xl:mx-36">
                <div className="flex-[1] self-center m-10">
                    <SearchBar />
                </div>
                {loading &&
                <div className=" relative w-full h-[77.5vh] flex justify-center items-center">
                <ClipLoader loading={loading}/>
                </div>
                }
                {data &&
                    <BrowseInit data={data}/>
                }
            </div>
        </div>
    );
}

export default Browse;