import { useEffect, useState } from "react";

function Currentime() {
  let [time, setTime] = useState(new Date());
  useEffect(() => {
    const countr = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(countr);
  }, []);
  return (
    <div className=" text-lg flex flex-col items-center">
      <div className="text-6xl font-mono">
        {time.toLocaleTimeString()}
      </div>
      <div className="bg-[#252525]/10 h-px w-15 my-8 mx-auto"></div>
      <div>
        {time.toLocaleDateString("en-GB", {
          weekday: "long",
          day: "2-digit",
          month: "long",
          year: "numeric",
        })}
      </div>
      <div className="mt-2 text-[14px] text-[#252525]/45">India Standard Time</div>
    </div>
  );
}
export default Currentime;
