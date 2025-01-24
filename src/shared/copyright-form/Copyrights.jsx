import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar';

function Copyrights() {

    return (
        <>
            <section >
                <div className="max-w-screen-xl mx-auto w-full px-5 2xl:px-0 py-5 min-h-[80vh]">
                    <div className="lg:flex md:flex  gap-8 ">
                        <div className="max-w-full w-full  md:text-base text-sm">
                            <h1 className="text-primary-blue-color md:text-3xl text-xl font-bold ">Copyright Form</h1>
                            <h1 className="lg:text-xl text-lg font-semibold mb-2 md:mt-8 mt-4">DECLARATION</h1>
                            <p className="md:w-[450px] leading-relaxed  " > I/We
                                ____________________________.  The author / authors of the research paper/article
                                entitled ______________________
                                authorize you to publish the above mentioned paper/article in AJARCSE.</p>
                            <h1 className=" lg:text-xl font-semibold mt-8 mb-2">It is herein agreed that:</h1>
                            <h1 className=" text-justify mb-2">
                                1. I/We will not publish his/her above said contribution anywhere else
                                without the prior written permission of the publisher unless it has
                                been changed substantially.</h1>
                            <h1 className=" text-justify mb-2"></h1>
                            <h1 className=" text-justify mb-2">2. I/ We declare and warrants that his/her/their contribution is original,
                                except for such excerpts from copyrighted works as may be included
                                with the permission of the copyright holder and author thereof, that
                                it contains no libelous statements, and does not infringe on any
                                copyright, trademark, patent, statutory right, or propriety right of
                                others. The Author signs for and accepts responsibility for releasing
                                this material on behalf of any and all co-authors.</h1>
                            <h1 className=" text-justify mb-2">3. The Author also warrants that he or she has the right to enter into
                                this Agreement, the Article contains no libelous or unlawful
                                statements, contains no instructions that may cause harm or injury and
                                does not violate the copyright or trademark, or infringes on the rights
                                or the privacy of others; and that all statements in the Article
                                asserted as facts are either true or are based upon reasonable research.</h1>
                            <h1 className=" text-justify mb-2">4. I/We agree to indemnify the Editors AJARCSE against all claims
                                and expenses arising from any breach of warranty from me/us in this
                                agreement.</h1>

                            <div className="flex justify-between items-center mt-5">
                                <div>
                                    <h1>Date:</h1>
                                    <h1>Mobile:</h1>
                                </div>
                                <div className="text-center">
                                    <h1>Author's Signature</h1>
                                    <h1>Author Name(s): </h1>
                                    <h1>Address</h1>
                                </div>
                            </div>



















                        </div>

                        <Sidebar />

                    </div>

                    <h1 className="bg-slate-300 h-[1px] w-full mt-5"></h1>
                </div>

            </section>


        </>
    )
}

export default Copyrights