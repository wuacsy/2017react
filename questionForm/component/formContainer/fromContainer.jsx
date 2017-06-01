import React from 'react';
import QuestionForm from './questionForm/questionFrom.jsx';
import QuestionList from './questionList/questionList.jsx';
class FormContainer extends React.Component{
  constructor(props){
    super(props);
    var questions = [
      {
        title:'this is test.test.test. one',
        content:'It takes a lifetime to forget you.You are my life teacher.thanks.',
        praiseCount:20
      },
      {
        title:'this is test.test.test. two',
        content:'It takes a lifetime to forget you.You are my life teacher.thanks.',
        praiseCount:10
      }
    ];
    this.state = {
      questions : questions
    }
  }

  onNewQuestions(newQuestion){
    var newQuestions = this.state.questions.concat(newQuestion);
    this.setState({
      questions : newQuestions
    })
  }
  sortQuestion(questions){
    questions.sort(function(a,b){
      return b.praiseCount - a.praiseCount
    })
  }
  praiseVote(key,newCount){
    let newQuestions = this.state.questions;
    newQuestions[key].praiseCount = newCount;
    this.sortQuestion(newQuestions);
    this.setState({
      questions : newQuestions
    })
  }

  render(){
    const _this = this;
    // var questions = this.state.questions;
    // if(!Array.isArray(questions)) throw new Error('questions 必须是数组');
    var questionComs = this.state.questions.map(function(item,key) {

      item.questionIndex = key;
      return <QuestionList key={key} {...item} praiseVote = {_this.praiseVote.bind(_this)}/>
    });
    var displayStyle = {
      display:this.props.showForm?'block':'none'
    }
    return(
      <div className="container pb20">
        <section className="question-form" style={displayStyle}>
          <h2>填写问题</h2>
          <QuestionForm onToggleForm={this.props.onToggleForm} onNewQuestions={this.onNewQuestions.bind(this)}/>
          <div className="clearfix"></div>
        </section>
        <section className="question-list">
          <h2>问题列表</h2>
          {questionComs}
        </section>
      </div>
    )
  }
};
export default FormContainer;
