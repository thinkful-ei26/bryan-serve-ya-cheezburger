import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCheeses } from '../actions/cheese'

class CheeseList extends Component { 
  //constructor allows to set state on component
  // can also bind methods
  // // this.methodName = this.methodName.bind(this)
  // constructor() { // constructor is always optional, used to setup things on class if need additional functionallity
  //   super() // necessary if constructor used 
  //   let cheeses = ['Bath Blue', 'Barkham Blue', 'Buxton Blue']
  //   this.state = { cheeses } 
  // not using state because we've moved information into redux store (in this context)
  // }
  componentDidMount() {
    this.props.dispatch(fetchCheeses()) // dispatch async action
  }
  render() {
    return (
      <ul>
        {this.props.cheeses.map((cheese, index) => (
          <li className='cheese' key={index}>
            {cheese}
          </li>
        ))}
      </ul>
    )
  }
}
// console.log('props', props)
const mapStateToProps = state => ({
  cheeses: state.cheeses, // redux-store or state
})

// export CheeseList
export default connect(mapStateToProps)(CheeseList)
