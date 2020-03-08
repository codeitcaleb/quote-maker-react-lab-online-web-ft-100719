import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'
class Quotes extends Component {

  render() {
    const renderQuotes = this.props.quotes.map(quote => {
      <QuoteCard 
          key={quote.id}
          quote={quote}
          removeQuote={this.props.removeQuote(quote.id)}
          upvoteQuote={this.props.upvoteQuote(quote.id)}
          downvoteQuote={this.props.downvoteQuote(quote.id)}
      />
    })

    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {/*  TODO: Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes */}
              {renderQuotes}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { quotes: state.quotes }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeQuote: (quoteId) => dispatch(removeQuote(quoteId)),
    upvoteQuote: (quoteId) => dispatch(upvoteQuote(quoteId)),
    downvoteQuote: (quoteId) => dispatch(downvoteQuote(quoteId))
  }
}

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps )(Quotes);
