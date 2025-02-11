import React from "react";
import Sidebar from "../Sidebar/Sidebar";
function ArticleProcess() {
  return (
    <>
      <section className="max-w-screen-xl mx-auto w-full px-5 2xl:px-0  ">
        <div className="lg:flex md:flex  gap-8 ">
          <div className="max-w-full w-full leading-relaxed">
            <h1 className="text-primary-blue-color md:text-3xl text-xl font-bold ">
              Article Processing
            </h1>
            <ul className='md:mt-8 mt-4 list-disc list-outside pl-5 md:text-base text-sm space-y-3'>
              <li>All articles in the American Journal of Advanced Research in Computer Science & Engineering (AJARCSE) journals are of Open Access (OA).</li>
              <li>Authors can copy, redistribute, remix, transform, and build upon the material since all the papers are published under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) license.</li>
              <li>Community standards, rather than copyright law, will continue to provide the mechanism for enforcement of proper attribution and responsible use of the published work.</li>
            </ul>
            <div className="lg:max-w-3xl max-w-xl w-full mx-auto  ">
            </div>
          </div>
          <Sidebar />
        </div>
        <h1 className="bg-slate-300 h-[1px] w-full mt-5"></h1>
      </section>
    </>
  );
}
export default ArticleProcess;
