import { useAppDispatch, useAppSelector } from "../../Features/Store/Store";

export const useToast = () => {
  const toast = useAppSelector((state) => {
    return state.toast.toast;
  });

  const message = useAppSelector((state) => {
    return state.toast.message;
  });
  const dispatch = useAppDispatch();

  return { dispatch, toast, message };
};
