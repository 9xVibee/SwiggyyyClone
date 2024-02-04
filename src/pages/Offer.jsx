import { OfferSkeleton } from "../components/SkeletonLoader";
import ThirdData from "../components/ThirdData";

const Offer = () => {
  return (
    <div className="px-8 sm:px-16 lg:px-24 xl:px-48 mt-8">
      <ThirdData title={"Offer For Today"} Skeleton={OfferSkeleton} />
    </div>
  );
};

export default Offer;
