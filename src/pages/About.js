import mountainPhoto from '../assets/mountainArt.webp'
import homePhoto from '../assets/homeArt.webp'

const About = () => {
    return (
        <div className="bg-zinc-200 min-h-screen flex flex-col justify-evenly items-center ">
            <div className="flex flex-row items-center">
                <img src={homePhoto} alt="" className='w-48 lg:w-96'/>
                <div className='ml-3'>
                    <h2 className='text-3xl font-medium'>ANIME</h2>
                    <p className='text-sm lg:text-base max-w-md'>Anime Archive helps you to search many details about any anime you like. Many trending, popular and favorite anime are available in this site, just search your best anime and see any details</p>
                </div>
            </div>
            <div className="flex flex-row items-center">
                <div>
                <h2 className='text-3xl font-medium'>COLLECTION</h2>
                <p className='text-sm lg:text-base max-w-md'>Filter you best anime in one page. Helps you to store many anime in one single page. Keep it easy and trace any update about your anime.</p>
                </div>
                <img src={mountainPhoto} alt="" className='w-48 lg:w-96'/>
            </div>
        </div>
    );
}

export default About;