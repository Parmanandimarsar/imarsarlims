import { useSnackbar } from 'notistack';

const useNotification = () => {
  const { enqueueSnackbar } = useSnackbar();
  const defaultOptions = {
    autoHideDuration: 3000,
    anchorOrigin: {
      vertical: "top",
      horizontal: "right",
    },
  };
  // Function to show notifications
  const showNotification = (message, variant = "default", options = {}) => {
    enqueueSnackbar(message, { variant, ...defaultOptions,  ...options });
  };

  return showNotification;
};

export default useNotification;
