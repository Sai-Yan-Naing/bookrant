import React from "react";
import {Link} from 'react-router-dom';
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

import { thead, tbody } from "variables/general";
class RegularTables extends React.Component {
constructor(props) {
      super(props);

      this.state = {
        items: [],
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
            return <div className="mt-5 row justify-content-center"><div className="mt-5 spinner-border" style={{width:"4rem",height:"4rem", fontSize:"20px"}}></div></div>
          ;
        }else{
    return (
      <>
        <div size="sm" />
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
          </Row>
      </>
    );
  }
  }
}

export default RegularTables;
