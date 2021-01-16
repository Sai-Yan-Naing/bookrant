import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
} from "reactstrap";
import Carousel from 'react-bootstrap/Carousel';

// core components
import axios from 'axios';

// for form validation
import { ValidationForm, TextInput } from 'react-bootstrap4-form-validation';
import validator from 'validator'
//end validation

import { setUserSession } from 'components/Common';

class Login extends React.Component {
constructor(props) {
      super(props);

      this.state = {
      	title: '',
      	body: '',
        email: "",
        description: "",
        password: "",
        confirmPassword: "",
    };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
    const value = event.target.value;
      this.setState({
	        [event.target.name]: value
	      });
	  }

	 handleSubmit(event) {
		  const { title, body } = this.state;
		    alert('A name was submitted: ' + title + body);
		    event.preventDefault();
		    const apiUrl = 'https://rails-backend-api-test.herokuapp.com/api/v1/articles/55';
		    axios.get(apiUrl, { title, body })
		          .then((result) => {
		            console.log(result);
		            alert(result.status);
  					setUserSession(result.data.status, result.data.data);
		            this.props.history.push('/admin/dashboard');
		          });
  		}
	render(){
		return(
			<div className="container-fluid" style={{backgroundColor:"#ddd"}}>
				<div className="row justify-content-center">
					<Card className="mt-5 col-md-8">
		                <CardHeader>
		                  <CardTitle tag="h4" className="text-center">Login</CardTitle>
		                </CardHeader>
		                <CardBody>
		                	<div className="row">
			                	<div className="col-md-6 text-success">
			                		<Carousel>
						                <Carousel.Item>
						                <img
						                    className="d-block w-100"
						                    src={require("assets/img/login.png")}
						                    alt="First slide"
						                />
						                <Carousel.Caption className="text-warning">
						                    <h3>NiceSnippets.com slide label</h3>
						                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						                </Carousel.Caption>
						                </Carousel.Item>
						                <Carousel.Item>
						                <img
						                    className="d-block w-100"
						                    src={require("assets/img/login.png")}
						                    alt="Third slide"
						                />
						            
						                <Carousel.Caption className="text-warning">
						                    <h3>NiceSnippets.com slide label</h3>
						                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						                </Carousel.Caption>
						                </Carousel.Item>
						                <Carousel.Item>
						                <img
						                    className="d-block w-100"
						                    src={require("assets/img/login.png")}
						                    alt="Third slide"
						                />
						            
						                <Carousel.Caption className="text-warning">
						                    <h3>NiceSnippets.com slide label</h3>
						                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
						                </Carousel.Caption>
						                </Carousel.Item>
						            </Carousel>
			                	</div>
				                <div className="col-md-6">
					                <ValidationForm onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit}>
				                        <div className="form-group">
				                            <label htmlFor="email">Email</label>
				                            <TextInput name="email" id="email" type="email" 
				                                validator={validator.isEmail} 
				                                errorMessage={{validator:"Please enter a valid email"}}
				                                value={this.state.email}
				                                onChange={this.handleChange}
				                                />
				                        </div>
				                        <div className="form-group">
				                            <label htmlFor="password">Password</label>
				                            <TextInput name="password" id="password" type="password" required 
				                                pattern="(?=.*[A-Z]).{6,}"
				                                errorMessage={{required:"Password is required", pattern: "Password should be at least 6 characters and contains at least one upper case letter"}}
				                                value={this.state.password}
				                                onChange={this.handleChange}
				                            />
				                        </div>
				                        <div className="form-group">
				                            <button className="btn btn-primary">Submit</button>
				                        </div>
				                    </ValidationForm>
								</div>
							</div>
		             	</CardBody>
		            </Card>
		        </div>
	        </div>
		)
	}
}

export default Login;