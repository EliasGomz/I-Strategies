import React, {useState} from "react";
import { formatCurrency, digitalFormatter } from "../../Utils/priceFormatter";
import { Post } from "../../Axios/axiosMethod";
import { PathMovies } from "../../Const";

const EditMovies = () => {
    const [purchasePrice, setPurchasePrice] = useState("");
    const [rentalPrice, setRentalPrice] = useState("");
    const [stockValue, setStockValue] = useState("");

    const handlePurchasePriceChange = (e) => {
        const value = e.target.value;
        setPurchasePrice(formatCurrency(value));
      };
    
      const handleRentalPriceChange = (e) => {
        const value = e.target.value;
        setRentalPrice(formatCurrency(value));
      };

      const handleStockChange = (e) => {
        const inputValue = e.target.value;
        const formattedValue = digitalFormatter(inputValue);
        setStockValue(formattedValue);
      };

      const handleSubmit = async(e) => {
        e.preventDefault();

        const availabilityValue = e.target.Availability.value;
    
        if (availabilityValue === "") {
          alert("Please select an option for Availability.");
          return;
        }
        if (availabilityValue === "true" && /^0{1,4}$/.test(stockValue)) {
            alert("Stock cannot be empty when availability is true.");
            return;
        }    
        if (availabilityValue === "false" && parseInt(stockValue, 4) > 0) {
            alert("Availability cannot be false if there is stock.");
            return;
          }
        
        const formData = {
            title: e.target.Title.value,
            image: e.target.Image.value,
            stock: stockValue,
            availability: e.target.Availability.value,
            purchasePrice: purchasePrice, 
            rentalPrice: rentalPrice, 
            description: e.target.Description.value,
        };

        const path = PathMovies;
        const data = formData;

        await Post({ path, data }).then((rest) => {
            if(rest.success){
                window.location.reload();
            }else{
                alert(rest.error.code)
            }
        })
             
      };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{height: '100vh', width: '100%', background: "#566573"}}>
        <div className="container border border-2 rounded">  
            <div className="contact-form__wrapper p-4 order-lg-1">
                <form action="#" className="contact-form form-validate" onSubmit={handleSubmit} >
                    <div className="row">
                        <div className="col-sm-6 mb-3">
                            <div className="form-group">
                                <label className="required-field" for="Title">Title</label>
                                <input type="text" className="form-control" id="Title" maxLength={70} name="Title" required placeholder="Movie Title" />
                            </div>
                        </div>
                        <div className="col-sm-6 mb-3">
                            <div className="form-group">
                                <label className="required-field" for="Image">Image(url)</label>
                                <input type="text" className="form-control" id="Image" name="Image" required placeholder="https://url_image.com" />
                            </div>
                        </div>
                        <div className="col-sm-6 mb-3">
                            <div className="form-group">
                                <label className="required-field" for="Stock">Stock</label>
                                <input type="text" className="form-control" id="Stock" name="Stock" required placeholder="00" maxLength={4} value={stockValue}
                                onChange={handleStockChange} />
                            </div>
                        </div>
    
                        <div className="col-sm-6 mb-3">
                            <div className="form-group">
                                <label for="Availability">Availability</label>
                                <select className="form-control" id="Availability" name="Availability" class="form-select">
                                    <option disabled selected value=''>Select Option</option>
                                    <option value='true'>true</option>
                                    <option value='false'>false</option>
                                </select>
                            </div>
                        </div>
    
                        <div className="col-sm-6 mb-3">
                            <div className="form-group">
                                <label className="required-field" for="PurchasePrice">Purchase price</label>
                                <input type="text" className="form-control" id="PurchasePrice" required name="PurchasePrice" placeholder="$00.00"  value={purchasePrice} onChange={handlePurchasePriceChange}/>
                            </div>
                        </div>
    
                        <div className="col-sm-6 mb-3">
                            <div className="form-group">
                                <label for="RentalPrice">Rental price</label>
                                <input type="tel" className="form-control" id="RentalPrice" required name="RentalPrice" placeholder="$00.00" value={rentalPrice} onChange={handleRentalPriceChange} />
                            </div>
                        </div>
    
                        <div className="col-sm-12 mb-3">
                            <div className="form-group">
                                <label className="required-field" for="Description">Description</label>
                                <textarea className="form-control" id="Description" name="Description" required rows="4" maxLength={300} placeholder="Movie Description..." ></textarea>
                            </div>
                        </div>
    
                        <div className="col-sm-12 mb-3">
                            <button type="submit" name="submit" className="btn btn-primary">Add Movie</button>
                        </div>
    
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
}

export default EditMovies;