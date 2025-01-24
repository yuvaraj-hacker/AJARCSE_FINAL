import { Link } from "react-router-dom";
import "./Contactus.css";
import Sidebar from "../Sidebar/Sidebar";

function Contactus() {
  return (
    <>
      <section>
        <div className="max-w-screen-xl mx-auto w-full px-5 2xl:px-0 py-5 min-h-[85vh]">
          <div className="lg:flex md:flex  gap-8 ">
            <div className="max-w-full w-full ">
              {/* <h1 className="text-primary-blue-color text-3xl font-bold ">Contact Us</h1>
                <div className="mt-8 flex items-center gap-2">
                    <h1 className="font-semibold">Mobile:</h1>
                    <h1>+91 0000 000 000</h1>
                </div> 
                <div className="mt-2 flex items-center gap-2">
                    <h1 className="font-semibold">Email:</h1>
                    <h1>editor@AJARCSE.com</h1>
                </div>*/}

              <div className="lg:max-w-3xl max-w-xl w-full mx-auto  ">
                <div className=" dark:bg-gray-900 lg:px-20 lg:py-10 px-5 py-5">
                  <div className="py-8 lg:py-5 px-4 mx-auto max-w-screen-md bg-white rounded-3xl    ">
                    <h2 className="mb-4 text-4xl  font-extrabold text-center text-gray-900 dark:text-white fnt">
                      Contact Us
                    </h2>

                    <form className="w-full space-y-4" ngNativeValidate>
                      <div>
                        <label
                          for="email"
                          className="block mb-2 text-sm   text-gray-900 dark:text-gray-300"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          ngModel
                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                          placeholder="Enter Your Name"
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="email"
                          className="block mb-2 text-sm   text-gray-900 dark:text-gray-300"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          ngModel
                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                          placeholder="name@gmail.com"
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="email"
                          className="block mb-2 text-sm   text-gray-900 dark:text-gray-300"
                        >
                          Contact Number
                        </label>
                        <input
                          type="text"
                          name="number"
                          id="number"
                          ngModel
                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                          placeholder="Enter Your Mobile Number"
                          required
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label for="message" className="block mb-2 text-sm text-gray-900">
                          Your Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          ngModel
                          rows="4"
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Leave a Message..."
                        ></textarea>
                      </div>
                      <div className="text-center ">
                        <button type="submit" className="py-3 px-5 text-sm  bg-primary-blue-color  text-center  hover:bg-white hover:text-primary-blue-color hover:border border text-white rounded-lg bg-primary-red-color sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" >
                          Send message
                        </button>
                      </div>
                    </form>
                  </div>
                  <h3 className="mt-10 text-center text-sm md:text-lg">
                    {" "}
                    For any queries contact Email :{' '}
                    <a href="mailto:editor@AJARCSE.com" className="text-blue-700 " >
                      editor@AJARCSE.com
                    </a>
                  </h3>
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

export default Contactus;
