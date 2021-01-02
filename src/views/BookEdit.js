/*!

=========================================================
* Now UI Dashboard React - v1.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
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
import axios from 'axios';

import { thead, tbody } from "variables/general";

class BookEdit extends React.Component {
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
    const apiUrl = 'https://rails-backend-api-test.herokuapp.com/api/v1/articles/40';
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
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Edit Book</CardTitle>
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

export default BookEdit;
