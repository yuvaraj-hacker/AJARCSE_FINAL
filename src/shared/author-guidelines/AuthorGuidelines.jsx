import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar';
import { GrDocumentZip } from "react-icons/gr";
function AuthorGuidelines() {
  return (
    <>
      <section className=' '>
        <div className="max-w-screen-xl mx-auto w-full px-5 2xl:px-0 ">
          <div className="lg:flex md:flex  gap-8 ">
            <div className="max-w-full w-full ">
              <h1 className="text-primary-blue-color md:text-3xl text-xl font-bold ">Author Guidelines</h1>
              <p className=" mb-4 mt-3 text-justify md:text-base text-sm">
                AJARCSE are peer-reviewed, community-driven research journals
                covering the latest specialist topics at the emerging
                intersections of IT and other fields. A general guide for how to
                prepare your text and graphics for an article to be included in
                EAI Endorsed Transactions. Submitted papers are reviewed by the
                AJARCSE Editorial Board & Reviewers.
              </p>
              <h3 className="font-semibold mb-2">
                <i>Requirements for publishing in</i> AJARCSE:
              </h3>
              <ul className="list-disc list-outside pl-5  text-justify md:text-base text-sm">
                <li className="">
                  The articles must be written by the correct AJARCSE
                  <a
                    href="/documents/"
                    target="blank"
                    className="text-blue-700 underline inline-flex ml-1 gap-1 items-center"
                  > {''} template < GrDocumentZip className="text-lg" /></a>
                </li>
                <li>
                  Researchers should adhere to publication requirements that
                  submitted work is original, is not plagiarized, and has not
                  been published elsewhere.
                </li>
                <li>
                  The abstract must be between 200 and 1000 characters long. We
                  recommend that it be prepared in a structured way according to
                  the PubMed's format.
                </li>
                <li>
                  Three to eight keywords representing the main content of the
                  article are required.
                </li>
                <li>
                  Please ensure that the used reference style is Vancouver; if
                  the references are not in the correct style, they may need to
                  be retyped and carefully proofread. You can find it in the
                  AJARCSE templates.
                </li>
                <li>
                  The articles have to be written in formal English,
                  'spell-checked', and 'grammar checked'.
                </li>
                <li>
                  Only articles and abstracts that have been published or are in
                  press or are available through public e-print/preprint
                  servers, may be cited.
                </li>
                <li>
                  All references mentioned in the Reference List are cited in
                  the text, and vice versa.
                </li>
                <li>Figures and tables need to be of readable quality.</li>
                <li>
                  Permission has been obtained for use of copyrighted material
                  from other sources (including the Internet).
                </li>
                <li>
                  The paper must be submitted through the
                  <a
                    href="https://AJARCSE.com/aritms/index.php/AJARCSE/about/submissions"
                    className="text-blue-700 underline whitespace-nowrap"
                  >
                    {" "}
                    Open Journal System
                  </a>
                </li>
              </ul>
              <h3 className="font-semibold mt-5 mb-2">
                <i>To submit a paper via OJS you will need:</i>{" "}
              </h3>
              <ul className=" list-outside pl-5  list-disc text-justify mb-5 md:text-base text-sm">
                <li>
                  Your manuscript in the OpenOffice, Microsoft Word, or RTF
                  document file format.
                </li>
                <li>
                  The manuscript should be prepared according to the guidelines
                  and requirements. For more information, please write to
                  <a
                    href="mailto:editor@AJARCSE.com"
                    className="text-blue-700 underline  "
                  >
                    {" "}
                    editor@ajarcse.com.
                  </a>
                </li>
              </ul>
              <a
                href="https://AJARCSE.com/aritms/index.php/AJARCSE/submission/wizard"
                className="text-blue-700 underline underline-offset-1 hover:underline-offset-4 hover:text-blue-500 duration-200 pt-5"
              >
                Submit a paper via OJS
              </a>
              <h1 className="text-xl font-semibold mb-2 mt-5">Article types</h1>
              <ul className="  list-outside pl-5 list-disc text-justify md:text-base text-sm">
                <li>
                  Research article: Articles (4000-8000 words) that report
                  original research and which present objective, questions,
                  methods, results, discussions, and conclusions.
                </li>
                <li>
                  Review article: In-depth review articles (4000-8000 words) on
                  topics that build upon comprehensive references to the
                  published literature. These articles are meant to offer
                  relevant concepts, frameworks, theoretical proposals and
                  limitations in the topic covered.
                </li>
                <li>
                  Commentary: Commentary pieces and columns are short articles
                  (typically up to 1000 words) that reflect the opinion of the
                  author(s) on a topic of interest, written for a broad
                  audience. These may be stand-alone pieces or part of a regular
                  series.
                </li>
                <li>
                  Editorial: These are written by the editor(s) or invited
                  researchers (1000-2000 words) to discuss broader issues
                  related to the articles published in the issue, the journal or
                  certain topics relevant to the journal.
                </li>
                <li>
                  Technical Article: Technical articles are original reports on
                  specialist technical work, written for a professional
                  audience. There are no minimum or maximum length constraints,
                  but articles should be long enough to clearly explain the work
                  carried out, while not of an excessive length that distorts
                  rather than increases understanding.
                </li>
                <li>
                  Short communications: Short articles (1000-2500 words)
                  containing original research pieces. They should not be
                  preliminary reports or contain purely incremental data and
                  should be of significance and broad interest to the journal's
                  research community.
                </li>
              </ul>
              <h1 className="text-xl font-semibold mt-5 mb-2">
                Benefits of AJARCSE
              </h1>
              <h3 className="font-semibold mb-2">Open Access</h3>
              <ul className=" list-outside pl-5 list-disc text-justify md:text-base text-sm">
                <li>
                  All articles in the AJARCSE journal is an Open Access (OA).
                </li>
                <li>
                  Authors can copy, redistribute, remix, transform, and build
                  upon the material since all the papers are published under a
                  Creative Commons Attribution-NonCommercial-ShareAlike 4.0
                  International (CC BY-NC-SA 4.0) license.
                </li>
                <li>
                  Community standards, rather than copyright law, will continue
                  to provide the mechanism for enforcement of proper attribution
                  and responsible use of the published work.
                </li>
              </ul>
              <h3 className="font-semibold mt-5 mb-2">
                Rigorous review process
              </h3>
              <p className="text-justify  md:text-base text-sm">
                Submitted papers are double-blind reviewed. The thoroughly
                transparent review process increases review quality by
                simultaneously evaluating the performance of reviewers and the
                impact and exploitation potential of the published article.
              </p>
            </div>
            <Sidebar />
          </div>
          <h1 className="bg-slate-300 h-[1px] w-full mt-5  "></h1>
        </div>
      </section>
    </>
  )
}
export default AuthorGuidelines