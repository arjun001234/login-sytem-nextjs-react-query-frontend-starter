import React from "react"
import { User } from "../../graphql/generated/types"

type profileProps = {
    user: User
}

const Profile : React.FC<profileProps> = ({user}) => {

   return (
       <div>
           <h1>{user.firstName} {user.lastName}</h1>
           <p>{user.email}</p>
       </div>
   )
}

export default Profile