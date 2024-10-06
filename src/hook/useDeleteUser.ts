import { useMutation } from "react-query";
import authService from "../services/authService";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const useDeleteUser = () => {
  const navigate = useNavigate();
  return useMutation(authService.deleteUserById, {
    onSuccess: () => {
      setTimeout(() => {
        navigate("/users");
      }, 1000);
    },
    onError: (error) => {
      toast.success("failed");

      console.error("Registration failed", error);
    },
  });
};
