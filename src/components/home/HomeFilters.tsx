"use client";
import React from "react";
import { Button } from "../ui/button";

interface Props {
  filters: {
    name: string;
    value: string;
  }[];
}

const HomeFilters = ({ filters }: Props) => {
  const active = "newest";

  return (
    <div className="mt-10 flex-wrap gap-3 md:flex hidden">
      {filters.map((filter, idx) => (
         <Button key={filter.value} onClick={() => {}}
         className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none background-light800_dark300 text-light400_light500 ${active === filter.value 
         ? 'bg-primary-100 text-primary-500' 
         : 'bg-light-800 text-light-500'
       }`}
       >
         {filter.name}
       </Button>
      ))}
    </div>
  );
};

export default HomeFilters;
