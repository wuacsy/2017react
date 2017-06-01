import React from 'react';
class Header extends React.Component{
  render(){
    return (
      <header>
        <div className="container">
          <h1>react question form</h1>
          <button type="submit" className="btn btn-success add-question" onClick = {this.props.onToggleForm}>添加问题</button>
        </div>
      </header>
    )
  }
}
export default Header;
