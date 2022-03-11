export const ConvertirDeBase64aImagen = (imagenBase64: string) => {
  var image = new Image();
  image.src = "data:image/png;base64," + imagenBase64;
  return image;
};
