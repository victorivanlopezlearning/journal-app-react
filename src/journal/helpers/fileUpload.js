
export const fileUpload = async (file) => {

  if (!file) throw new Error('Hace falta el archivo a subir');

  const cloudURL = 'https://api.cloudinary.com/v1_1/dvpwpj1x0/upload';
  const formData = new FormData();
  formData.append('upload_preset', 'journal-react');
  formData.append('file', file);

  try {
    const resp = await fetch(cloudURL, {
      method: 'POST',
      body: formData,
    });

    if (!resp.ok) throw new Error('No se pudo subir la imagen');

    const cloudResp = await resp.json();
    return cloudResp.secure_url;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
}