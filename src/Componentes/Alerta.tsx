import Swal from "sweetalert2";

export const Alerta = (
  icono: "success" | "error" | "warning" | "info" | "question",
  title: string,
  text: string
) => {
  Swal.fire({
    icon: icono,
    title: title,
    text: text,
  });
};
