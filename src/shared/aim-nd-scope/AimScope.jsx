import React from 'react'
import Sidebar from '../Sidebar/Sidebar';

function AimScope() {

  return (
    <>
      <section >
        <div className="max-w-screen-xl mx-auto w-full px-5 2xl:px-0 py-5 min-h-[75vh] ">
          <div className="lg:flex md:flex  gap-8 ">
            <div className="max-w-full w-full">
              <h1 className="text-primary-blue-color text-3xl font-bold ">Aim And Scope</h1>
              <h1 className="font-semibold lg:text-xl mb-2 mt-8">Aim</h1>
              <h1 className="  mb-3  text-justify leading-loose">The American Journal of Advanced Research in Computer Science & Engineering is an online open access journal, basically the aim of this journal to promote the
                new Innovative ideas in all fields of Engineering and Technology. Basically, this Journal will help to
                promote all Innovations in Engineering and Technology on one platform so that if anybody wants to
                integrate their ideas with other field of technology, they can implement it with the help of this
                Journal.</h1>
              <h1 className="font-semibold  lg:text-xl mt-8 mb-2">Scope</h1>
              <h1 className="  text-justify leading-loose">The scope of the AJARCSE is to provide an academic medium and an important
                reference for the advancement and dissemination of research results that support high-level learning,
                teaching and research in the fields of engineering, science and technology. Original theoretical work
                and application-based studies, which contributes to a better understanding of engineering, science and
                technological challenges, are encouraged.</h1>
            </div>
            <Sidebar />

          </div>

          <h1 className="bg-slate-300 h-[1px] w-full mt-5"></h1>
        </div>

      </section>


    </>
  )
}

export default AimScope

