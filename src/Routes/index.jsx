import { Route, Routes } from "react-router-dom";
import Home from "../Screens/Home";
import SignIn from "../Screens/Auth";
import AddMovies from "../Screens/AdminMenu/AddMovie";
import EditMovies from "../Screens/AdminMenu/EditMovies";

const RoutesNav = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Auth" element={<SignIn />} />
            <Route path="/Admin/Add" element={<AddMovies />} />
            <Route path="/Admin/Edit" element={<EditMovies />} />
        </Routes>
    )
}

export default RoutesNav;