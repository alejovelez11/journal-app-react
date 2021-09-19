export const fileUpload = async (file) => {
  const cloudurl = `	https://api.cloudinary.com/v1_1/draqsqzlf/upload`;
  const formData = new FormData();
  formData.append('upload_preset', 'react-journal')
  formData.append('file', file)
  try {
    const response = await fetch(cloudurl, {
      method: 'POST',
      body: formData
    })
    if (response.ok) {
      const cloudRes = await response.json();
      return cloudRes.secure_url;
    } else {
      throw await response.json()
    }
  } catch (error) {
    throw error;
  }
}