import { Map } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const navigate = useNavigate();

  return (
    <nav className="flex items-center text-2xl space-x-2">
      {/* icon */}
      <div onClick={() => navigate("/")} className="mt-1 cursor-pointer">
        <Map />
      </div>

      {location.pathname === "/" ? (
        <p className="text-gray-700 cursor-pointer font-semibold text-nowrap">
          Dashboard{" "}
        </p>
      ) : null}

      {pathnames.map((name, index) => {
        if (!isNaN(name)) return null;

        const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
        const isLast = index === pathnames.length - 1;

        return (
          <div className="flex items-center space-x-2" key={index}>
            <span className="text-gray-400">/</span>
            {isLast ? (
              <span className="text-gray-700 font-semibold text-nowrap">
                {decodeURIComponent(name)
                  .replace(/-/g, " ")
                  .replace(/\b\w/g, (char) => char.toUpperCase())}
              </span>
            ) : (
              <Link
                to={routeTo}
                className="text-gray-700 font-semibold hover:underline text-nowrap"
              >
                {decodeURIComponent(name)
                  .replace(/-/g, " ")
                  .replace(/\b\w/g, (char) => char.toUpperCase())}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
