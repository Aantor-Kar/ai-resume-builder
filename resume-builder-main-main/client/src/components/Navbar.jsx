import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../app/features/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const logoutUser = () => {
    navigate("/");
    dispatch(logout());
  };

  return (
    <div className="shadow-lg shadow-black/20 bg-slate-950/90 border-b border-white/10 backdrop-blur">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5 text-slate-100 transition-all">
        <Link to="/">
          <img src="/logo.svg" alt="ResMakr" className="h-11 w-auto" />
        </Link>

        <div className="flex items-center gap-4 text-sm">
          <p className="max-sm:hidden text-slate-300">Hi, {user?.name}</p>
          <button
            onClick={logoutUser}
            className="bg-white/5 hover:bg-white/10 border border-white/15 px-7 py-1.5 rounded-full active:scale-95 transition-all text-slate-100"
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
