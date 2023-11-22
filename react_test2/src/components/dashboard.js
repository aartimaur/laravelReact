import AuthUser from "./AuthUsers"
export default function Dashboard(){
    const{user}=AuthUser();
    return(
        <div>
        <div>Name</div>
        <b>{user.name}</b>
        <hr/>
        <div>Name</div>
        <b>{user.email}</b>
        </div>
    )
}