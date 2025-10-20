import React from "react"
import { transformStatLabel } from "../utils/helpers"

interface StatBarProps {
  label: string
  value: number
}

const MAX_STAT_VALUE = 150

const StatBar: React.FC<StatBarProps> = ({ label, value }) => {
  const percentage = Math.min((value / MAX_STAT_VALUE) * 100, 100)

  return (
    <div className="mb-4 flex items-end">
      <div className="flex flex-col w-[80%]">
        <div className="text-sm font-medium text-gray-700 w-[40px] mb-2">
          {transformStatLabel(label)}
        </div>
        <div className="w-[90%] bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-red-700 h-2.5 rounded-full"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
      <p className="text-sm font-medium text-gray-700 mt-2">{value}</p>
    </div>
  )
}

export default StatBar
