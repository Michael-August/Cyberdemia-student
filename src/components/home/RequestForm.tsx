import Breadcrumb from '../ui/breadcrumb';

const breadcrumbs = [
  { name: 'Home', url: '/student/home' },
  { name: 'Course and Training Request Form', url: '/student/home' },
];

const RequestForm = () => {
  return (
    <div>
      <Breadcrumb breadcrumbsArray={breadcrumbs} />
    </div>
  );
};

export default RequestForm;
