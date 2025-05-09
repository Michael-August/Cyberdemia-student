import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

import { request } from '../request';

export const useSupport = (router: any) => {
  return useMutation(
    async (data: any) => {
      const config = {
        method: 'post',
        url: '/support/submit-complaint',
        data,
      };

      // Send the request and handle response
      const responseData = await request(config);

      // Check if the response is successful using the 'status' field
      if (!responseData || responseData.status !== true) {
        // If not, throw an error to be caught by the onError callback
        throw new Error('Support request failed!');
      }

      // If successful, return the response data
      return responseData;
    },
    {
      onSuccess: () => {
        toast.success('Support request successful!'); // Notify user of success
        router.push('/student/support'); // Navigate to support page
      },
    },
  );
};
