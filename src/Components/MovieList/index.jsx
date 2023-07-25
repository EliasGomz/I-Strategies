import React, {useState}  from "react";
import CustomModal from "../Modal";
import "./style.css"

const MovieList = ({movies}) => {
  const [show, setShow] = useState(false);
  const [iMovie, setIMovie] = useState(['']);
  const [option, setOption] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const totalPages = Math.ceil(Object.keys(movies).length / itemsPerPage);
  
  const buy = "Buy";
  const rent = "Rent";

  const handleClose = () => setShow(false);

  const handleShow = (movie, state) => {
    setShow(true)
    setIMovie(movie)
    setOption(state)
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const movieArray = Object.values(movies);

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = movieArray.slice(startIndex, endIndex);

  const truncateText = (text, maxLength) => {
    return text?.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };


  return (
    <>
    <div className="mb-5 d-flex flex-row flex-wrap justify-content-center align-items-center">
      {currentItems.map((movie, index) => (
        <>
        <div className="card mb-3 ms-2 movie-list-container" style={{ maxWidth: 400}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
               style={{ width: "100%", height: "100%" }} 
               src={movie.image}
               className="img-fluid rounded-start img"
               alt="..."
               />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{movie?.title}</h5>
                <p className="card-text">{truncateText(movie?.description, 100)}</p>
                <p className="card-text"><small className="text-body-secondary">Stock: {movie?.stock}</small></p>
                <p classNameName="card-text"><small className="text-body-secondary" hidden>Disponibilidad</small></p>
                <p className="card-text d-flex justify-content-between">
                  <a className="btn btn-outline-success fs-6 p-2" href="#" onClick={() => handleShow(movie, rent)}>Rent: ${movie?.rentalPrice}</a>
                  <a className="btn btn-outline-success fs-6 p-2" href="#" onClick={() => handleShow(movie, buy)}>Buy: ${movie?.purchasePrice}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        </>
      ))}
  </div>
    <nav aria-label="Page navigation" className="fixed-pagination mt-3">        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <a className="page-link" href="#" onClick={() => handlePageChange(currentPage - 1)}>
              Previous
            </a>
          </li>
          {Array.from({ length: totalPages }, (_, index) => (
            <li
              key={index + 1}
              className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
            >
              <a className="page-link" href="#" onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </a>
            </li>
          ))}
          <li
            className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
          >
            <a className="page-link" href="#" onClick={() => handlePageChange(currentPage + 1)}>
              Next
            </a>
          </li>
        </ul>
      </nav>

      <CustomModal show={show} handleClose={handleClose} movie={iMovie} option={option}/>
    </>
  );
};

export default MovieList;
