import bgImg from '../assets/animeChars.png'

const Home = () => {
    return ( 
        <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between mt-[-80px]">
            <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
                <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
                    <p className="text-xl">EXPLORE ANIME WORLD WITH US.</p>
                    <h2 className="text-4xl font-bold">ANIME WORLD ARCHIVE</h2>
                    <p>Dive into anime world.</p>
                    <button className="py-2 px-5 w-[50%]">BROWSE</button>
                </div>
                <div>
                    <img src={bgImg} alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default Home;