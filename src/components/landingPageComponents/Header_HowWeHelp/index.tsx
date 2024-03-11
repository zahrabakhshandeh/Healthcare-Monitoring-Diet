import BlueWave from "/public/svg/how_we_help.svg"

const HeaderSection = () => {
    return(
        <section className = "flex  justify-center items-center w-fit ">
            <div className="relative flex justify-center items-center z-0">
                <BlueWave />
            </div>
            <h2 className="text-white text-6xl absolute z-10">
                ما چطوری به شما کمک می‌کنیم؟ 
            </h2>
        </section>
    )
};
export default HeaderSection;