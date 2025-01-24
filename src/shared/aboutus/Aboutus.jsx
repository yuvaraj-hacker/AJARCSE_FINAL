import React from 'react'
import Sidebar from '../Sidebar/Sidebar';

function Aboutus() {
  return (
    <>


      <section >
        <div className="max-w-screen-xl mx-auto w-full px-5 2xl:px-0 py-5">
          <div className="lg:flex md:flex  gap-8 ">
            <div className="max-w-full w-full ">
              <h1 className="text-primary-blue-color md:text-3xl text-xl font-bold ">About Us</h1>
              <h1 className="  mb-2  md:md:mt-8 mt-4    text-justify leading-relaxed  md:text-base text-sm">The American Journal of Advanced Research in Computer Science & Engineering  (AJARCSE) is a scholarly peer-reviewed journal dedicated to advancing the understanding and application of information technology and management science in today's digital age.</h1>
              <h1 className="font-semibold  lg:text-xl md:md:mt-8 mt-4 mb-2">Scope</h1>
              <h1 className="  text-justify leading-relaxed mb-3 md:text-base text-sm ">The scope of the AJARCSE is to provide an academic medium and an important
                reference for the advancement and dissemination of research results that support high-level learning,
                teaching and research in the fields of engineering, science and technology. Original theoretical work
                and application-based studies, which contributes to a better understanding of engineering, science and
                technological challenges, are encouraged.</h1>
              <h1 className=" lg:text-xl font-semibold md:mt-8 mt-4 mb-2">Mission</h1>
              <h1 className="  text-justify leading-relaxed mb-3 md:text-base text-sm">Our mission is to provide a platform for researchers, academicians, professionals, and students to publish innovative research in the fields of information technology (IT) and management science. By fostering rigorous inquiry and dialogue, we aim to contribute to the body of knowledge that informs both theory and practice in these critical areas.</h1>

              <h1 className=" lg:text-xl font-semibold md:mt-8 mt-4 mb-2">Scope</h1>
              <ul className="list-disc gap-2  ml-5 mb-3 md:text-base text-sm">
                <li>Artificial Intelligence</li>
                <li>Machine Learning</li>
                <li>Natural Language Processing</li>
                <li>Quantum Computing</li>
                <li>Blockchain Technology</li>
                <li>Cybersecurity</li>

              </ul>
              <h1 className="font-semibold  lg:text-xl md:mt-8 mt-4 mb-2">Publication Ethics</h1>
              <h1 className="  text-justify leading-relaxed mb-3 md:text-base text-sm">We adhere strictly to the highest ethical standards in publishing and strive for transparency, integrity, and fairness in our peer-review process. Authors can expect a constructive review process that maintains confidentiality and upholds academic rigor.</h1>

              <h1 className="font-semibold  lg:text-xl md:mt-8 mt-4 mb-2">Audience</h1>
              <h1 className="  text-justify leading-relaxed mb-3 md:text-base text-sm">Our audience includes researchers, educators, practitioners, and policymakers interested in the latest advancements and applications in IT and management science. We encourage interdisciplinary research that bridges the gap between theory and practice.</h1>
              <h1 className="font-semibold  lg:text-xl md:mt-8 mt-4 mb-2">Submission Guidelines</h1>
              <h1 className="  text-justify leading-relaxed md:text-base text-sm ">Authors are invited to submit original manuscripts that have not been published previously and are not under consideration elsewhere. Detailed submission guidelines can be found on our website to ensure clarity and consistency in the submission process.
              </h1>











            </div>
            {/* <div className="max-w-xs w-full border-l border-slate-300 pl-5">
                <h1 className="bg-primary-blue-color text-white p-2 shadow">Important Links</h1>
                <Link to="/"><h1 role="button" className="p-2 pl-0 border-b border-slate-300 text-sm font-semibold" >Home</h1></Link>
                <Link to="/aim-nd-scope"><h1 role="button" className="p-2 pl-0 border-b border-slate-300 text-sm font-semibold">Aim & Scope</h1></Link>
                <Link to="/aboutus"><h1 role="button" className="p-2 pl-0 border-b border-slate-300 text-sm font-semibold"   >About Us</h1></Link>
                <Link to="/call-for-papers"><h1 role="button" className="p-2 pl-0 border-b border-slate-300 text-sm font-semibold"  >Call For Paper</h1></Link>
                
                {/* <h1 className="p-2 pl-0 border-b  border-slate-300 text-sm font-semibold"> <a href="https://AJARCSE.com/tmp/index.php/Overview/login">Submit New Manuscript</a></h1>  */}
            {/* <Link to="/issues"><h1 role="button" className="p-2 pl-0 border-b border-slate-300 text-sm font-semibold"  >Issues</h1></Link>
                <Link to="/author-guidelines"><h1 role="button" className="p-2 pl-0 border-b border-slate-300 text-sm font-semibold"  >Author Guidliness</h1></Link>
                <Link to="/pay-fees"><h1 role="button" className="p-2 pl-0 border-b border-slate-300 text-sm font-semibold"  >Pay fees</h1></Link>
                
                <Link to="/copyrights-form"><h1 role="button" className="p-2 pl-0 border-b border-slate-300 text-sm font-semibold"  >Copyright Form</h1></Link>
                <Link to="/editorial-board"><h1 role="button" className="p-2 pl-0 border-b border-slate-300 text-sm font-semibold" >Editorial Board</h1></Link>
                <Link to="/contactus"><h1 role="button" className="p-2 pl-0 border-b border-slate-300 text-sm font-semibold"  >Contact Us</h1></Link>

                
                     <Calendar className="sidebar-calendar"
                      tileClassName={tileClassName}
                     />
                     


                    </div> */}

            <Sidebar />

          </div>

          <h1 className="bg-slate-300 h-[1px] w-full mt-5"></h1>
        </div>

      </section>


    </>
  )
}

export default Aboutus