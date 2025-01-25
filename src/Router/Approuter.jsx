import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../core/Main/Main";
import AimscopePage from "../components/AimscopePage";
import AboutusPage from "../components/AboutusPage";
import AuthorguidelinesPage from "../components/AuthorguidelinesPage";
import ContactusPage from "../components/ContactusPage";
import CopyrightsPage from "../components/CopyrightsPage";
import EditorialboardPage from "../components/EditorialboardPage";
import IssuesPage from "../components/IssuesPage";
import Abstracting from "../shared/journal-overview/Abstracting";
import ArticleProcess from "../shared/journal-overview/ArticleProcess";
import PeerReview from "../shared/journal-overview/PeerReview";
import PublicationEthic from "../shared/journal-overview/PublicationEthic";
import Homes from "../components/Homes";
export default function Approuter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<Homes />} />
          <Route path="/aim-nd-scope" element={<AimscopePage />} />
          <Route path="/aboutus" element={<AboutusPage />} />
          <Route path="/author-guidelines" element={<AuthorguidelinesPage />} />
          <Route path="/contactus" element={<ContactusPage />} />
          <Route path="/copyright-form" element={<CopyrightsPage />} />
          <Route path="/editorial-board" element={<EditorialboardPage />} />
          <Route path="/issues" element={<IssuesPage />} />
          <Route path="/abstracting" element={<Abstracting />} />
          <Route path="/articleProcess" element={<ArticleProcess />} />
          <Route path="/peerreview" element={<PeerReview />} />
          <Route path="/publicationethic" element={<PublicationEthic />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
