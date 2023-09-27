const Banner = () => {
    return (
        <div className="hero h-[70vh] w-full" style={{ backgroundImage: 'url(https://i.ibb.co/McW7hhY/volunteers.jpg)' }}>
            <div className="hero-overlay bg-white bg-opacity-90"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-2xl font-bold text-black">I Grow By Helping People In Need</h1>
                    <input className="px-1 md:px-3 py-2 border text-black" type="text" name="search" placeholder="Search here" id="" />
                    <button className="px-1 md:px-3 py-2 bg-[#FF444A] rounded-lg">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;