"use client";

import { Card } from "flowbite-react";
import { NavLink } from "react-router";

export default function Component({ image, model, description  , id }) {
  return (
   <NavLink to={`/collection/${id}`}>
     <Card className="max-w-sm justify-items-center">
      <img src={image} alt="image" width={500} height={500} />
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {model}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
        {description}
      </p>
    </Card>
    </NavLink>
    );
}
