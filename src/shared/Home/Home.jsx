import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { FaCircle } from "react-icons/fa";

function Home() {

  return (
    <>
      <section>
        <section>
          <div className="max-w-screen-xl mx-auto w-full px-5 2xl:px-0 py-5">
            <div className="xl:flex    gap-8 ">
              <div className="max-w-full w-full ">
                <h1 className="text-primary-blue-color-blue-color md:text-3xl text-xl  font-bold ">
                  Welcome to AJARCSE
                </h1>
                <h1 className="text-justify py-5 md:mt-3 md:text-base text-sm">
                  <strong className="text-primary-blue-color-blue-color">
                    The American Journal of Advanced Research in Computer Science & Engineering   (AJARCSE)
                  </strong>{" "}
                  is a premier platform for researchers, academicians, and industry experts to
                  share their innovative findings and knowledge in the fields of computer science
                  and engineering. The journal focuses on fostering advancements in cutting-edge technologies,
                  methodologies, and management sciences that drive progress in the digital era.
                </h1>

                <h1 className="bg-slate-300 h-[1px] w-full"></h1>
                <h1 className="bg-primary-blue-color text-white p-2 shadow mt-5 font-semibold py-2">
                  The Journal covers following areas :
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3   py-5">
                  {[
                    "Artificial Intelligence", "Machine Learning", "Natural Language Processing",
                    "Quantum Computing", "Blockchain Technology", "Cybersecurity", "Big Data Analytics",
                    "Cloud Computing", "Edge Computing", "IoT Security", "Robotics", "Computer Vision",
                    "Augmented Reality", "Virtual Reality", "Neural Networks", "Deep Learning", "Embedded Systems",
                    "Human-Computer Interaction", "Software Development", "High-Performance Computing", "Evolutionary Algorithms",
                    "Distributed Systems", "Parallel Computing", "Mobile Computing", "5G Technologies", "Wearable Devices", "Cryptography",
                    "Digital Signal Processing", "Open-Source Software", "Game Development", "Social Network Privacy", "Bioinformatics",
                     "Virtualization", "Green Computing", "Digital Twin", "Smart Cities", "E-Learning", "Computer-Aided Design", "Cognitive Computing",
                    "Speech Recognition", "Traffic Management", "Software Testing", "Semantic Web", "Database Optimization", "Ethical AI",
                    "Quantum Cryptography", "Compiler Design", "Digital Forensics", "Serverless Computing", "Business Intelligence",
                    "Drug Discovery", "Computational Fluid Dynamics", "Energy Informatics", "Advanced Algorithms", "Real-Time Systems",
                    "Remote Sensing", "AI in Healthcare", "Self-Healing Software", "Multi-Agent Systems", "Predictive Analytics", "Hybrid Cloud",
                    "Knowledge Graphs", "Advanced Encryption", "Explainable AI", "Heterogeneous Computing", "Smart Contracts", "Bio-Inspired Computing",
                    "App Development", "Recommender Systems", "Fault-Tolerant Systems", "Assistive Technologies", "Virtualization in Data Centers",
                    "Image Enhancement", "Algorithmic Trading", "Environmental Monitoring",
                  ].map((topics, index) => (
                    <div key={index} className="flex items-center gap-2 mb-1">
                      < FaCircle size={7} className="text-primary-blue-color" />
                      <h1>{topics}</h1>
                    </div>
                  ))}
                 
                </div>
              </div>

              <Sidebar />

            </div>
          </div>

          <h1 className="bg-slate-300 h-[1px] w-full mt-5"></h1>
          {/* </div> */}
        </section>

        <section>
          <div className="max-w-screen-xl mx-auto w-full lg:px-0 px-5 py-5">
            <h1 className="mt-3 text-center">
              We publish original research articles, review articles and
              technical notes. The journal reviews papers within two weeks of
              submission and publishes accepted articles on the internet
              immediately upon receiving the final versions.Our fast reviewing
              process is our strength.
            </h1>

            <h1 className="text-center mt-2">
              Launch of Next Issue: 28<sup>th</sup>  Oct 2025
            </h1>
            <h1 className="text-center mt-2 bg-primary-dark-blue p-2 font-semibold">
              Last Date for Submission of Manuscript for next Issue: 22<sup>nd</sup> Oct
              2025
            </h1>

            <h1 className="text-center mt-2">With Warm Regards,</h1>
            <h1 className="text-center font-semibold mt-2">Editor-in-chief</h1>
            <h1 className="text-center font-semibold mt-1">AJARCSE</h1>
          </div>
        </section>
      </section>
    </>
  );
}

export default Home;
