import React from "react";

function Resources({ resourceData }: any) {

  return (
    <div className="md:w-[55%] flex flex-col gap-7 pb-20 pt-8 px-2 md:px-0">
      <div className="flex flex-col gap-4 text-[12px] text-gray-600">
        This section provides additional resources to enhance your learning
        experience. You can find downloadable files, external links, and other
        materials shared by the instructor. Click on each resource to either
        download or view it in a new tab, depending on the type of resource.
      </div>

      {/* Display each resource */}
      <div className="flex flex-col gap-4">
        {resourceData?.map((resource: any) => (
          <div
            key={resource.id}
            className="border-[0.5px] border-black p-5 text-gray-600 text-[12px]"
          >
            <h3 className="font-bold">{resource.title}</h3>
            <p>
              Type:
              {resource.resourceType === "downloadableFile"
                ? "Downloadable File"
                : "External Link"}
            </p>
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              {resource.resourceType === "downloadableFile"
                ? "Download"
                : "Visit Resource"}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resources;
