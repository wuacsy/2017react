import React from 'react';
class QuestionForm extends React.Component{
  formSubmit(e){
    e.preventDefault();
    if(!this.refs['title'].value) return;
    var newQuestion = {
      title : this.refs['title'].value,
      content : this.refs['content'].value,
      praiseCount:0
    }
    this.refs.addQuestionForm.reset();
    this.props.onNewQuestions( newQuestion );
  };
  render(){
    return(
        <form onSubmit={this.formSubmit.bind(this)} ref='addQuestionForm'>
          <div className="form-group">
            <input type="text" ref='title' className="form-control" id="title" placeholder="问题标题" />
          </div>
          <div className="form-group">
            <textarea className="form-control" ref='content' rows="3" id="content" placeholder="问题内容"></textarea>
          </div>
          <div className="form-group pull-right">
            <button type="button" className="btn btn-default mr10" onClick={this.props.onToggleForm}>取消</button>
            <button type="submit" className="btn btn-success" >确认添加</button>
          </div>
        </form>
    )
  }
};
export default QuestionForm;
