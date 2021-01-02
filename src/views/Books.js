/*!

=========================================================
* Now UI Dashboard React - v1.4.0
=========================================================

* Product page Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import {BrowserRouter,Router,Route,Switch,Link} from 'react-router-dom';
// reactstrap components
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

import { thead, tbody } from "variables/general";
import BookDetail from './BookDetail';
import BookNew from './BookNew';
class RegularTables extends React.Component {
constructor(props) {
      super(props);

      this.state = {
        items: [],
        isLoaded: false,
      }
    }


  componentDidMount()
  {
    fetch('https://rails-backend-api-test.herokuapp.com/api/v1/articles')
    .then(res => res.json())
    .then(json => {
        this.setState({
            isLoaded: true,
            items: json.data,
            });
        });
  }

  deleteBook(itemId) {
    const { items } = this.state;
    const { isLoaded }  = this.state;

    const apiUrl = 'https://rails-backend-api-test.herokuapp.com/api/v1/articles/'+itemId;
    const formData = new FormData();
    formData.append('itemId', itemId);

    const options = {
      method: 'DELETE',
      body: formData
    }

    fetch(apiUrl, options)
      .then(res => res.json())
      .then(
        (json) => {
         alert(json.status);
          this.setState({
            isLoaded: true,
            items: items.filter(item => item.id !== itemId),
          });
        }
      )
  }

      
  render() {
  var { isLoaded, items } = this.state;
  if(!isLoaded){
            return <div>Loading .......</div>;
        }else{
    return (
      <>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Books</CardTitle>
                </CardHeader>
                <CardBody>
                <Link to={'/admin/booknew/'} className="text-success">Add New Book</Link>
                  <Table responsive >
                    <thead className="text-primary">
                      <tr>
                        <th>No.</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th colSpan="3">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map( item => (

                          <tr key={item.id} >
                            <td  className=""><Link to={'/admin/bookdetail/'+item.id}>{item.id}</Link></td>
                            <td  className="">{item.title}</td>
                            <td  className="">{item.body}</td>
                            <td  className="">{item.body}</td>
                            <td  colSpan="3"><Link className="text-warning mr-3" to={'/admin/bookedit/'+item.id}><i className="fas fa-edit"></i></Link><a onClick={() => this.deleteBook(item.id)}><i className="fas fa-trash-alt"></i></a></td>
                          </tr>
                      ))}
                      <tr>
                        <th colSpan="2">Total</th>
                        <th>Count</th>
                        <th>Total</th>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12}>
              <Card className="card-plain">
                <CardHeader>
                  <CardTitle tag="h4">Table on Plain Background</CardTitle>
                  <p className="category"> Here is a subtitle for this table</p>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>No.</th>
                        <th>Book</th>
                        <th>Description</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map( item => (

                          <tr key={item.id} >
                            <td  className=""><Link to={'/details/1'}>{item.id}</Link></td>
                            <td  className="">{item.title}</td>
                            <td  className="">{item.body}</td>
                            <td  className="">{item.body}</td>
                          </tr>
                      ))}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
  }
}

export default RegularTables;
