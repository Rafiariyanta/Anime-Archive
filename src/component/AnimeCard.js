import bgImg from '../assets/animeChars.jpg'

const AnimeCard = () => {
    return (
            <div className="block">
                    <img src={bgImg} alt="" className='w-44 h-64 object-cover' />
                <div className='font-semibold text-gray-600'>
                    <p>One piece</p>
                </div>
            </div>
    );
}

export default AnimeCard;