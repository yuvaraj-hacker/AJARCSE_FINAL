import React from "react";
import Calendar from "react-calendar";
import { format, parse } from 'date-fns';
import { Link } from "react-router-dom";
function Sidebar() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  const tileClassName = ({ date, view }) => {
    if (view === 'month' && isSameDay(date, new Date())) {
      return 'current-date';
    }
  };
  const isSameDay = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };
  const customLocale = {
    localize: {
      month: (n) => format(new Date(0, n), 'MM'),
    },
    formatLong: {
      date: () => 'MM yyyy',
    },
    parse,
  };
  return (
    <>
      <section className="max-w-xs w-full border-l border-slate-300 pl-5   xl:block hidden     " >
        <h1 className="bg-primary-blue-color text-white p-2 shadow">
          Important Links
        </h1>
        <Link to="/aboutus" onClick={scrollToTop}>
          <h1 role="button" className="p-2 pl-0 border-b border-slate-300 text-sm font-semibold"  >
            About Us
          </h1>
        </Link>
        <Link to="/aim-nd-scope" onClick={scrollToTop}>
          <h1 role="button" className="p-2 pl-0 border-b border-slate-300 text-sm font-semibold" >
            Aim & Scope
          </h1>
        </Link>
        <Link to="/editorial-board" onClick={scrollToTop}>
          <h1 role="button" className="p-2 pl-0 border-b border-slate-300 text-sm font-semibold"  >
            Editorial Board
          </h1>
        </Link>
        <Link to="/issues" onClick={scrollToTop}>
          <h1 role="button" className="p-2 pl-0 border-b border-slate-300 text-sm font-semibold"  >
            Issues
          </h1>
        </Link>
        <Link to="/author-guidelines" onClick={scrollToTop}>
          <h1 role="button" className="p-2 pl-0 border-b border-slate-300 text-sm font-semibold"  >
            Author Guidelines
          </h1>
        </Link>
        <Link to="/copyright-form" onClick={scrollToTop}>
          <h1 role="button" className="p-2 pl-0 border-b border-slate-300 text-sm font-semibold" >
            Copyright Form
          </h1>
        </Link>
        <Calendar className="sidebar-calendar" tileClassName={tileClassName} locale={customLocale} />
      </section>
    </>
  );
}
export default Sidebar;
