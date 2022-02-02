import React , {useState, useEffect} from 'react'


const AuthContext = React.createContext({
    isLoggedIn:false,
    onLogout: () => {},
    onLogin : () => {},
})
export const AuthContextProvider = (props) =>{
    useEffect(()=>{
        const storedUserLoginInfo = localStorage.getItem('isLoggedin');
    
        if(storedUserLoginInfo === '1'){
          setIsLoggedIn(true);
        }
      }, [])
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedin')
      setIsLoggedIn(false);
  }
  const loginHandler = () => {
    localStorage.setItem('isLoggedin', '1');
      setIsLoggedIn(true);
  }


    return (
        <AuthContext.Provider value={{
            isLoggedIn : isLoggedIn,
            onLogin : loginHandler,
            onLogout : logoutHandler
            }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;