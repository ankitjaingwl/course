import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Input, Container, Button } from 'reactstrap';

const AddCourse = () => {
    useEffect(() => {
        document.title = "Add Course";
    }, []);
    return (
        <>
            <h1 className="text-center my-3"> Fill Course Detail</h1>
            <Form>
                <FormGroup>
                    <label>Course Id</label>
                    <Input type="text" placeholder="Enter here" name="userId" id='userId' />
                </FormGroup>

                <FormGroup>
                    <label>Course Title</label>
                    <Input type="text" placeholder="Enter title here" id='title' />
                </FormGroup>

                <FormGroup>
                    <label for="description">Course Discription</label>
                    <Input type="textarea" placeholder="Enter discription here" id='discription' 
                    style= {{ height: 150}} />
                </FormGroup>

                <Container className="text-center">
                    <Button color="success">Add Course</Button>
                    <Button color="warning">Clear</Button>
                </Container>
            </Form>
        </>
    );
};

export default AddCourse;
