import React from "react";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import SuspenseLoader from "../components/SuspenseLoader";
import OtherPropertyFromOwner from "../components/OtherPropertyFromOwner";
import SimilarProperty from "../components/SimilarProperty";
import DetailOfProperty from "../components/DetailOfProperty";

const PropertyDetail = () => {
  return (
    <div>
      <Nav bg={"bg-black"} />
      <DetailOfProperty />

      <OtherPropertyFromOwner />
      <SimilarProperty />
      <Footer />
    </div>
  );
};

export default PropertyDetail;
