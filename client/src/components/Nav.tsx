import { useNavigate } from "react-router";
import { useLocation } from "react-router";

export default function Nav() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);

  return (
    <nav className="nav">
      {!(location.pathname === "/") && (
        <a onClick={() => navigate(-1)}>Go Back</a>
      )}
      {(location.pathname === "/home" ||
        location.pathname === "/add_post" ||
        location.pathname === "/posts") && (
        <a
          onClick={async () => {
            try {
              await fetch(`http://localhost:3040/api/auth/logout`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                credentials: "include",
              });
              navigate("/");
            } catch (error) {
              alert(error);
            }
          }}
        >
          Log out
        </a>
      )}
    </nav>
  );
}
