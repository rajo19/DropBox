import axios from "axios";
import { API_BASE_URL } from "@/config";

export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axios.post(`${API_BASE_URL}/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to upload file", error);
    throw error;
  }
};

export const fetchFiles = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/files`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch files", error);
    throw error;
  }
};

export const downloadFile = async (fileId) => {
  try {
    window.open(`${API_BASE_URL}/files/${fileId}`, "_blank");
  } catch (error) {
    console.error("Failed to download file", error);
    throw error;
  }
};