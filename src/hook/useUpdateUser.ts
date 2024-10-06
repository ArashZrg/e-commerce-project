import { useMutation } from 'react-query';
import authService from '../services/authService';
import { useNavigate } from 'react-router-dom';
import { IUser } from '../types/authTypes';

export const useUpdateUser = () => {

    const navigate = useNavigate()
    return useMutation((data: { id: string; updateparam: Partial<IUser> }) =>authService.updateUser(data.id, data.updateparam),  
      
        {onSuccess: () => {
            setTimeout(() => {
                navigate(0)
            },  1000)
        },
        onError: (error) => {
            console.error('Registration failed', error);
        },
    });
};