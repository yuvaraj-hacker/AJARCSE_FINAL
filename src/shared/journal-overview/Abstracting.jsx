import React from "react";
import Sidebar from "../Sidebar/Sidebar";
function Abstracting() {
  return (
    <>
      <section className=" ">
        <div className="max-w-screen-xl mx-auto w-full px-5 2xl:px-0  ">
          <div className="lg:flex md:flex  gap-8 ">
            <div className="max-w-full w-full leading-relaxed">
              <h1 className="text-primary-blue-color md:text-3xl text-xl font-bold ">
                Abstracting and Indexing
              </h1>
              <div className="md:space-y-4 space-y-2">
                <p className="md:mt-8 mt-4 md:text-base text-sm ">Selected  AJARCSE will be indexed in all major indexing services, including Web of Science, Scopus, EBSCO, ProQuest, CNKI, DBLP, Google Scholar, Microsoft Academic Search, OCLC Discovery Services, DOAJ, Elektronische Zeitschriftenbibliothek, CrossRef, and others soon.</p>
                <div className=" ">
                  <p className="md:text-lg font-semibold">Global Visibility</p>
                  <ul className="list-disc list-inside ">
                    <li className="text-gray-600 md:text-base text-sm">Indexed in major international databases</li>
                  </ul>
                </div>
                <div className=" ">
                  <p className="md:text-lg font-semibold">Full Coverage</p>
                  <ul className="list-disc list-inside ">
                    <li className="text-gray-600 md:text-base text-sm">Complete metadata and full-text indexing</li>
                  </ul>
                </div>
                <div className=" ">
                  <p className="md:text-lg font-semibold">Citation Tracking</p>
                  <ul className="list-disc list-inside ">
                    <li className="text-gray-600 md:text-base text-sm">Comprehensive impact monitoring</li>
                  </ul>
                </div>
                <div className=" ">
                  <p className="md:text-lg font-semibold">Enhanced Discoverability</p>
                  <ul className="list-disc list-inside ">
                    <li className="text-gray-600 md:text-base text-sm">Optimized for discovery in academic search engines and platforms, ensuring visibility across disciplines.</li>
                  </ul>
                </div>
                <div className=" ">
                  <p className="md:text-lg font-semibold">Open Access Reach</p>
                  <ul className="list-disc list-inside ">
                    <li className="text-gray-600 md:text-base text-sm">Availability in open-access directories like DOAJ, promoting unrestricted global access to research.</li>
                  </ul>
                </div>
              </div>
            </div>
            <Sidebar />
          </div>
          <h1 className="bg-slate-300 h-[1px] w-full mt-5"></h1>
        </div>
      </section>
    </>
  );
}
export default Abstracting;
