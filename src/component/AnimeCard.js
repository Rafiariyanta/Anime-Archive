import { Link } from 'react-router-dom'

const AnimeCard = ({ imgLink, title, id }) => {
    return (
        <div className="block">
            <Link to={`/anime/${id}`}>

                <img src={imgLink} alt="" className='w-full h-64 object-cover rounded-md' />
            </Link>
            <div className='font-semibold text-gray-600'>
                <p className='mt-1'>{title}</p>
            </div>
        </div>
    );
}

export default AnimeCard;