import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class NameList extends React.Component {
  render() {
    return(
      <div className="name-box">
        <h3>Name List</h3>
        <h4 className="name-count">2 entries</h4>
        <div className="name-list">
          <Name
            name= "Bob Belcher" title= "Burgerboss"/>
          <Name
            name= "Tina Belcher" title= "Horse Whisperer"/>
        </div>
      </div>
    );
  }
}

class Name extends React.Component {
  render() {
    return(
      <div className="name">
        <p className="name-header">
          {this.props.name}
        </p>
        <p className="name-body">
          {this.props.title}
        </p>
        <div className="name-actions">
          <a href="#">Delete name</a>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<NameList />, document.getElementById('container'));
