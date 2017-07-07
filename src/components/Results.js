import React, { Component } from 'react';
import '../css/App.css';

import helpers from '../utils/helpers';

class Results extends Component {
	getInitalState(){
		return {
			zipCode: '',
			searchRadius: '1600'
		};
	}

	handleClick(item) {
		console.log("clicked");
		console.log(item);

	}

	/*renderPlaces() {
		console.log(this.props);
		return this.props.results.docs.map(function(business, index) {
		return (
				<div key={index}>
					<li className='list-group-item'>
						<h3>{business[index].name}</h3>
						<p>{business[index].location.address1}<br/>
							{business[index].location.address2}<br/>
							{business[index].location.address3}<br/>
							{business[index].location.city}, {business[index].location.state} {business[index].location.zipcode}<br/>
							{business[index].phone}</p>

						<a href={business[index].url} rel="noopener noreferrer" target="_blank">
                  <button className="btn btn-default ">View on Yelp</button>
            </a>

          	<button className="btn btn-primary" onClick={() => this.handleClick(article)}>Save To Profile</button>

          	<p>Serving: {business[index].categories[0].alias} </p>
          </li>
        </div>
			);
		}.bind(this));
	}

	renderContainer() {
		return(
			<div className="main-container">
				<div className="row">
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
	}*/

	render() {
		// if (!this.props.results.docs) {
	    return (
	      <div className="Results">
	        <div className="stopasking">
	          <h3>Results will go here</h3>
	        </div>
	      </div>
	    );
	   }
	  //  return this.renderContainer();
	  // }
	}


export default Results;