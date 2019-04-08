import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getUserList } from '../modules/user'
import { connect } from 'react-redux'

class UserList extends Component {
  componentDidMount() {
    this.props.getUserList()
  }

  render() {
    const { users } = this.props

    if (!users) return null

    return (
      <div>
        <ul>
          {users.map(user => {
            const { id, name } = user
            return (
              <li key={id}>
                {id} - {name}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

UserList.propTypes = { getUserList: PropTypes.func, users: PropTypes.array }

const mapDispatchToProps = {
  getUserList
}

function mapStateToProps({ user: { users } }) {
  console.log(users)
  return { users }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList)
