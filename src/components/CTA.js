import logoWhite from "./../files/logo-white.svg"
import facebook from "./../files/icon-facebook.svg"
import twitter from "./../files/icon-twitter.svg"
import insta from "./../files/icon-instagram.svg"
import pin from "./../files/icon-pinterest.svg"
import youtube from "./../files/icon-youtube.svg"

function CTA(){
    return(
        <section className=" bg-veryDarkBlue">
            {/* --flex xontaioner-- */}
            <div className=" container flex flex-col-reverse justify-between px-6 
             py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
                {/* --logo and scocial contaioner -- */}
                <div className=" flex flex-col-reverse items-center justify-between 
                 space-y-12 md:space-y-0 md:items-start">
                    <div className=" mx-auto my-6 text-center text-white md:hidden">
                    copyright &copy; 2023, All right reversed
                    </div>

                    {/* --logo-- */}
                    <div className=" mt-8">
                        <img src={logoWhite} className=" h-8" alt=""/>
                    </div>
                    {/* --social links list-- */}
                    <div className=" flex justify-center space-x-4">
                        {/* --link 1-- */}
                        <a href="#">
                            <img src={facebook} className=" h-8" alt=""/>
                        </a>
                        {/* --link 2-- */}
                        <a href="#">
                            <img src={insta} className=" h-8" alt=""/>
                        </a>
                        {/* --link 3-- */}
                        <a href="#">
                            <img src={twitter} className=" h-8" alt=""/>
                        </a>
                        {/* --link 4-- */}
                        <a href="#">
                            <img src={youtube} className=" h-8" alt=""/>
                        </a>
                        {/* --link 5-- */}
                        <a href="#">
                            <img src={pin} className=" h-8" alt=""/>
                        </a>
                    </div>
                 </div>

                 {/*--list containor--  */}
                 <div className=" flex justify-around space-x-32 mx-5">
                    <div className=" flex flex-col space-y-3 text-white">
                        <a href="#" className=" hover:text-brightRed">Home</a>
                        <a href="#" className=" hover:text-brightRed">Procing</a>
                        <a href="#" className=" hover:text-brightRed">Product</a>
                        <a href="#" className=" hover:text-brightRed">About</a>
                    </div>
                    <div className=" flex flex-col space-y-3 text-white">
                        <a href="#" className=" hover:text-brightRed">Career</a>
                        <a href="#" className=" hover:text-brightRed">Community</a>
                        <a href="#" className=" hover:text-brightRed">Privacy Policy</a>
                    </div>
                 </div>

                 {/* -- user--*/}
                 <div className=" flex flex-col justify-between">
                    <form>
                        <div className=" flex space-x-3">
                            <input type="text" placeholder="Updated in your inbox" 
                            className=" flex-1 px-4 rounded-full focus:outline-none" />
                            <button className=" px-6 py-2 text-white rounded-full bg-brightRed
                              hover:bg-brightRedLight
                             focus:outline-none ">Go</button>
                        </div>
                    </form>

                    <div className=" hidden text-white md:block">
                        copyright &copy; 2023, All right reversed
                    </div>
                 </div>
            </div>
        </section>
    );
}

export default CTA;