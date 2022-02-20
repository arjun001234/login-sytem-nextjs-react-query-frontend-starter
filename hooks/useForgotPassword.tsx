import { ClientError } from 'graphql-request';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';
import fetchForgotPassword from '../graphql/fetching/fetchForgotPassword';
import { User } from '../graphql/generated/types';
import { ForgotPasswordRequest } from '../graphql/types/user';
import { appRoutes } from '../helper/constants/pagePaths';


const useForgotPassword = () => {
  const router = useRouter()
  return useMutation<User,ClientError,ForgotPasswordRequest>((variables) => fetchForgotPassword(variables),{
      onSuccess: () => {
        toast.success("Email Sent!")
        router.push(appRoutes.login)
      },
      onError: (error) => {
        console.log(error.response.errors)
        toast.error(error.response.errors![0].message)
      }
  })
};

export default useForgotPassword;
