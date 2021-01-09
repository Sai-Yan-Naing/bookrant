import React from "react";

import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
// core components
// import PanelHeader from "components/PanelHeader/PanelHeader.js";

// for form validation
import { ValidationForm, TextInput } from 'react-bootstrap4-form-validation';
import validator from 'validator'
//end validation

import axios from 'axios';


class BookEdit extends React.Component {
  constructor(props) {
      super(props);

      this.state = {title: '',body: '',
        email: "",
        description: "",
        password: "",
        confirmPassword: "",};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
    const value = event.target.value;
      this.setState({
        [event.target.name]: value
      });
  }
    matchPassword = (value) => {
        return value && value === this.state.password;   
    }

  handleSubmit(event) {
  const { title, body } = this.state;
  let bookId = this.props.match.params.id;
    alert('A name was submitted: ' + title + body);
    event.preventDefault();
    const apiUrl = 'https://rails-backend-api-test.herokuapp.com/api/v1/articles/'+bookId;
    axios.patch(apiUrl, { title, body })
          .then((result) => {
            console.log(result)
            alert(result.status);
            this.props.history.push('/admin/books');
          });

  }
  render() {
    return (
      <>
        <div size="sm" />
        <div className="container mt-5">
          <Row className="justify-content-center">
            <Col xs={8}>
              <Card className="mt-5">
                <CardHeader>
                  <CardTitle tag="h4">Edit Book</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="container">
                    <ValidationForm onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit}>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <TextInput name="title" id="title" required
                                value={this.state.title}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="body">Body</label>
                            <TextInput name="body" id="body" minLength="4"
                                value={this.state.body}
                                onChange={this.handleChange}
                            />
                        </div>
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
                            <label htmlFor="description">Description</label>
                            <TextInput name="description" id="description" style={{border: "solid 1px #ccc", borderRadius:"10px"}} multiline required
                                value={this.state.description}
                                onChange={this.handleChange}
                                rows="5"/>
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
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <TextInput name="confirmPassword" id="confirmPassword" type="password" required 
                                validator={this.matchPassword}
                                errorMessage={{required:"Confirm password is required", validator: "Password does not match"}}
                                value={this.state.confirmPassword}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </ValidationForm>
          </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default BookEdit;
