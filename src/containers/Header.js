import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import FileSaver from 'file-saver'

import PropTypes from 'prop-types';

import { Layout, Button, Icon } from 'antd';
const { Header } = Layout;

import * as ProjectActions from 'actions/projectActions';

class AppHeader extends Component {

  constructor(props) {
  super(props)

  }

  handleSave = () => {
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();

    const json = window.localStorage.state;
    const file = new File( [json], `PLETHEM_${ h}_${ m}_${ s }.json`, { type: "text/plain;charset=utf-8" } );
    FileSaver.saveAs( file );
  }

  selectFile = () => {
    document.getElementById( 'loadprojectfileinput' ).click();
  }

  readFiles = ( input ) => {
    const reader = new FileReader();
    const upload = this.props.uploadProject
    reader.onload = (e) => {
      const project = JSON.parse(reader.result);
      return upload(project)
    }
    reader.readAsText( input.target.files[ 0 ] );
  }

  render() {

    return (
      <Header className="app-header">
        <span className="logo">PLETHEM PRO</span>
        <div className="right-nav">
          <Button type="default" onClick={this.handleSave} icon="download">Save Project</Button>
          <Button type="default" onClick={this.selectFile} icon="upload">Save Project</Button>
        </div>
        <input
          type="file"
          className="file"
          id="loadprojectfileinput"
          name="loadprojectfileinput"
          style={{
            display: 'none'
          }}
          onChange={this.readFiles}/>
      </Header> );
  }
}

AppHeader.propTypes = {
  onPress: PropTypes.func
};

const mapStateToProps = ( state ) => {
  return { state };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({...ProjectActions}, dispatch);
};

export default connect( mapStateToProps, mapDispatchToProps )( AppHeader );
