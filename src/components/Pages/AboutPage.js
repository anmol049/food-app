import React from 'react'

class AboutPage extends React.Component{
  constructor(){
    super();
    console.log("parent constructor called")
    this.state = {
          jsonpro:{
            name:"anmol",
            id:"123"
          }
    }
  }
  async componentDidMount(){
    console.log("parent CDM called");
    const promise = await fetch("https://api.github.com/users/anmol049")
    const jsonData = await promise.json();
    this.setState({
      jsonpro:jsonData
    })
  }
  componentDidUpdate(){
    console.log("parent componentDidUpdate called");
  }
 componentWillUnmount(){
  console.log("Parent component will unmount called");
 }

  render(){
    console.log("parent render called");
    return (
      <div className="about-containor">
        <h1>{this.state.jsonpro.login}</h1>
        <h5>{this.state.jsonpro.id}</h5>
        <img src={this.state.jsonpro.avatar_url} alt="" />
      </div>
    )
  }

}
export default AboutPage;