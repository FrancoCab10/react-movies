import axios from './api';

export const doLogin = async (user, password) => {
  try {
    const { data: session } = await axios.post('/login', { user, password });
  
    sessionStorage.setItem('session', JSON.stringify(session));
    sessionStorage.setItem('token', session.token);
  
    return session;
  } catch(e) {
    return { error: true, message: 'Error while trying to log in' };
  } 
};

export const getSession = () => {
  const session = sessionStorage.getItem('session');
  return session ? JSON.parse(session) : null;
}

export const doLogout = () => {
  sessionStorage.removeItem('session');
  sessionStorage.removeItem('token');
};