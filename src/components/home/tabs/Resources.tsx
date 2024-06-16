import React from 'react';

function Resources() {
  return (
    <div className="md:w-[55%] flex flex-col gap-7 pb-20 pt-8 px-2 md:px-0">
      <div className="flex flex-col gap-4 text-[12px] text-gray-600">
        Lorem ipsum dolor sit amet consectetur. Ut porttitor et viverra
        malesuada fringilla. Dictum vitae mi nunc a tellus. Faucibus ac id
        pellentesque interdum. Vestibulum convallis velit feugiat aliquam
        pellentesque etiam. In posuere purus aliquet dolor pretium eget dictum.
      </div>
      <div className="w-[60%]">
        <div className="border-[0.5px] border-black p-5 text-medium text-gray-600 text-[12px]  ">
          PDF (4)
        </div>
        <div className="border-[0.5px] border-black p-5 text-medium text-gray-600 text-[12px]  ">
          Google Drive (3)
        </div>
      </div>
    </div>
  );
}

export default Resources;
