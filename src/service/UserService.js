export const getAllUsers = () => {
    try {
        const response = fetch("http://localhost:8080/users");
        return response.json();
    } catch (error) {
        return error;
    }
};
