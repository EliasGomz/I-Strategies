export const formatCurrency = (value) => {
  let amountValue = value.replace(/[^\d.]/g, "");

  if (amountValue === ".") {
    amountValue = "00" + amountValue;
  }

  if (amountValue.indexOf(".") === -1 && amountValue.length > 2) {
    amountValue = amountValue.slice(0, 2) + "." + amountValue.slice(2, 7);
  }

  const pointIndex = amountValue.indexOf(".");
  if (pointIndex !== -1) {
    amountValue =
      amountValue.slice(0, pointIndex + 1) +
      amountValue.slice(pointIndex + 1).replace(".", "");
  }

  const decimalIndex = amountValue.indexOf(".");
  if (decimalIndex !== -1 && amountValue.slice(decimalIndex + 1).length > 2) {
    amountValue = amountValue.slice(0, decimalIndex + 3);
  }

  return amountValue;
};

export const digitalFormatter = (value) => {
  const formattedValue = value.replace(/[^\d]/g, "");

  return formattedValue;
};
