import axios from "axios";
import { useNavigate } from "react-router-dom";


function UserLogout() {

  const token = localStorage.getItem('token');
  const  navigate = useNavigate();

    axios.get('http://localhost:3000/users/logout',
    {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
  ).then((response)=>{
       if(response.status===200)
       {
        localStorage.removeItem('token');
         navigate('/user-login');
       }
  })

  return (
    <div>UserLogout</div>
  )
}

export default UserLogout