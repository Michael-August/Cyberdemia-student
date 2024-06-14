import { Link } from 'lucide-react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from '../ui/breadcrumb';

const Help = () => {
  return (
    <div>
      <div className="breadcrumbs">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {/* ... */}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="help"></div>
    </div>
  );
};

export default Help;
