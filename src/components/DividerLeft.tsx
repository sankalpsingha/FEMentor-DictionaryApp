import React from "react";
interface DividerLeftProps {
  name: string;
}
const DividerLeft = ({ name }: DividerLeftProps) => {
  return (
    <div>
      <div className="flex items-center mt-8">
        <div className="mr-5 font-medium italic dark:text-white">{name}</div>
        <div className="flex-1 border-t border-gray-200 dark:border-gray-800" />
      </div>
    </div>
  );
};

export default DividerLeft;
