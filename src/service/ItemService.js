export const getAllItems = async () => {
  try {
    const response = await fetch("http://localhost:8080/items");
    return await response.json();
  } catch (error) {
    return error;
  }
};
