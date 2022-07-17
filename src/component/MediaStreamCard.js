const MediaStreamCard = ({ data }) => {
    return (
        <div className="flex flex-col  mb-3">
                <a href={data.url}>
            <img src={data.thumbnail} alt="" className="h-64"/>
            <div className="relative mt-[-20px] text-sm  bg-transparent text-white self-end">
                {data.title}
            </div>
            </a>                     
        </div>
    );
}

export default MediaStreamCard;