
import { useNavigate } from "react-router-dom"

// eslint-disable-next-line react/prop-types
function UserProtect({children}) {

  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  if(!token)
    {
      navigate('/user-login');
    }
  return (
    <>
      {children}
    </>
  )
}

export default UserProtect