const CharacterCard = ({ data }) => {
    return ( 
        <div className="border border-black flex flex-row rounded-3xl mb-2">
            <div className="">
                <img src={data.node.image.medium} alt="" className="h-20 rounded-l-3xl"/>
            </div>
            <div className="m-3">
                <h2 className="font-semibold">{data.node.name.full}</h2>
                <p className="text-xs text-gray-500">{data.role}</p>
            </div>
        </div>
     );
}
 
export default CharacterCard;