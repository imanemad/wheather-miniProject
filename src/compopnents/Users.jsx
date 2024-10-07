import { useDispatch, useSelector } from 'react-redux';
import { getUsers} from '../redux/users/usersAction';

const Users = () => {
    const {loading,data}=useSelector(state=>state)
    const dispatch=useDispatch()
    const handleUsers=()=>dispatch(getUsers())

    return (
        <>
            <button className='btn btn-primary' onClick={handleUsers}>Load Users</button>
            {
                loading
                ?
                (<div>Loading...</div>)
                :
                (<table className='table bg-light my-5 mx-auto'>
                    <thead>
                            <tr>
                                <th>#</th>
                                <th>name</th>
                                <th className="d-md">User name</th>
                                <th className="d-md">Email</th>
                            </tr>
                    </thead>
                    <tbody>
                        {data.length<=0
                            ?
                            <tr><td>nothing set yet...</td></tr>
                            :
                            data.map(u=>(
                                <tr key={u.id}>
                                    <td>{u.id}</td>
                                    <td>{u.name}</td>
                                    <td>{u.username}</td>
                                    <td>{u.email}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>)
            }
        </>
    );
}

export default Users;
