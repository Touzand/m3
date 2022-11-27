export const priceFormat = (price) => {
  const formateador = new Intl.NumberFormat("en", {
    style: "currency",
    currency: "BRL",
  });
  const formateado = formateador.format(price);

  return formateado;
};

