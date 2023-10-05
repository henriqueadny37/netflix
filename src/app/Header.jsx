export const Header = () => {
  return (
    <>
      <div className="d-flex justify-content-end gap-2 pt-2 p-2">
        <img className="" src="/icons/battery.svg" alt="" />
        <img src="/icons/wifi.svg" alt="" />
        <img src="icons/signal.svg" alt="" />
      </div>
      <div className="d-flex">
        <img src="/metflix-mobile.png" alt="" width={100} />
        <div className="d-flex align-items-center gap-4">
          <div className="">TV Shows</div>
          <div className="">Movies</div>
          <div className="">
            Categories
            <img
              className="ms-2"
              src="/icons/arrow-down.svg"
              alt="Image"
              width={15}
            />
          </div>
        </div>
      </div>
      <div
        className="position-relative"
        style={{
          height: "800px",
          width: "100%",
          backgroundImage: "url('/bgMovies/devil-in-ohio-copy.png' )",
          backgroundSize: "160%",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          paddingTop: "90%",
        }}
      >
        <div
          className="d-flex position-absolute start-50 translate-middle bg-transparent"
          style={{
            top: "65%",
          }}
        >
          <img
            src="/bgMovies/logo-netflix.png"
            alt="img-netflix"
            width={20}
            height={30}
            className="mt-3"
          />
          <p className="mt-3 bg-transparent text-white-50 m-2">S E R I E S</p>
        </div>

        <img
          style={{
            marginTop: "50%",
          }}
          className="opacity-25"
          src="/bgMovies/devil.png"
          width={400}
          height={100}
          alt=""
        />
        <div className=" d-flex justify-content-center bg-info.bg-gradient">
          TV Mysteries
          <img
            src="/icons/circle.svg"
            alt="circle"
            width={6}
            height={6}
            className="mt-2 m-1"
          />
          Based on Books
        </div>
        <div
          className="d-flex justify-content-between flex-wrap"
          style={{
            textAlign: "center",
          }}
        >
          <img
            src="/icons/plus.svg"
            alt="image-plus"
            width={20}
            className="ms-5"
          />
          <button
            type="button"
            class="btn btn-light mt-2 fs-4 fw-semibold"
            style={{ width: "30%" }}
          >
            Play
          </button>

          <img
            src="/icons/info.svg"
            alt="image-info"
            width={20}
            className="me-5"
          />
        </div>
        <div className="d-flex justify-content-between">
          <div className="ms-5 mb-5">My List</div>
          <div className="me-5">Info</div>
        </div>
        <div className="fs-4 fw-semibold">Popular on Netflix</div>
        <div
          className="d-flex justify-content-center fs-2 gap-3"
          style={{ height: "130px" }}
        >
          <div className="w-25 bg-secondary p-4 h-100 rounded-1"></div>
          <div className="w-25 bg-secondary p-4 h-100 rounded-1"></div>
          <div className="w-25 bg-secondary p-4 h-100 rounded-1"></div>
        </div>
        <div
          className="w-100 bg-black"
          style={{
            height: "80px",
          }}
        ></div>
      </div>
    </>
  );
};
