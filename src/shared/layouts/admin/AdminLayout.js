import React from 'react';

import NavBar from "./sidebar/Navbar";
import SideBar from "./sidebar/SideBar";
import {Outlet} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";

class AdminLayout extends React.Component {
    render() {
        return (
            <Container fluid className="m-0 p-0">
                <Row>
                    <Col>
                        <NavBar/>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <SideBar layout='admin'/>
                    </Col>
                    <Col md={8}>
                        <Outlet/>
                    </Col>
                </Row>
            </Container>
        );
    }

}
export default AdminLayout
