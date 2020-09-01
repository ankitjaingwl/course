import React, { useEffect } from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';

const Home = () => {
    useEffect(() => {
        document.title = "Home";
    }, []);
    return (
        <div>
            <Jumbotron className="text-center">
                <h1>Learn Code By Doing</h1>
                <p>
                    This is Practice of Jumbotron
                </p> 
                <Container>
                    <Button color="primary-outline">
                        Start Using
                    </Button>
                </Container>
           </Jumbotron>
        </div>
    )
}

export default Home;
