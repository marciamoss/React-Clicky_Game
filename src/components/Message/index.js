import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function Message(props) {
    //conditional styling for win and lose
    let msgdeco;
    if(props.msg==="You Lost, Try Again!"){
        console.log("here");
        msgdeco= {
            color: "red",
            textAlign: "center",
            fontWeight: "bold"
          }
    }else{
        msgdeco= {
            color: "blue",
            textAlign: "center",
            fontWeight: "bold"
          }
    }
    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body style={msgdeco}>{props.msg} <br/>Your Current Score: {props.currentScore}, <br/>Top Score: {props.topScore}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={props.handleClose}>
                    Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Message;