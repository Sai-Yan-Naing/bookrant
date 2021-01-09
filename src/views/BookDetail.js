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
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

import { thead, tbody } from "variables/general";

class BookDetail extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        items: [],
        isLoaded: false,
      }
    }
  componentDidMount()
  {
    let bookId = this.props.match.params.id;
    fetch("https://rails-backend-api-test.herokuapp.com/api/v1/articles/"+bookId)
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
  {console.log(items)}
    return (
      <>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Detail Table</CardTitle>
                </CardHeader>
                <CardBody>
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <th>ID</th>
                        <td>{items['id']}</td>
                      </tr>
                      <tr>
                        <th>Title</th>
                        <td>{items['title']}</td>
                      </tr>
                      <tr>
                        <th>Price</th>
                        <td>12000Ks</td>
                      </tr>
                      <tr>
                        <th>Description</th>
                        <td>{items['body']}</td>
                      </tr>
                      <tr>
                        <th>Amount</th>
                        <td>{items['body']}</td>
                      </tr>
                    </tbody>
                  </table>
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
                        {thead.map((prop, key) => {
                          if (key === thead.length - 1)
                            return (
                              <th key={key} className="text-right">
                                {prop}
                              </th>
                            );
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tbody.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.data.map((prop, key) => {
                              if (key === thead.length - 1)
                                return (
                                  <td key={key} className="text-right">
                                    {prop}
                                  </td>
                                );
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
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

export default BookDetail;
