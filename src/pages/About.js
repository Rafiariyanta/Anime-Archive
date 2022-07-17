import mountainPhoto from '../assets/mountainArt.png'
import homePhoto from '../assets/homeArt.png'

const About = () => {
    return (
        <div className="bg-zinc-200 min-h-screen flex flex-col justify-evenly items-center ">
            <div className="flex flex-row items-center">
                <img src={homePhoto} alt="" className='w-48 lg:w-96'/>
                <div className='ml-3'>
                    <h2 className='text-3xl'>ANIME</h2>
                    <p className='text-sm lg:text-base max-w-md'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis dignissimos voluptatum maiores. Vitae, voluptatum autem? Quae, unde aliquid eveniet provident dolores non porro quasi laboriosam iusto deleniti, magni doloribus iure?</p>
                </div>
            </div>
            <div className="flex flex-row items-center">
                <div>
                <h2 className='text-3xl'>EXPLORE</h2>
                <p className='text-sm lg:text-base max-w-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt neque ut voluptatibus, soluta mollitia earum placeat saepe exercitationem, minima nulla molestias ab! Nesciunt alias cupiditate molestias, unde minus eveniet possimus?</p>
                </div>
                <img src={mountainPhoto} alt="" className='w-48 lg:w-96'/>
            </div>
        </div>
    );
}

export default About;