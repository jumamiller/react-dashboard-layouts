import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faBriefcase,
    faPaperPlane,
    faQuestion,
    faImage,
    faTimes
} from "@fortawesome/free-solid-svg-icons";
import { Nav, Button } from "react-bootstrap";
import classNames from "classnames";

class SideBar extends React.Component {
    constructor(props) {
        super(props);

        // Mobile first
        this.state = {
            isOpen: false,
            isMobile: true
        };
    }
    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };
    render() {
        return (
            <div className={classNames("sidebar", { "is-open": this.props.isOpen })}>
                <div className="sidebar-header">
                    <Button
                        variant="link"
                        onClick={this.props.toggle}
                        style={{ color: "#fff" }}
                        className="mt-4"
                    >
                        <FontAwesomeIcon icon={faTimes} pull="right" size="xs" />
                    </Button>
                </div>

                <Nav className="flex-column pt-0">
                    <Nav.Item className="active">
                        <Nav.Link href="/">
                            <FontAwesomeIcon icon={faHome} className="mr-2" />
                            Home
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link href="/">
                            <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                            About
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link href="/">
                            <FontAwesomeIcon icon={faImage} className="mr-2" />
                            Portfolio
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link href="/">
                            <FontAwesomeIcon icon={faQuestion} className="mr-2" />
                            FAQ
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link href="/">
                            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                            Contact
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        );
    }
}
export default SideBar;
