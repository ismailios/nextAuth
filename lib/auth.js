import { compare, hash } from "bcryptjs";

export const hachPassword = async (password) => {
  const hachedPassword = await hash(password, 16);
  return hachedPassword;
};

export const verifyPassword = async (password, hashedPassword) => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};
