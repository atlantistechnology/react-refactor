import React, {Component} from 'react';
import { connect } from 'react-redux';

class WidgetList extends Component{
  state = {
    widgets: [],
    loading: true,
  }

  function handleSaveWidgets() {
    this.props.saveWidgets(this.state)
  }

  render(){
    return(
      <div>
        {this.state.loading && (<div>Loading...</div>)}
        {this.state.widgets.each(function(widget) {
          <h1>{widget.title}</h1>
          <p>{widget.text}</p>
        })}
        <button onClick={this.handleSaveWidgets}>SAVE</button>
      </div>
    )
  }

  const mapStateToProps = state => {
    return {
      widgets: state.widgets,
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      saveWidgets: (widgets) => dispatch({type: "SAVE_WIDGETS", widgets})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WidgetList);
