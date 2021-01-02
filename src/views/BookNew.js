import React from "react";

import { Route, Switch, Redirect,useHistory  } from "react-router-dom";

import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col,
  Form,
  FormGroup,Label,Input,FormText,Button
} from "reactstrap";
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

import { thead, tbody } from "variables/general";
import Books from './Books';
import axios from 'axios';
class BookNew extends React.Component{
	constructor(props) {
      super(props);

      this.state = {title: '',body: ''};
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
		    const apiUrl = 'https://rails-backend-api-test.herokuapp.com/api/v1/articles/';
		    axios.post(apiUrl, { title, body })
		          .then((result) => {
		            console.log(result);
		            alert(result.status);
		            this.props.history.push('/admin/books');
		          });
  		}

	  render() {
    return (
      <>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Add New Book</CardTitle>
                </CardHeader>
                <CardBody>
                	<div className="row justify-content-center">
	                	<Form className="col-10" onSubmit={this.handleSubmit}>
					      <Row>
					      	<Col xs={6}>
					      		<FormGroup>
							        <Label for="title">Title</Label>
							        <Input type="text" name="title" id="title" placeholder="with a placeholder" value={this.state.title} onChange={this.handleChange} />
							     </FormGroup>
					      	</Col>
					      	<Col xs={6}>
					      		<FormGroup>
							        <Label for="body">Body</Label>
							        <Input type="text" name="body" id="body" placeholder="with a placeholder" value={this.state.body} onChange={this.handleChange} />
							     </FormGroup>
					      	</Col>
					      </Row>
					      <Button>Submit</Button>
					    </Form>
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
export default BookNew;