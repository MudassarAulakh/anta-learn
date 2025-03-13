import React from "react";
import NotificationModalCardArray from "./NotificationModalCardArray";
import NotificationCard from "./NotificationModalCard";

const NotificationModalCardSection = () => {
  return (
    <div className=" h-[100%]">
      {(Array.isArray(NotificationModalCardArray)
        ? NotificationModalCardArray
        : []
      ).map((val, index) => (
        <>
          <div className="border border-gray-300"></div>
          <NotificationCard
            title={val.title}
            img={val.img}
            paragraph={val.paragraph}
            date={val.date}
            key={index}
          />
        </>
      ))}
    </div>
  );
};

export default NotificationModalCardSection;
