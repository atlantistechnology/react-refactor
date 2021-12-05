import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

export default function WidgetList() {
  const dispatch = useDispatch();
  const widgets = useSelector((state) => state.widgets);

  // This seems redundant since as far as this component is using, no data is changing so we just end up
  // saving the exact thing we pulled from redux in the first place. I left it in here to match the original.
  const handleSaveWidgets = () => {
    dispatch({type: "SAVE_WIDGETS", widgets})
  }
  
  // not sure the data for loading, so I decided to just show loading if the widgets have not fully loaded
  return (
    <div>
        {!widgets && (<div>Loading...</div>)}
        {widgets.length && widgets.map((widget, i) => {
          return (
            <div key={i}>
              <h1>{widget.title}</h1>
              <p>{widget.text}</p>
            </div>
            )
          })
        }
        <button onClick={handleSaveWidgets}>SAVE</button>
      </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(WidgetList);
