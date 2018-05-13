// Modules
import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import appHistory from 'appHistory';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import withGracefulUnmount from 'react-graceful-unmount'

// CoinGrid
import CoinGrid from 'coingrid-sdk'

// Stylesheets
import './Example.css';

const MapStateToProps = (store) => {
    return { }
};

const MapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({}, dispatch)
})

export default connect(MapStateToProps, MapDispatchToProps)(
    withGracefulUnmount(class extends React.Component {
      constructor(props){
        super(props);
        this.state = {
        }
      }
      componentDidMount(){
        /** Subscribe to socket data **/
        //CoinGrid.TokenList(this.callback)
      }
      callback = (data) => {
      }
      render() {
        return (
          <div>
            <p>hello world</p>
          </div>
        )
    }
  })
)
