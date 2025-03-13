"use client"
import React from "react";
import CategoriesSectionCardArray from "./CategoriesSectionCardArray";

const CategoriesSectionCard = () => {
  return (
    <div className="bg-white p-10 grid grid-cols-3 rounded-xl">
      {CategoriesSectionCardArray.map((card, index) => (
        <div key={index} className="p-4">
          <h2 className="text-xl font-bold pb-3">{card.title}</h2>
          <ul className="text-[#949494]">
            {card.li1 && <li>{card.li1}</li>}
            {card.li2 && <li>{card.li2}</li>}
            {card.li3 && <li>{card.li3}</li>}
            {card.li4 && <li>{card.li4}</li>}
            {card.li5 && <li>{card.li5}</li>}
            {card.li6 && <li>{card.li6}</li>}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CategoriesSectionCard;
