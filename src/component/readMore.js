import { useState } from "react";

const ReadMore = ({ limit, children }) => {
    const text = children;

    const [show, setShow] = useState(false);

    const handleToggle = () => {
        setShow(!show)
    }

    return ( 
        <div className="p-4 rounded-2xl max-h-48  overflow-y-auto xl:max-w-screen-2xl xl:max-h-full">
            {show ? text : text.substr(0, limit)}
            <button onClick={handleToggle} className="bg-transparent font-medium text-purple-400 cursor-pointer">
                {show ? 'Read Less' : '...Read More'}
            </button>
        </div>
     );
}
 
export default ReadMore;