import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { request } from '../request';

export const useGetPayments = () => {
  const query = useQuery('payments', async () => {
    try {
      const config = {
        method: 'get',
        url: 'payment/payment-history',
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
