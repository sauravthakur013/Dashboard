

function Features(){
    return(
        <section>
            <div className=" container flex flex-col px-4 mx-auto mt-10
             space-y-12 md:space-y-0 md:flex-row ">
                {/* --whats new diff */}
                <div className=" flex flex-col  items-center md:items-start space-y-12 md:w-1/2 ">
                    <h2 className=" max-w-md text-4xl font-bold text-center md:text-left">
                        What's different about Manage...?
                    </h2>
                    <p className=" max-w-sm text-center text-darkGrayishBlue
                     md:text-left">
                        Manage provides all the functionally your team need, without me
                        complexity. Our software is tailor-made for modern digital products teams.
                    </p>
                </div>
                {/* -- number list-- */}
                <div className=" flex flex-col space-y-8 md:w-1/2">
                    {/* --list 1-- */}
                    <div className="flex flex-col space-y-3 md:space-y-0
                     md:space-x-6 md:flex-row">
                        
                        {/* --heading-- */}
                        
                        <div className=" rounded-l-full bg-brightRedSupLight md:bg-transparent">
                            <div className="flex items-center space-x-2">
                                <div className=" px-4 py-2 text-white rounded-full md:py-1
                                 bg-brightRed">01</div>
                                <h3 className=" text-base font-bold md:mb-4 md:hidden">
                                    Track company wide progress
                                </h3>
                            </div>

                        </div>

                        <div>
                            <h3 className="hidden mb-4 text-lg font-bold md:block">
                            Track company wide progress
                            </h3>
                            <p className=" text-darkGrayishBlue">
                            Having a vehicle for your personal use is an integral part of modern life. While many people prefer to own a
                            </p>
                        </div>


                    </div>

                    {/* --list 2-- */}
                    <div className="flex flex-col space-y-3 md:space-y-0
                     md:space-x-6 md:flex-row">
                        
                        {/* --heading-- */}
                        
                        <div className=" rounded-l-full bg-brightRedSupLight md:bg-transparent">
                            <div className="flex items-center space-x-2">
                                <div className=" px-4 py-2 text-white rounded-full md:py-1
                                 bg-brightRed">02</div>
                                <h3 className=" text-base font-bold md:mb-4 md:hidden">
                                    progress in report 
                                </h3>
                            </div>

                        </div>

                        <div>
                            <h3 className="hidden mb-4 text-lg font-bold md:block">
                            Track company wide progress
                            </h3>
                            <p className=" text-darkGrayishBlue">
                            Having a vehicle for your personal use is an integral part of modern life. While many people prefer to own a bike for practicality and economic value, owning a car is a much better 
                            </p>
                        </div>


                    </div>

                    {/* --list 3-- */}
                    <div className="flex flex-col space-y-3 md:space-y-0
                     md:space-x-6 md:flex-row">
                        
                        {/* --heading-- */}
                        
                        <div className=" rounded-l-full bg-brightRedSupLight md:bg-transparent">
                            <div className="flex items-center space-x-2">
                                <div className=" px-4 py-2 text-white rounded-full md:py-1
                                 bg-brightRed">03</div>
                                <h3 className=" text-base font-bold md:mb-4 md:hidden">
                                    Track company wide before christ
                                </h3>
                            </div>

                        </div>

                        <div>
                            <h3 className="hidden mb-4 text-lg font-bold md:block">
                            Track company wide progress
                            </h3>
                            <p className=" text-darkGrayishBlue">
                            Having a vehicle for your personal use is an integral part of modern life. While many people prefer to own a bike for practicality and economic value, owning a car is a much better option for most couples and families. One of the biggest benefits of 
                            </p>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;