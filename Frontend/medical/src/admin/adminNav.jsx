import { Link, useNavigate } from "react-router-dom";

function AdminNav() {
  let navigate =useNavigate()
    return (  <div>


<div className="bg-body-dark">
        <div className="d-flex justify-content-around ">
          <div href="#home" className="fs-3 fw-bold">eHealth</div>
          <div className="fs-5 "><Link to='/admin'>Home</Link> </div>
          <div className="fs-5 ">Logout</div>
          <div>
              <button onClick={()=>navigate('login')}>Login</button>
              <button onClick={()=>navigate('create')}>Signup</button>
            </div>
        </div>
      </div>



    </div>);
}

export default AdminNav;