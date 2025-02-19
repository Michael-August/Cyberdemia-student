import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { request } from '../request';

export const useGetCourses = () => {
  const query = useQuery(
    'courses',
    async () => {
      try {
        const config = {
          method: 'get',
          url: 'course',
        };
        const responseData = await request(config);
        return responseData?.data;
      } catch (error: any) {
        console.error(error);
        toast.error(`${error?.response?.data?.message || error?.message}`);
      }
    },
    {
      enabled: false, // Prevents automatic execution
    },
  );

  return query;
};

export const usePersonalCourses = () => {
  const query = useQuery(
    'progress',
    async () => {
      try {
        const config = {
          method: 'get',
          url: 'progress',
        };
        const responseData = await request(config);
        return responseData?.data;
      } catch (error: any) {
        console.error(error);
        toast.error(`${error?.response?.data?.message || error?.message}`);
      }
    },
    {
      enabled: true, // Prevents automatic execution
    },
  );

  return query;
};

export const useGetSingleCourse = (id: string) => {
  const query = useQuery(
    `course-${id}`,
    async () => {
      try {
        const config = {
          method: 'get',
          url: `course/${id}`,
        };
        const responseData = await request(config);
        return responseData?.data;
      } catch (error: any) {
        console.error(error);
        toast.error(`${error?.response?.data?.message || error?.message}`);
      }
    },
    {
      enabled: !!id,
    },
  );

  return query;
};

export const useGetCourseResource = (id: string) => {
  const query = useQuery(
    `resource-${id}`,
    async () => {
      try {
        const config = {
          method: 'get',
          url: `resource/course/${id}`,
        };
        const responseData = await request(config);
        return responseData?.data;
      } catch (error: any) {
        console.error(error);
        toast.error(`${error?.response?.data?.message || error?.message}`);
      }
    },
    {
      enabled: !!id,
    },
  );

  return query;
};

export const usePayCourseSubscription = () => {
  const query = useMutation(`payForCourse`, async (data: any) => {
    try {
      const config = {
        method: 'post',
        url: `payment`,
        data,
      };
      const responseData = await request(config);
      return responseData?.data;
    } catch (error: any) {
      console.error(error);
      toast.error(`${error?.response?.data?.message || error?.message}`);
    }
  });

  return query;
};

export const useGetAssignments = (sectionIds: any) => {
  return useQuery(
    ['assignments', sectionIds],
    async () => {
      try {
        const assignments = await Promise.all(
          sectionIds.map(async (id: string) => {
            const config = {
              method: 'get',
              url: `assignment/section/${id}`, // Update to match your endpoint
            };
            const response = await request(config);
            return { sectionId: id, data: response?.data };
          }),
        );
        return assignments;
      } catch (error: any) {
        console.error(error);
        toast.error(`${error?.response?.data?.message || error?.message}`);
      }
    },
    {
      enabled: sectionIds.length > 0,
    },
  );
};

export const useGetExam = (id: string) => {
  const query = useQuery(
    `exam-${id}`,
    async () => {
      try {
        const config = {
          method: 'get',
          url: `exam/${id}`,
        };
        const responseData = await request(config);
        return responseData?.data;
      } catch (error: any) {
        console.error(error);
        toast.error(`${error?.response?.data?.message || error?.message}`);
      }
    },
    {
      enabled: !!id,
    },
  );

  return query;
};

export const useMarkAsComplete = () => {
  const query = useMutation(`markProgress`, async (data: any) => {
    try {
      const config = {
        method: 'post',
        url: `progress`,
        data,
      };
      const responseData = await request(config);
      return responseData?.data;
    } catch (error: any) {
      console.error(error);
      toast.error(`${error?.response?.data?.message || error?.message}`);
    }
  });

  return query;
};

export const useCourseRating = () => {
  const query = useMutation(`review`, async (data: any) => {
    try {
      const config = {
        method: 'post',
        url: `rating`,
        data,
      };
      const responseData = await request(config);
      return responseData?.data;
    } catch (error: any) {
      console.error(error);
      toast.error(`${error?.response?.data?.message || error?.message}`);
    }
  });

  return query;
};

export const useGetCourseCertificate = (courseId: string) => {
  const query = useQuery(
    `course-cert-${courseId}`,
    async () => {
      try {
        const config = {
          method: 'get',
          url: `certificate/course/${courseId}`,
        };
        const responseData = await request(config);
        return responseData?.data;
      } catch (error: any) {
        console.error(error);
        toast.error(`${error?.response?.data?.message || error?.message}`);
      }
    },
    {
      enabled: !!courseId,
    },
  );

  return query;
};
