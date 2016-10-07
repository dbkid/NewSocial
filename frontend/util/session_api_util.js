export const signup = (user, success, error) => {
  $.ajax({
    method: "POST",
    url: "/api/users",
    data: { user: {name: user.name, email: user.email, password: user.password} },
    success,
    error
    }
  );
};

export const logout = (success) => {
  $.ajax({
    method: "DELETE",
    url: "/api/session",
    success
    }
  );
};

export const login = (user, success, error) => {
  $.ajax({
    method: "POST",
    url: "/api/session",
    data: { user: {email: user.email, password: user.password} },
    success,
    error
    }
  );
};

export const deleteUser = (user, success) => {
  $.ajax({
    method: "DELETE",
    url: `/api/users/${user.id}`,
    data: { user: {id: user.id } },
    success
    }
  );
};
