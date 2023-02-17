export const addUserToLocalStorage = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
};
export const addEmployerToLocalStorage = (employer) => {
    localStorage.setItem('employer', JSON.stringify(employer));
};

export const removeUserFromLocalStorage = () => {
    localStorage.removeItem('user');

};
export const removeEmployerFromLocalStorage = () => {
    localStorage.removeItem('employer');

};

export const getUserFromLocalStorage = () => {
    const result = localStorage.getItem('user')
    const user = result?JSON.parse(result) :null;
    return user;
}
export const getEmployerFromLocalStorage = () => {
    const result = localStorage.getItem('employer')
    const employer = result?JSON.parse(result) :null;
    return employer;
}