const login_url = process.env.api_url + "/auths/sign_in";
const permission_url = process.env.api_url + "/users-permissions/roles";

const authProvider = {
  // called when the user attempts to log in
  login: ({ username, password }) => {
    const request = new Request('http://localhost:5000/users/sign_in', {
      method: 'POST',
      body: JSON.stringify({ 
        "email": username,
        "password": password
       }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    return fetch(request)
      .then((response) => {
        if (response.status != 200) {
          throw new Error('Username/password not match');
        }
        return response.json();
      })
      .then((auth) => {                
        // const decodedToken = decodeJwt(token);
        // console.log(decodedToken)
        localStorage.setItem("token", auth.token);
        localStorage.setItem("user", auth.name);   
        return Promise.resolve();    
      });
  },
  // called when the user clicks on the logout button
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return localStorage.getItem("token") ? Promise.resolve() : Promise.reject();
  },
  getIdentity: () => {
    try {
      // const { id, fullName, avatar } = JSON.parse(localStorage.getItem('user'));
      // return Promise.resolve({ 23, 'Admin', '' });
    } catch (error) {
        return Promise.reject(error);
    }
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: (object) => {    
  //   console.log('Read permission', object)
    // const user = JSON.parse(localStorage.getItem('user'));
    // console.log('user', user)
    // const request = new Request(permission_url, {
    //   method: 'GET',
    //   headers: new Headers({ 
    //     "Content-Type": "application/json",
    //     "Authorization": `Bearer ${localStorage.getItem("jwt")}`
    //   })     
    // });
    // return fetch(request)
    //   .then((response) => {
    //     return Promise.resolve();
      // });  
  },
  getIdentity: () => Promise.resolve(),
};

export default authProvider;