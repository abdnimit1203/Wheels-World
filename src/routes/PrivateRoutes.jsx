import { useContext } from "react";
import { AuthContext } from "../hooks/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  


  if (loading) {
    return (
      <>
        <div className="flex min-h-screen justify-center items-center text-center">
          <span className=" w-40 loading loading-bars bg-secondary "></span>
        </div>
      </>
    );
  }
  if (user) {
    return children;
  } else {
    Swal.fire({
        title: 'You have to login First',
        width: 600,
        timer: 4000,
        timerProgressBar: true,
        heightAuto: false,
        padding: '3em',
        color: 'white',
        background: '#ffc404',
        
    
      })
    
  }

  return (
    <>
      <Navigate state={location.pathname} to="/login"></Navigate>
      
    </>
  );
};
PrivateRoutes.propTypes = {
  children: PropTypes.object.isRequired,
};
export default PrivateRoutes;
