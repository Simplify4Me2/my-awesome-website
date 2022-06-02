import React from "react";

export const Certificates: React.FC = () => {
  return (
    <div className="flex m-10">
      <img
        className="h-60 m-4"
        src="https://images.credly.com/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png"
        alt="Microsoft Certified Azure Fundamentals"
      />
      <img
        className="h-60 m-4"
        src="https://images.credly.com/images/63316b60-f62d-4e51-aacc-c23cb850089c/azure-developer-associate-600x600.png"
        alt="Microsoft Certified Azure Developer"
      />
      <img
        className="h-60 m-4"
        src="https://images.credly.com/images/c3ab66f8-5d59-4afa-a6c2-0ba30a1989ca/CERT-Expert-DevOps-Engineer-600x600.png"
        alt="Microsoft Certified DevOps Engineer"
      />
    </div>
  );
};
