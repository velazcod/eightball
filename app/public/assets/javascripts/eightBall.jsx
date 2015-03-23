var EightBall = React.createClass({
  handleNewQuestion: function(question) {
    // TODO: add question logic
    this.setState({qestion: question, answer: "haha, nope"});
  },
  getInitialState: function() {
    return {question: "", answer: ""};
  },
  render: function() {
    return (
      <div className="eightBall">
        <h1>EightBall</h1>
        <EightBallForm onNewQuestion={this.handleNewQuestion} />
        <EightBallAnswer answer={this.state.answer} />
      </div>
    );
  }
});
