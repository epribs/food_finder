import React, { Component } from 'react';
import '../css/App.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { Textfield, Slider, Button } from 'react-mdl';


class UserInput extends Component {
  constructor(props) {
        super(props)
        
        this.state = {
            searchRadius: 5,
            zipCode: null
        };
  }
  
  postInput() {
    $.post('userData', this.state, (data) => {
      console.log('data sent: ' + data);
    })
  };

  render() {
    return (
      <div className="UserInput">
        <Textfield
            onChange={(event) => {
              console.log(this.state);
              this.setState({
                zipCode: event.target.value
              })
            }}
            pattern="-?[0-9]*(\.[0-9]+)?"
            error="Please enter a valid zip code"
            label="Zip Code"
            style={{width: '200px'}}
        />
        <div className='sliderWidth'>
          <h6 className='sliderText'>Search a radius of {this.state.searchRadius} miles.</h6>
          <Slider
            onChange={(event) => {
              console.log(this.state);
              this.setState({
                searchRadius: event.target.value
              })
            }}
            min={0}
            max={25}
            defaultValue={5}
          />
        </div>
        <Button raised onClick={postInput}>Submit</Button>

      </div>
    );
  }
}

export default UserInput;