"use client";

import React, { createContext, useState } from "react";

interface State {
  loading: boolean;
  data: string | null;
  error: string | null;
}

interface AuthState extends State {
  setAuthState: React.Dispatch<React.SetStateAction<State>>;
}

export const AuthentificationContext = createContext<AuthState>({
  loading: false,
  data: null,
  error: null,
  setAuthState: () => {},
});

export default function AuthContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authState, setAuthState] = useState<State>({
    loading: false,
    data: null,
    error: null,
  });
  return (
    <AuthentificationContext.Provider value={{ ...authState, setAuthState }}>
      {children}
    </AuthentificationContext.Provider>
  );
}
