
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
            items: json,
            });
        });
  }
  render() {
  var { isLoaded, items } = this.state;
  if(!isLoaded){
            return <div>Loading .......</div>;
        }else{
    return (
      <>
        <div size="sm" />
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Report Table</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive bordered >
                    <thead className="text-primary">
                      <tr>
                        <td>No.</td>
                        <td>Book Title</td>
                        <td>Price</td>
                        <td>Count</td>
                        <td>Total</td>
                      </tr>
                    </thead>
                    <tbody>
                      {items.data.map( item => (

                          <tr key={item.id} >
                            <td  className=""><Link to={'/details/1'}>{item.id}</Link></td>
                            <td  className="">{item.title}</td>
                            <td  className="">{item.body}</td>
                            <td  className="">{item.body}</td>
                            <td  className="">{item.body}</td>
                          </tr>
                      ))}
                      <tr>
                        <th colSpan="3">Total</th>
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
