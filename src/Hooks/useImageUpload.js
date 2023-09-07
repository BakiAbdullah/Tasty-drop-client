import { useState } from "react";
import axios from "axios";

export const useImageUpload = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const uploadImage = async (imageFile) => {
    try {
      setIsLoading(true);
      setError(null);

      const url = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMAGEBB_KEY
      }`;
      const formData = new FormData();
      formData.append("image", imageFile);

      const response = await axios.post(url, formData);
      const imgUrl = response.data.data.display_url;

      setImageUrl(imgUrl);
      setIsLoading(false);

      return imgUrl;
    } catch (err) {
      setError(err);
      setIsLoading(false);
      throw err;
    }
  };

  return { imageUrl, isLoading, error, uploadImage };
};
