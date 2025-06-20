import { useNavigate } from "react-router-dom";


// eslint-disable-next-line react/prop-types
function CaptainProtect ({children}) {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
  
    if(!token)
      {
        navigate('/captain-login');
      }
    return (
      <>
        {children}
      </>
    )
  }
  
  export default CaptainProtect;