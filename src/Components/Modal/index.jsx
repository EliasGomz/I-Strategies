import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { useSelector } from "react-redux";
import ModalError from './modalError';



const CustomModal = ({show, handleClose, movie, option}) => {
  const isLogin = useSelector((state) => state.user.isLogin);

  const error = 'You are not sign In, you need sign In for rent or buy a movie'
  const tittle = 'YOU ARE NOT SIGN IN'

  const handleRentBuyMovie = () => {
    if(isLogin){
      console.log("rent/buy")
    }else{
      handleClose();
      return <ModalError error={error} title={tittle} show={show} handleClose={handleClose} />
    }
  }

  const priceOption = option === 'Rent' ? movie.rentalPrice : movie.purchasePrice;
    
    return(
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header >
            <Modal.Title className='fs-5'>{movie.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className='d-flex flex-row justify-content-center align-items-center'>
          <Col xs={6} md={4}>
            <Image src={movie.image} width={150} height={200} rounded />
          </Col>
          <div className='flex-col'>
            <p>{movie.description}</p>
            <p>You can {option} this movie for: ${priceOption} </p>
          </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => handleRentBuyMovie()}>{option}</Button>
          </Modal.Footer>
        </Modal>
    );
}

export default CustomModal; 