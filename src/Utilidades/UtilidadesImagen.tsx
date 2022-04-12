export const ConvertirDeBase64aImagen = (imagenBase64: string) => {
  var image = new Image();
  image.src = "data:image/png;base64," + imagenBase64;
  return image;
};

export const convertirDeImagenABase64 = (file: any) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};
