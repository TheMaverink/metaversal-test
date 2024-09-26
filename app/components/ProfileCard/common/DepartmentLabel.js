import React from 'react';

import { Heading4 } from '../../typography';

const DepartmentLabel = ({ children }) => {
  return (
    <div className="py-[6px] px-[12px] rounded-[12px] bg-[#E5F4FF] inline-block">
      <Heading4 style={{ color: ' #0077CC' }}>{children}</Heading4>
    </div>
  );
};

export default DepartmentLabel;
