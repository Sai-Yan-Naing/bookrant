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
//end validation

import axios from 'axios';


class BookEdit extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        author: '',
        bookname: '',
        type: "",
        qty: "",
        price: "",
        year: "",};
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
  const { author, bookname,type,qty,price,year } = this.state;
  let bookId = this.props.match.params.id;
    event.preventDefault();
    const apiUrl = 'https://rails-backend-api-test.herokuapp.com/api/v1/articles/'+bookId;
    axios.post(apiUrl, {  author, bookname,type,qty,price,year })
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
                            <label htmlFor="author">Author</label>
                            <TextInput name="author" id="author" required
                                value={this.state.author}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="bookname"> Book Name</label>
                            <TextInput name="bookname" id="bookname" minLength="4"
                                value={this.state.bookname}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="type">Type</label>
                            <TextInput name="type" id="type" type="type" required
                                value={this.state.type}
                                onChange={this.handleChange}
                                />
                        </div>
                        <div className="form-group">
                            <label htmlFor="qty">Qty</label>
                            <TextInput name="qty" id="qty" required
                                pattern="[0-9]*"
                                errorMessage={{required:"Qty is required", pattern: "Quantity must be number only"}}
                                value={this.state.qty}
                                onChange={this.handleChange}
                                rows="5"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <TextInput name="price" id="price" type="price" required 
                                pattern="[+-]?\d+(?:[.,]\d+)?"
                                errorMessage={{required:"Price is required", pattern: "Price must be float only"}}
                                value={this.state.price}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="year">Year</label>
                            <TextInput name="year" id="year" type="date" required 
                                value={this.state.year}
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
