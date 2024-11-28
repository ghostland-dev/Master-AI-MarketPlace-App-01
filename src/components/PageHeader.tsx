import { FC } from "react";

interface PageHeaderProps {
  title: string;
  description: string;
}

const PageHeader: FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
        {title}
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
};

export default PageHeader;