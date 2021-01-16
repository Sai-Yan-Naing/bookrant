
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
// import PanelHeader from "components/PanelHeader/PanelHeader.js";

import { thead, tbody } from "variables/general";

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
                  <Table responsive >
                    <thead className="text-primary">
                      <tr>
                        <th>No.</th>
                        <th>Renter</th>
                        <th>Book Name</th>
                        <th>Type</th>
                        <th>RentDate</th>
                        <th>ReturnDate</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map( item => (

                          <tr key={item.id} >
                            <td  className=""><Link to={'/admin/bookdetail/'+item.id}>{item.id}</Link></td>
                            <td  className="">{item.title}</td>
                            <td  className="">{item.title}</td>
                            <td  className="">{item.title}</td>
                            <td  className="">{item.body}</td>
                            <td  className="">{item.body}</td>
                            <td  className="">{item.body}</td>
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
