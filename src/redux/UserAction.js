export const addUsers = (user) => {
  return {
    type: "ADD_USERS",
    payload: user,
  };
};

export const updateUser = (user) => {
  return {
    type: "UPDATE_USERS",
    payload: user,
  };
};
