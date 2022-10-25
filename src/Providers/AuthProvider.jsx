import React, {useState,createContext, useMemo} from 'react'


export const AuthContext = createContext()

export default function AuthProvider({children}) {
  const user = JSON.parse(localStorage.getItem('bakery_manager_user')) || {};
    const [auth, setAuth] = useState(user);
    const value = useMemo(() => ({
      auth, setAuth,
    }), [auth]);

  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}
