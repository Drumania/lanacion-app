import React, { Fragment } from "react";

const Banners = () => {
  return (
    <Fragment>
      {/* BANNER TOP --> */}
      <div className="banner w-100 --bg-banner">
        <div className="banner --top --desktop"></div>
        <div className="banner --top --tablet"></div>
        <div className="banner --top --mobile"></div>
      </div>
      {/*<!-- BANNER STICKY --> */}
      <div className="banner w-100 --bg-banner">
        <div className="banner --sticky --mobile"></div>
      </div>
    </Fragment>
  );
};

export default Banners;
