const sanitizeInput = (input: string) => {
  input = input.toLowerCase();
  return input.replace(/[&<>"'=%$#@!/]/g, "");
};

export { sanitizeInput };
