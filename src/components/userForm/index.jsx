import { useState } from "react";
import { changeUser } from "../../redux/actions/actions";
import {connect} from "react-redux"


function UserForm ({newUser}){
    const [user, setUser] = useState({name: "", status: ""})

function handleChange(event) { 
 const {name, value}= event.target
 setUser({ ...user, [name]: value})

}

function handleSubmit(event) {
    event.preventDefault()
    setUser  ({ name: "", status: ""})
    newUser(user)
}

return(
    <div>
        <h2>Edit User Information</h2>
    <form onSubmit={handleSubmit}>
        <input onChange={handleChange}
        name= "name" 
        type=" text"
        value={user.name}/>
        <input onChange={handleChange}
         name= "status"
          type="text"
        value={user.status}/>
        <button 
        type="submit">Save </button>
    </form>
    </div>

)
}

const mapDispatchToProps = (dispatch) => ({
    newUser: newData => {
        dispatch ( changeUser(newData))
    }
})

export default connect (null, mapDispatchToProps)(UserForm)