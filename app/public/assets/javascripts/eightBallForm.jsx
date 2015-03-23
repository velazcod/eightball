var EightBallForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var question = React.findDOMNode(this.refs.question).value.trim();
    if (!question) { return; }
    this.props.onNewQuestion({question: question});
    return;
  },
  render: function() {
    return (
      <form className="eightBallForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Ask me your question." ref="question" />
        <input type="submit" value="Ask" />
      </form>
    );
  }
});
