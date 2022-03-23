import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Button, Modal, Alert} from 'react-bootstrap'

const List = () => {
    const [modal, setModal] = useState({shown: false})
    const [alertVisible, setAlertVisible] = useState(false)

    function handleClick(opt) {
        console.log("Button Clicked")
        setModal({shown: true, content: <>Modal content 1</>})
    }

    function handleCloseModal() {
        setModal({shown: false})
        setAlertVisible(true);
        setTimeout(() => {
            setAlertVisible(false)
        }, 5000)
    }

    return <div>
        <Button onClick={handleClick}>
            Press Me
        </Button>
        <Alert show={alertVisible}>Modal succesfully closed !</Alert>
        <Modal show={modal.shown} onHide={handleCloseModal}>
            <Modal.Header closeButton/>
            <Modal.Body>
                {modal.content}
            </Modal.Body>
        </Modal>
    </div>
}

List.propTypes = {};

List.defaultProps = {};


export default List;
