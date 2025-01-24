import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { FaUserCircle } from "react-icons/fa";
// import { IoIosMail } from "react-icons/io";
// import { SiOrcid } from "react-icons/si";

function EditorialBoard() {


  const data = [

    // { name: '', university: '', mail: ''},
    // 15-10 ~ count - 13
    { name: 'Feras Yousef', university: 'Hampton University, Hampton, VA 23669, USA', mail: 'feras.fyousef@hamptonu.edu' },
    { name: 'Issa Qiqieh', university: 'Al-Balqa Applied University, Jordan', mail: 'i.qiqieh@bau.edu.jo' },
    { name: 'Hamza Mohammed Ridha Al-Khafaji', university: 'Al-Mustaqbal University, Iraq', mail: 'hamza.alkhafaji@uomus.edu.iq' },
    { name: 'Hemant Chittoo', university: 'University of Technology, Mauritius', mail: 'hchittoo@utm.ac.mu' },
    { name: 'Sohail Imran Khan', university: 'Lebanese French University, Iraq', mail: 'sohailkhan@lfu.edu.krd' },
    { name: 'Muhammad Zunnurain Hussain', university: 'Bahria University, Pakistan', mail: 'zunnurain.bulc@bahria.edu.pk' },
    { name: 'AbdulHafeez Muhammad', university: 'Bahria University, Pakistan', mail: 'ahafeez.bulc@bahria.edu.pk' },
    { name: 'Ram Sewak Singh', university: 'Adama  Science & Technology University (ASTU) ,   Ethiopia', mail: 'ram.singh@astu.edu.et' },
    { name: 'M. H. Thowfeek', university: 'South Eastern University of Sri Lanka, Sri Lanka', mail: 'thowfeek@seu.ac.lk' },
    { name: 'T. Arudchelvam', university: 'Wayamba University of Sri Lanka, Sri Lanka', mail: 'arul@wyb.ac.lk' },
    { name: 'Md.Mahbubur Rahman', university: 'Patuakhali Science and Technology University (PSTU), Bangladesh.', mail: 'mahbub.cse@pstu.ac.bd' },
    { name: 'Syed Md. Galib', university: 'Jashore University of Science and Technology, Bangladesh', mail: 'galib.cse@just.edu.bd' },
    { name: 'Mohamed Amine CHAÂBANE,', university: 'University of Sfax, Tunisia ', mail: 'mohamedamine.chaabane@isaas.usf.tn' },

    // 12-09 ~ count - 10
    { name: 'Ibrahim Othman Hamad', university: 'University of Salahaddin-Erbil, Iraq', mail: 'ibrahim.hamad@su.edu.krd' },
    // { name: 'Fadhel Abbas Abdulla', university: 'AL-Mustansiriyah University, Iraq', mail: 'fadhel975@uomustansiriyah.edu.iq'},
    { name: 'Najm Abdulzahra Makhrib Al-seraji', university: 'The University of Mustansiriyah, Iraq', mail: 'dr.najm@uomustansiriyah.edu.iq' },
    { name: 'Faiq M. S. Al-Zwainy', university: 'Al-Nahrain University, Iraq', mail: 'faiq.m.al-zwainy@nahrainuniv.edu.iq' },
    { name: 'Ali A. Mohammed', university: 'Al-Karkh University of Science, Iraq', mail: 'ali_abdulwahhab@kus.edu.iq' },
    { name: 'Fadhil M. Al- Mohammed', university: 'Al-Furat Al-Awsat Technical University, Iraq', mail: 'dr.fadeelmohamad@atu.edu.iq' },
    { name: 'Qusay Abdullah Abed', university: 'Al-Furat Al-Awsat Technical University, Iraq', mail: 'inkr.ks@atu.edu.iq' },
    { name: 'Waqar Ahmad', university: 'International University-Erbil, Iraq', mail: 'waqar.ahmad@tiu.edu.iq' },
    // { name: 'Ihsan H. Abdulqadder', university: 'University of Kirkuk, Iraq', mail: 'ihsan.hussein@uokirkuk.edu.iq'},
    { name: 'Barham Ali', university: 'International University-Erbil, Iraq', mail: 'barham.haydar@tiu.edu.iq' },
    { name: 'Dathar Abas Hasan', university: 'Duhok Polytechnic University, Iraq', mail: 'dathar.hasan@dpu.edu.krd' },
    { name: 'Aram Hanna Massoudi', university: 'Cihan University, Iraq', mail: 'aram.massoudi@cihanuniversity.edu.iq' },


    //05-09 ~ count - 51
    { name: 'Ahmad Ilham', university: 'Universitas Muhammadiyah Semarang, Indonesia', mail: 'ahmadilham@unimus.ac.id' },
    { name: 'Ahmed Hussein Ali', university: 'Iraqia University, Iraq', mail: 'msc.ahmed.h.ali@gmail.com' },
    { name: 'Ahmed Rimaz Faizabadi', university: 'International Islamic University Malaysia, Malaysia', mail: 'ahmed.rimaz@live.iium.edu.my' },
    { name: 'Alaa S. Al-Husainy', university: 'Al-Muthanna University, Iraq', mail: 'a.alhusainy@mu.edu.iq' },
    { name: 'Ali A.Hassan', university: 'Al-Muthanna University, Iraq', mail: 'alkhafajia31@gmail.com' },
    { name: 'Alma Bangayan-Manera', university: 'Cagayan State University, Philippines', mail: 'almamanera@csu.edu.ph' },
    { name: 'Amjad Hussein', university: 'Al-Muthanna University, Iraq', mail: 'amjad.muhamad@mu.edu.iq' },
    { name: 'Ashfaq Hussain Farooqi', university: 'Air University, Pakistan', mail: 'ashfaq.hussain@au.edu.pk' },
    { name: 'Audai Hussein Al-Abbas', university: 'Al-Furat Al-Awsat Technical University', mail: 'aalabbas@atu.edu.iq' },
    { name: 'Azhar Mushtaq', university: 'University of Sargodha, Pakistan', mail: 'azhar.mushtaq@uos.edu.pk' },
    { name: 'Barhm Mohamad', university: 'Erbil Polytechnic University, Iraq', mail: 'barhm.mohamad@epu.edu.iq' },
    { name: 'Claudia Cherubini', university: 'University of Trieste, Italy', mail: 'chrcld@unife.it' },
    { name: 'Dhanalakshmi Vadivel', university: 'University of Pavia, Italy', mail: 'dhanalakshmi.vadivel@unipv.it' },
    { name: 'D. Kayathri Devi', university: 'Amity University, Uzbekistan', mail: 'dkdevi@amity.uz' },
    { name: 'Fadhel Abbas Abdulla', university: 'AL-Mustansiriyah University, Iraq', mail: 'fadhel975@uomustansiriyah.edu.iq' },
    { name: 'Fahim Sufi', university: 'Monash University, Australia', mail: 'Fahim.sufi@monash.edu' },
    { name: 'Francesco Flammini', university: 'University of Southern Switzerland, Switzerland', mail: 'francesco.flammini@supsi.ch' },
    { name: 'Hamdi Serin', university: 'International University-Erbil, Iraq', mail: 'hamdi.serin@tiu.edu.iq' },
    { name: 'Hasan Fahmi Al-Delawi ', university: 'Cihan University-Erbil, Iraq   ', mail: 'hasan.hassan@cihanuniversity.edu.iq' },
    { name: 'Hatem Hatef abdulkadhim Altaee', university: 'Cihan University, Iraq', mail: 'hatm.hatf@sulicihan.edu.krd' },
    { name: 'Hazem Gouda', university: 'University of Wollongong, UAE', mail: 'HazemGouda@uowdubai.ac.ae' },
    { name: 'Hazhar Omer Mohammed', university: 'Lebanese French University, Iraq', mail: 'hazharbus@gmail.com' },
    { name: 'Ihsan Ali Alzamily', university: 'Al-Qasim Green University, Iraq', mail: 'ihsanalzamily@gmail.com' },
    { name: 'Ihsan H. Abdulqadder', university: 'University of Kirkuk, Iraq', mail: 'ihsan.hussein@uokirkuk.edu.iq' },
    { name: 'Jose María Abelleira Pereira', university: 'Universidad De Cadiz, Spain', mail: 'jose.abelleira@uca.es' },
    { name: 'Jwan Najeeb Saeed', university: 'Duhok Polytechnic University, Iraq', mail: 'jwan.najeeb@dpu.edu.krd' },
    { name: 'Manoj Kumar', university: 'University of Wollongong, UAE', mail: 'manojkumar@uowdubai.ac.ae' },
    { name: 'Md Shohel Arman', university: 'Daffodil International University, Bangladesh', mail: 'arman.swe@diu.edu.bd' },
    { name: 'Mohammed A. Naser', university: 'Al-Muthanna University, Iraq', mail: 'mohammed.naser@mu.edu.iq' },
    { name: 'Mohammed Tanimu', university: 'University of Abuja, Nigeria', mail: 'mohammed.tanimu@uniabuja.edu.ng' },
    { name: 'Muhammed Anwar', university: 'Tishk International University, Iraq', mail: 'muhammed.anwar@tiu.edu.iq' },
    { name: 'Murk Chohan', university: 'The Begum Nusrat Bhutto Women University, Pakistan', mail: 'Murk.chohan@bnbwu.edu.pk' },
    { name: 'Naaman Omar', university: 'Duhok Polytechnic University, Iraq', mail: 'naaman.omar@dpu.edu.krd' },
    { name: 'Nejmaddin Abdulla Sulaiman', university: 'Salahaddin University-Erbil, Iraq', mail: 'nejmaddin.sulaiman@su.edu.krd' },
    { name: 'Noorayisahbe Bt Mohd Yaacob', university: 'Universiti Kebangsaan Malaysia, Malaysia', mail: 'noorayisah@ukm.edu.my' },
    { name: 'Oladapo Ibitoye', university: 'Afe Babalola University, Nigeria', mail: 'ibitoyeo@abuad.edu.ng' },
    { name: 'Qays Hatem Imran', university: 'Al-Muthanna University, Iraq', mail: 'qays.imran@mu.edu.iq' },
    { name: 'Rajan Kadel', university: 'Melbourne Institute of Technology, Australia', mail: 'rkadel@mit.edu.au' },
    { name: 'Renas Rajab Asaad', university: 'Nawroz university, Iraq', mail: 'renas.rekany@nawroz.edu.krd' },
    { name: 'Riyadh D. Mansoor', university: 'Al Muthanna University, Iraq', mail: 'riyadhdmu@mu.edu.iq' },
    { name: 'S. A. Edalatpanah', university: 'Ayandegan University, Iran', mail: 's.a.edalatpanah@aihe.ac.ir' },
    { name: 'Sameer S. Hamdi', university: 'Cihan University, Iraq', mail: 'sameer.hamdi@cihanuniversity.edu.iq' },
    { name: 'Sanjeeb Prasad Panday', university: 'Tribhuvan University, Nepal', mail: 'sanjeeb@ioe.edu.np' },
    { name: 'Shahab Wahhab Kareem', university: 'Erbil Polytechnic University, Iraq', mail: 'shahab.kareem@epu.edu.iq' },
    { name: 'Suvash C. Saha', university: 'University of Technology Sydney, Australia', mail: 'suvash.saha@uts.edu.au' },
    { name: 'Syed Muzahir Abbas', university: 'Macquarie University, Australia', mail: 'syed.abbas@mq.edu.au' },
    { name: 'Weidong Huang', university: 'University of Sydney, Australia', mail: 'Weidong.Huang@uts.edu.au' },
    { name: 'Xi Zhang', university: 'University of KU Leuven, Belgium', mail: 'xi.zhang@kuleuven.be' },
    { name: 'Yousif A. H. Dallo', university: 'International University-Erbil, Iraq', mail: 'yousif.abduallah@tiu.edu.iq' },
    { name: 'Zainab Salih Ageed', university: 'Nawroz University, Iraq', mail: 'zainab.ageed@nawroz.edu.krd' },
    { name: 'Zana Majed Sadq', university: 'Koya University, Iraq', mail: 'zana.sadq@koyauniversity.org' },


  ]

  return (
    <>
      <section>
        <div className="max-w-screen-xl mx-auto w-full px-5 2xl:px-0 py-5">
          <div className="lg:flex md:flex  gap-8 ">
            <div className="max-w-full w-full flex justify-center items-center">


                {/*  <div className="">
                <h1 className="bg-primary-blue-color text-white px-2 shadow mt-5 font-semibold py-1">
                  Editor In Chief
                </h1>
                <div className="my-2 md:flex justify-between">
                  <div className="flex gap-1 items-center">
                    <FaUserCircle className="text-xl text-gray-500 min-w-10" />
                    <h2 className="text-sm">
                      <Link to="#" className="text-blue-600 cursor-wait">
                        Ramesh kuppusamy{" "}
                      </Link>
                    </h2>
                  </div>

                </div>
                <h1 className="bg-primary-blue-color text-white px-2 shadow font-semibold py-1">
                  Associate Editors
                </h1>
 

                {data
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((props, index) => (
                    <div key={index} className="my-2 md:flex justify-between md:border-none border-b-2">
                      <div className="flex gap-1 items-center">
                        <FaUserCircle className="text-xl text-gray-500 min-w-10" />

                        <h2 className="text-sm">
                          <Link
                            to={`mailto:${props.mail}`}
                            className="text-blue-600"
                          >
                            {props.name}
                          </Link>
                          <i>{` ( ${props.university} )`}</i>
                        </h2>

                      </div>
                    </div>
                  ))}


              </div> */}
              <p className=" md:text-xl text-sm ">will be updated soon .........</p>
            </div>

            <Sidebar />
          </div>
          <h1 className="bg-slate-300 h-[1px] w-full mt-5"></h1>
        </div>
      </section>
    </>
  );
}

export default EditorialBoard;
