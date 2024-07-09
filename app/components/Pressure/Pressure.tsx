"use client";

import { useGlobalContext } from '@/app/context/GlobalContext';
import { gauge } from '@/app/utils/Icons';
import { Skeleton } from '@/components/ui/skeleton';
import React from 'react'

function Pressure() {
    const { forecast } = useGlobalContext();

    // check if pressure data is available
    if (
        !forecast ||
        !forecast?.main ||
        !forecast?.main?.pressure
    ) {
        return <Skeleton className="h-[12rem] w-full" />;
    }

    const { pressure } = forecast?.main;
    const getPressure = (pressure: number) => {
        if (pressure < 1000) {
            return "Very low pressure. Expect weather changes.";
        } if (pressure >= 1000 && pressure < 1015) {
            return "Low pressure. Expect weather changes.";
        } if (pressure >= 1015 && pressure < 1025) {
            return "Normal pressure. Expect weather changes.";
        } if (pressure >= 1025 && pressure < 1040) {
            return "High pressure. Expect weather changes.";
        } if (pressure >= 1040) {
            return "Vey high pressure. Expect weather changes.";
        } else {
            return "Unavailable pressure data.";
        }
    };

  return (
    <div className="pt-6 pb-5 px-4 h-[12rem] border border-gray-400 
    rounded-lg flex flex-col gap-8 dark:bg-dark-grey shadow-sm dark:shadow-none">
      <div className="top">
        <h2 className="flex items-center gap-2 font-medium">
           {gauge} Pressure
        </h2>
        <p className="pt-4 text-2xl">
           {pressure} hPa
        </p>
     </div>
     <p className="text-sm">
        {getPressure(pressure)}
      </p>
    </div>
  )
}

export default Pressure
