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
        }}
      >
        <img
          className="opacity-25"
          src="/bgMovies/devil.png"
          width={400}
          height={100}
          alt=""
        />
      </div>
    </>
  );
};
