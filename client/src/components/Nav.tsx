import { useNavigate } from "react-router";
import { useLocation } from "react-router";

export default function Nav() {
  const navigate = useNavigate();
  const location = useLocation();

  

  return (
    !(location.pathname === "/") && (
      <nav className="nav">
        <a onClick={() => navigate(-1)}>
          Go Back
        </a>
      </nav>
    )
  );
}
