export const goToHome = (navigate) => {
    navigate("/");
  };
  
  export const goToLogin = (navigate) => {
    navigate("/login");
  };
  
  export const goToFeed = (navigate) => {
    navigate("/login/feed");
  };
  
  export const goToSignup = (navigate) => {
    navigate("/login/signup/");
  }
  
  export const goToSignupFeed = (navigate) => {
    navigate("/login/signup/feed");
  };
  
  export const goToPost = (navigate) => {
  navigate("/login/feed/post/:id")
   }