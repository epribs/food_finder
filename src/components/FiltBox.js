import React, { Component } from 'react';
import '../css/App.css';

class FiltBox extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col s12 m6'>
          <div className='card'>
            <div className='card-content'>
              <span className='card-title'>Filter Results</span>
                <ul>
                  <li>This is an item</li>
                  <li>This is an item</li>
                  <li>This is an item</li>
                  
                </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FiltBox;
