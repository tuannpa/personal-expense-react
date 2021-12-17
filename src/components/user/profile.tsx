import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import MainLayout from '../common/main-layout';

const Profile: React.FC = (): React.ReactElement => {
    return (
        <MainLayout>
            <Row className="mt-5">
                <Col xs={3}>
                <Card>
                    <Card.Body>
                    <div className="d-flex flex-column align-items-center text-center">
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="User avatar" 
                            className="rounded-circle" width="150" />
                        <div className="mt-3">
                            <h4>Tuan Nguyen</h4>
                            <p className="text-secondary mb-1">Full Stack Developer</p>
                            <p className="text-muted font-size-sm">Ho Chi Minh City</p>
                            <p className="text-muted font-size-sm">Total Balance: 28.000.000VND</p>
                            <button className="btn btn-primary">Change Password</button>
                        </div>
                    </div>
                    </Card.Body>
                </Card>
                </Col>

                <Col xs={8}>
                                  
                </Col>    
            </Row>
        </MainLayout>
    );
}

export default Profile;