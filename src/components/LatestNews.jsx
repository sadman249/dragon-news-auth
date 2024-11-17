import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {

  

  return (
    <div className="flex gap-2 items-center bg-base-200 p-2">
      <p className="bg-[#D72050] btn btn-secondary rounded-none text-base-100">Breaking News</p>
      <Marquee pauseOnHover={true} speed={80} className="space-x-10">
        <Link className="mr-12" to="/news">I can be a React component, multiple React components.....</Link>
        <Link className="mr-12" to="/news">I can be a React component, multiple React components.....</Link>
        <Link className="mr-12" to="/news">I can be a React component, multiple React components.....</Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
