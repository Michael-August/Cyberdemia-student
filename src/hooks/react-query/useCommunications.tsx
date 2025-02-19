import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { request } from '../request';

export const useGetQAs = (courseId: string) => {
  const query = useQuery(
    'QAs',
    async () => {
      try {
        const config = {
          method: 'get',
          url: `/course/${courseId}/comments`,
        };
        const responseData = await request(config);
        return responseData?.data;
      } catch (error: any) {
        console.error(error);
        toast.error(`${error?.response?.data?.message || error?.message}`);
      }
    },
    {
      enabled: !!courseId, // Prevents automatic execution
    },
  );

  return query;
};

export const useGetQAReplies = (courseId: string, qaId: string) => {
  const query = useQuery(
    ['QAs', qaId],
    async () => {
      try {
        const config = {
          method: 'get',
          url: `course/${courseId}/comment/${qaId}/replies`,
        };
        const responseData = await request(config);
        return responseData?.data;
      } catch (error: any) {
        console.error(error);
        toast.error(`${error?.response?.data?.message || error?.message}`);
      }
    },
    {
      enabled: !!qaId, // Prevents automatic execution
    },
  );

  return query;
};

export const usePostQA = (courseId: string) => {
  return useMutation(
    async (data: any) => {
      const config = {
        method: 'post',
        url: `course/${courseId}/comment`,
        data,
      };
      const response = await request(config);
      return response?.data;
    },
    {
      onError: (error: any) => {
        console.error(error);
        toast.error(
          error?.response?.data?.message ||
            error?.message ||
            'An error occurred',
        );
      },
    },
  );
};

export const useReplyQA = (courseId: string, qaId: string) => {
  return useMutation(
    async (data: any) => {
      const config = {
        method: 'post',
        url: `course/${courseId}/comment/${qaId}/reply`,
        data,
      };
      const response = await request(config);
      return response?.data;
    },
    {
      onError: (error: any) => {
        console.error(error);
        toast.error(
          error?.response?.data?.message ||
            error?.message ||
            'An error occurred',
        );
      },
    },
  );
};

export const useGetCourseAnnouncement = (courseId: string) => {
  const query = useQuery(
    'QAs',
    async () => {
      try {
        const config = {
          method: 'get',
          url: `announcement/course/${courseId}`,
        };
        const responseData = await request(config);
        return responseData?.data;
      } catch (error: any) {
        console.error(error);
        toast.error(`${error?.response?.data?.message || error?.message}`);
      }
    },
    {
      enabled: !!courseId, // Prevents automatic execution
    },
  );

  return query;
};

export const useLike = (courseId: string, qaId: string) => {
  return useMutation(
    async (data: any) => {
      const config = {
        method: 'post',
        url: `course/${courseId}/comment/${qaId}/like`,
        data,
      };
      const response = await request(config);
      return response?.data;
    },
    {
      onError: (error: any) => {
        console.error(error);
        toast.error(
          error?.response?.data?.message ||
            error?.message ||
            'An error occurred',
        );
      },
    },
  );
};
