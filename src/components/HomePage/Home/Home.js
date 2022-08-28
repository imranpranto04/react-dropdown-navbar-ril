import React from "react";
import { useState } from "react";
import "./Home.scss";

const Home = () => {
  // const [isModal, setIsModal] = useState(true);

  // const handleModal = () => {
  //   setIsModal(true);
  // };
  // const closeModal = () => {
  //   setIsModal(false);
  // };

  return (
    <div className="home">
      <div className="centerText">
        <div className="bigGradientText">Home</div>

        {/* <h3>Modal here</h3>
        {isModal ? (
          <div className="reactModal">
            <div class="">
              <h5 class="modal-title">Modal title</h5>
              <button type="button" onClick={handleModal}></button>
            </div>
            <div class="">
              <p>Modal body text goes here.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary">
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={closeModal}
              >
                Save changes
              </button>
            </div>
          </div>
        ) : (
          ""
        )} */}

        <div style={{ marginTop: "800px" }}>Footer</div>
      </div>
    </div>
  );
};

export default Home;
