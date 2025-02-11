import React from "react";;
import Sidebar from "../Sidebar/Sidebar";
function EditorialBoard() {
  return (
    <>
        <section className="max-w-screen-xl mx-auto w-full px-5 2xl:px-0 ">
          <div className="lg:flex md:flex  gap-8 ">
            <div className="max-w-full w-full flex justify-center items-center">
              <p className=" md:text-xl text-sm ">will be updated soon .........</p>
            </div>
            <Sidebar />
          </div>
          <h1 className="bg-slate-300 h-[1px] w-full mt-5"></h1>
        </section>
    </>
  );
}
export default EditorialBoard;
