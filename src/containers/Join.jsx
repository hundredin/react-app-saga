import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { joinStep1, joinStep2 } from '../modules/user'
import { connect } from 'react-redux'

class Join extends Component {
  constructor(props) {
    super(props)
    this.state = { name: '', email: '', password: '', age: 20, gender: 'M' }
  }

  render() {
    // const ages = [
    //   ...Array(30)
    //     .keys()
    //     .map(a => a + 1)
    // ]

    const ages = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email" className="lab_radio">
            e-mail
          </label>
          <input
            id="email"
            type="text"
            onChange={this.handleEmailChange}
          />
          <label htmlFor="name" className="lab_radio">
            닉네임
          </label>
          <input
            id="name"
            type="text"
            onChange={this.handleNickNameChange}
          />
          <br />
          <label htmlFor="gender" className="lab_radio">
            나이
          </label>
          <select id="gender" name="age" onChange={this.handleAgeChange}>
            {ages.map(age => {
              return (
                <option key={age} value={age}>
                  {age}
                </option>
              )
            })}
          </select>
          <br />
          <input
            id="gender_m"
            type="radio"
            value="M"
            onChange={this.handleGenderChange}
            checked={this.state.gender === 'M'}
          />
          <label htmlFor="gender_m" className="lab_radio">
            남자
          </label>
          <br />
          <input
            id="gender_f"
            type="radio"
            value="F"
            onChange={this.handleGenderChange}
            checked={this.state.gender === 'F'}
          />
          <label htmlFor="gender_f" className="lab_radio">
            여자
          </label>
          <button type="submit">다음</button>
        </form>
      </div>
    )
  }

  handleEmailChange = e => {
    this.setState({ email: e.target.value })
  }

  handleNickNameChange = e => {
    this.setState({ name: e.target.value })
  }

  handleAgeChange = e => {
    this.setState({ age: e.target.value })
  }

  handleGenderChange = e => {
    this.setState({ gender: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.joinStep1(this.state)
  }
}

Join.propTypes = {
  joinStep1: PropTypes.func
}

const mapDispatchToProps = {
  joinStep1
}

function mapStateToProps() {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Join)
