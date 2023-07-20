export const getAllUsers = async () => {
    try {
        const response = await fetch("http://localhost:8080/users");
        return await response.json();
    } catch (error) {
        return error;
    }
};

