/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import AccordianDetails from "./AccordianDetails";

const SelectedTagData = ({ tagData }) => {
  return (
    <div className="h-full w-full overflow-y-scroll cws">
      {tagData.map((val) => {
        if (val.options.length == 0)
          return (
            <AccordianDetails
              key={val.id}
              title={val.title}
              description={val.description}
            />
          );
      })}
    </div>
  );
};

export default SelectedTagData;
