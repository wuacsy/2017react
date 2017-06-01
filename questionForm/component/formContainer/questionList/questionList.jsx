import React from 'react';
class QuestionList extends React.Component{
  praiseUp(e){
    let count = parseInt(this.props.praiseCount) + 1;
    this.props.praiseVote (this.props.questionIndex,count);
  }
  praiseDown(e){
    if(parseInt(this.props.praiseCount) <= 0) return;
    let count = parseInt(this.props.praiseCount) - 1;
    this.props.praiseVote (this.props.questionIndex,count);
  }
  render(){
    return (
        <div className="list-group">
          <div href="#" className="list-group-item">
            <h4 className="list-group-item-heading">{this.props.title}</h4>
            <p className="list-group-item-text">{this.props.content}</p>
            <div className="question-list-praise"><a onClick={this.praiseDown.bind(this)}>取消赞</a><a className="praise" onClick={this.praiseUp.bind(this)}>赞</a><span className="badge">{this.props.praiseCount}</span></div>
          </div>
        </div>
    )
  }
};
export default QuestionList;
