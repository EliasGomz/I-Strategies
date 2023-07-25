import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom'

const ModalError = ({error, title, handleClose, show}) => {
  const history = useNavigate();

  const handleSignIn = () => {
    history('/Auth')
  };

  return (
     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header >
          <Modal.Title className='fs-5'>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex flex-row justify-content-center align-items-center'>
          <p>{error}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSignIn} >Sign In</Button>
        </Modal.Footer>
      </Modal>
  );
}

export default ModalError;