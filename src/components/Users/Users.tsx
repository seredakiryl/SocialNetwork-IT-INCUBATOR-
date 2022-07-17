import userPhoto from '../../assets/images/user.png'
import { UserType } from '../Redux/types'
import style from './Users.module.css'

type PropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    onPageChange: (p: number) => void
}

export const Users = (props: PropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {
                pages.map(p => {
                    return <span className={props.currentPage === p && style.selected}
                        onClick={() => props.onPageChange(p)}
                    >{p}</span>
                })
            }
        </div>{
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={style.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto} />
                    </div>
                    <div>{u.followed ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button> :
                        <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        {/* <div>{u.location.city}</div> */}
                        {/* <div>{u.location.country}</div> */}
                    </span>
                </span>
            </div>)
        }</div>
}