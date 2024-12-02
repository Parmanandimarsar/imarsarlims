export const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result); // Base64 string
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file); // Read file as Base64
    });
  };