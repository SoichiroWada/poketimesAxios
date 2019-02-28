import React from 'react'

function WarningBanner(props) {
    // if (!props.warn) {
    //   return null;
    // }

    if (!props.warn){
        return null;
    }
    else {
        return (
            <div className="warning">
              Warning!
            </div>
        );
    }
  }
  
class Page extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showWarning: true,
        isGoing: true
      };
      this.handleToggleClick = this.handleToggleClick.bind(this);
    }
  
    handleToggleClick() {
      this.setState(state => ({
        showWarning: !state.showWarning
      }));
    }

    handleInputChange() {
      this.setState(state => ({
        isGoing: !state.isGoing
      }));
    }
  
    render() {
      return (
        <div>
          <WarningBanner warn={this.state.showWarning} />
          <button onClick={this.handleToggleClick}>
            {this.state.showWarning ? 'Hide' : 'Show'}
          </button>
        </div>
      );
    }
}

export default Page