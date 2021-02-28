import React from 'react';
import { connect } from 'react-redux';
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toogleIsFetching } from '../../../../redux/social-users-reducer';
import './Users.css'
import * as axios from 'axios'
import Users from './Users';
import Preloader from '../../../Common/Preloader'


class UsersContainer extends React.Component {
 
    componentDidMount() {
        this.props.toogleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toogleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toogleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toogleIsFetching(false)
            this.props.setUsers(response.data.items)
        })
    }
  
  
    render() {
      return  <>
                    {this.props.isFetching ?
                     <Preloader /> : null }
                    <Users   totalUsersCount={this.props.totalUsersCount} 
                        pageSize={this.props.pageSize } 
                        currentPage={this.props.currentPage}  
                        users={this.props.users}  
                        unfollow={this.props.unfollow}  
                        follow={this.props.follow}  
                        onPageChanged={this.onPageChanged}  
                    />
               </>         
    }
}

let mapStateToProps = (state) => {
    return {
        users : state.usersPage.users,
        pageSize : state.usersPage.pageSize,
        totalUsersCount : state.usersPage.totalUsersCount,
        currentPage :  state.usersPage.currentPage,
        isFetching : state.usersPage.isFetching,
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (page) => {
//             dispatch(setCurrentPageAC(page))
//         },
//         setTotalUsersCount: (count) => {
//             dispatch(setTotalUsersCountAC(count))
//         },
//         toogleIsFetching: (isFetching) => {
//             dispatch(toogleIsFetchingAC(isFetching))
//         } 
//     }
// }


export default connect (mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount,toogleIsFetching}) (UsersContainer)