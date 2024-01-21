import { OFFERS_LOGO } from "../utils/constants";

const OfferCard = ({ header, couponCode, description, offerLogo }) => {
  return (
    <>
      <div className="flex flex-col gap-2 w-48 border-2 px-2 py-2.5 rounded-lg flex-shrink-0">
        <div className="flex items-center gap-2">
          <img src={OFFERS_LOGO + offerLogo} alt="" className="w-5" />
          <p className="text-[#686B78] font-bold text-sm">{header}</p>
        </div>
        <div className="flex justify-start text-[#93959F] items-center font-semibold text-xs gap-1">
          <p>{couponCode}</p>
          <p>|</p>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default OfferCard;
