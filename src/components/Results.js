import React, { Component } from 'react';
import '../css/App.css';

import helpers from '../utils/helpers';

class Results extends Component {
	getInitalState: function(){
		return {
			zip: '',
			radius: '1600'
		};
	},

	handleClick: function(item) {
		console.log("clicked");
		console.log(item);

	},

	renderPlaces: function() {
		return this.props.results.docs.map(function(business, index) {
			return (
				<div key={index}>
					<li className='list-group-item'>
						<h3>{businesses[index].name}</h3>
						<p>{businesses[index].location.address1}<br>
							{businesses[index].location.address2}<br>
							{businesses[index].location.address3}<br>
							{businesses[index].location.city}, {businesses[index].location.state} {businesses[index].location.zipcode}<br>
							{businesses[index].phone}</p>

						<a href={businesses[index].url} rel="noopener noreferrer" target="_blank">
                  <button className="btn btn-default ">View on Yelp</button>
            </a>

          	{/*<button className="btn btn-primary" onClick={() => this.handleClick(article)}>Save To Profile</button>*/}

          	<p>Serving: {businesses[index].categories[0].alias} </p>
          </li>
        </div>
			);
		}.bind(this));
	},
	renderContainer: function() {
		return(
			<div className="main-container">
				<div className="row"
					<div className="col-lg-12">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h1 className="panel-title">
                  <strong>
                  <i className="fa fa-list-alt"></i>
                    Results
                  </strong>
                </h1>
              </div>
              <div className="panel-body">
                <ul className="list-group">
                  {this.renderPlaces()}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
		);
	},
	render: function() {
	    return (
	      <div className="Results">
	        <div className="stopasking">
	          <h3>Results will go here</h3>
	        </div>
	      </div>
	    );
	  }
	}
}

export default Results;