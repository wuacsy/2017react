import React from 'react';
import ReactDOM from 'react-dom';

import Header from './component/header/header.jsx';
import FormContainer from './component/formContainer/fromContainer.jsx';
import Footer from './component/footer/footer.jsx';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      fromDisplay:false
    }
  }
  onToggleForm (){
    this.setState({
      fromDisplay: this.state.fromDisplay ? false : true
    })
  }
  render(){
    return (
      <div>
        <Header onToggleForm = {this.onToggleForm.bind(this)}/>
        <FormContainer showForm = {this.state.fromDisplay} onToggleForm = {this.onToggleForm.bind(this)} />
        <Footer/>
      </div>
    )
  }
}
ReactDOM.render(
  <App/>,
  document.getElementById('app')
)
