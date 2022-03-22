import React from "react";

const StoreHome = () => {
  return (
    <div className="vw-100 min-vh-100" style={{ backgroundColor: "#F5F5F5" }}>
      {/* Upper Images */}

      <div className="upper-images max-vh-100 row gx-3">
        <div className="w-50 col">
          <img
            src="/images/store/img1.jpg"
            style={{
              height: "100%",
              objectFit: "cover",
            }}
            className="w-100"
            alt="store-img"
          />
        </div>
        <div className="w-50 col">
          <div className="row w-100">
            <img
              className="w-100"
              src="/images/store/img2.jpg"
              alt="store-img"
              style={{
                height: "400px",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="row w-100">
            <div className="col">
              <img
                className="w-100"
                src="/images/store/img3.jpg"
                alt="store-img"
              />
            </div>

            <div className="col">
              <img
                className="w-100"
                src="/images/store/img3.jpg"
                alt="store-img"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}

      <div className="categories p-4">
        <h1 className="my-4"> Categories </h1>

        <div className="category-list row gy-4">
          <div className="category col-3">
            <img
              src="/images/store/img4.jpg"
              style={{
                width: "300px",
                height: "500px",
                objectFit: "cover",
              }}
              alt=""
            />
          </div>

          <div className="category col-3">
            <img
              src="/images/store/img4.jpg"
              style={{
                width: "300px",
                height: "500px",
                objectFit: "cover",
              }}
              alt=""
            />
          </div>

          <div className="category col-3">
            <img
              src="/images/store/img4.jpg"
              style={{
                width: "300px",
                height: "500px",
                objectFit: "cover",
              }}
              alt=""
            />
          </div>

          <div className="category col-3">
            <img
              src="/images/store/img4.jpg"
              style={{
                width: "300px",
                height: "500px",
                objectFit: "cover",
              }}
              alt=""
            />
          </div>

          <div className="category col-3">
            <img
              src="/images/store/img4.jpg"
              style={{
                width: "300px",
                height: "500px",
                objectFit: "cover",
              }}
              alt=""
            />
          </div>

          <div className="category col-3">
            <img
              src="/images/store/img4.jpg"
              style={{
                width: "300px",
                height: "500px",
                objectFit: "cover",
              }}
              alt=""
            />
          </div>

          <div className="category col-3">
            <img
              src="/images/store/img4.jpg"
              style={{
                width: "300px",
                height: "500px",
                objectFit: "cover",
              }}
              alt=""
            />
          </div>

          <div className="category col-3">
            <img
              src="/images/store/img4.jpg"
              style={{
                width: "300px",
                height: "500px",
                objectFit: "cover",
              }}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreHome;
