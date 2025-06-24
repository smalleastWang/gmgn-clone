import { create } from "zustand";

interface IUserStore {
  token: string,
  isLogin: boolean;
  setToken: (value: string) => void;
  setLoginStatus: (value: boolean) => void;
}

export const userStore = create<IUserStore>((set) => ({
  token: localStorage.getItem('token') || '',
  setToken(value: string) {
    set({ token: value })
    if (value) {
      window.localStorage.setItem('token', value.toString())
    } else {
      window.localStorage.removeItem('token')
    }
  },
  isLogin: localStorage.getItem('isLogin') === 'true',
  setLoginStatus: (value: boolean) => {
    set({ isLogin: value })
    if (value) {
      window.localStorage.setItem('isLogin', value.toString())
    } else {
      window.localStorage.removeItem('isLogin')
    }
  },
}));