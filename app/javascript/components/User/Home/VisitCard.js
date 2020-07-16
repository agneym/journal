import React from "react";
import dayjs from "dayjs";

import Button from "components/Common/Button";

function VisitCard({ data }) {
  return (
    <li className="py-2 px-2 flex items-center justify-between">
      <div className="flex-shrink-0 truncate">
        <h3 className="font-medium leading-8 text-gray-900 text-base">
          {data.name}
        </h3>
        <p className="text-gray-500 text-sm">
          {dayjs().to(dayjs(data.entry_at))}
        </p>
      </div>
      <Button colorType="secondary" sizeType="sm">
        EXIT
      </Button>
    </li>
  );
}

export default VisitCard;
