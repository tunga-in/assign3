
import React from 'react';
import { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { ThemeContext } from '../../util/context/ThemeContext';


function NoteForm(props){
    const { title, setTitle, subject, setSubject, visibility, setVisibility, submit } = props;
    const { theme } = useContext(ThemeContext);
    

    return (
        <Form onSubmit={ submit } >
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter title" 
                    value={ title }
                    onChange={e => setTitle(e.target.value)} 
                    style={theme.input} 
                    required
                />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Subject</Form.Label>
                <Form.Control 
                    as="textarea" 
                    style={theme.input} 
                    rows={5} 
                    value={ subject }
                    onChange={e => setSubject(e.target.value)} 
                    required
                />
            </Form.Group>

            <div className='form-group'>
                <label htmlFor='visibility'>Visibility</label>
                <select
                    id='visibility' 
                    className='form-control' 
                    style={theme.input}
                    value={ visibility } 
                    onChange={e => setVisibility(e.target.value)}
                >
                    <option value='Private'>Private</option>
                    <option value='Public'>Public</option>
                </select>
            </div>
            <Button variant="success" type="submit">
                Submit
            </Button>
        </Form>
    );
}


export default NoteForm;
