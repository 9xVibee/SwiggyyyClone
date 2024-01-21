import { Skeleton } from "primereact/skeleton";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";

export const CircleSkeleton = () => {
  return (
    <>
      <div className="my-10 border-b-2 pb-8 flex flex-col gap-8">
        <Skeleton height="2rem" width="16rem" className="mb-2"></Skeleton>

        <div className="flex gap-8 overflow-hidden">
          {Array(7)
            .fill("")
            .map((e, index) => (
              <Skeleton
                shape="circle"
                size="8rem"
                key={index}
                className=" flex-shrink-0"
              ></Skeleton>
            ))}
        </div>
      </div>
    </>
  );
};

export const RectangleSkeleton = () => {
  return (
    <>
      <div className="mt-12 border-b-2 pb-10 flex flex-col gap-8">
        <Skeleton height="2rem" width="16rem" className="mb-2"></Skeleton>

        <div className="flex gap-8 overflow-hidden">
          {Array(4)
            .fill("")
            .map((e, index) => (
              <Skeleton
                width="18rem"
                height="11rem"
                borderRadius="8px"
                key={index}
                className=" flex-shrink-0"
              ></Skeleton>
            ))}
        </div>
      </div>
    </>
  );
};
