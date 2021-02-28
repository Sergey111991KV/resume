const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_PAGE = 'SET_TOTAL_PAGE'
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING'


let initialState = {
        users : [],
        pageSize : 10,
        totalUsersCount : 0,
        currentPage : 3,
        isFetching : true,
}

const usersReducer = (state = initialState,action) => {
    switch (action.type) {
        case FOLLOW :
            return  {...state, users: state.users.map(u => {
                if (u.id === action.userId) {
                    return { ...u, followed: true}
                } else {
                    return u
                }
            }
            )}
        case UNFOLLOW :
            return  {...state, users: state.users.map(u => {
                if (u.id === action.userId) {
                    return { ...u, followed: false}
                } else {
                    return u
                }
            }
            )}
        case SET_USERS:
            return  {...state, users: action.users }
        case SET_CURRENT_PAGE:
            return  {...state, currentPage : action.currentPage }
        case SET_TOTAL_PAGE: 
            return  {...state, totalUsersCount : action.totalPage }
        case   TOOGLE_IS_FETCHING:
            return  {...state, isFetching : action.isFetching }
        default:
            return state 
    }      
    }
export const follow = (userId) => ({type : FOLLOW, userId})
  
export  const unfollow = (userId) => ({type : UNFOLLOW, userId})

export  const setUsers = (users) => ({type : SET_USERS, users})

export const setCurrentPage = (currentPage) => ({type : SET_CURRENT_PAGE, currentPage})

export const setTotalUsersCount = (totalPage) => ({type : SET_TOTAL_PAGE, totalPage})

export const toogleIsFetching = (isFetching) => ({type : TOOGLE_IS_FETCHING, isFetching})

export default usersReducer