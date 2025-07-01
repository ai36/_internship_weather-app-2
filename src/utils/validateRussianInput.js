const validateRussianInput = (input) => {
  const russianRegex = /^[-а-яё\s]+$/i;
  return russianRegex.test(input);
};

export default validateRussianInput;
