/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useState } from "react";
import SelectedTagData from "../components/SelectedTagData";
import { HelpAndSupportSkeleton } from "../components/SkeletonLoader";

const tags = ["Partner Onboarding", "Legal", "FAQS"];
const Help = () => {
  const [loading, setLoading] = useState(false);
  const [selectedTag, setSelectedTag] = useState("Partner Onboarding");
  const [tagData, setTagData] = useState([]);

  // fetching the data based on the selected tag
  const fetchingTagData = async (tag) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://www.swiggy.com/dapi/support/issues/${tag}`
      );

      const data = await res.json();
      console.log(data);
      setTagData(data?.data?.issues?.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  // calling the fetching data function
  useEffect(() => {
    // filtering the tag Name
    let tag = "";
    if (selectedTag == "Partner Onboarding") tag = "partner-onboarding";
    else if (selectedTag == "FAQS") tag = "faq";
    else tag = selectedTag.toLowerCase();

    fetchingTagData(tag);
  }, [selectedTag]);

  return (
    <div className="h-[120vh] py-20 w-full bg-[#37718E] flex justify-center items-center">
      <div className="w-[85%] h-[100%] flex flex-col gap-8 mb-20">
        <div className="text-white ml-14">
          <h1 className="text-3xl font-bold">Help & Support</h1>
          <p>Let's take a step ahead and help you better.</p>
        </div>
        <div className="w-full h-full bg-white flex justify-center items-center gap-4">
          <div className="h-[95%] bg-[#EDF1F7] w-[20%] pt-4 flex flex-col gap-4 items-end">
            {tags.map((val, idx) => {
              return (
                <p
                  key={val}
                  className={`transition-all duration-300 py-6 w-[90%] text-center cursor-pointer font-bold ${
                    selectedTag === val ? "bg-white shadow-sm" : ""
                  }`}
                  onClick={() => setSelectedTag(val)}
                >
                  {val}
                </p>
              );
            })}
          </div>
          <div className="w-[75%] h-[90%] flex flex-col gap-4 p-8 overflow-y-hidden">
            <h1 className="text-2xl font-bold">{selectedTag}</h1>
            {loading ? (
              <HelpAndSupportSkeleton />
            ) : (
              <SelectedTagData tagData={tagData} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
