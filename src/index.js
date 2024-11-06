import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import MainComponent from './components/MainComponent';
import store from './store/store';

const theme = createTheme();

function Main() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MainComponent/>
      </ThemeProvider>
    </Provider>
  );
}
  

// Add a request interceptor
axios.interceptors.request.use(
  config => {
	// Do something before request is sent  
    return config;
  },
  error => {
	// Do something with request error
    Promise.reject(error)
  });

// Add a response interceptor
axios.interceptors.response.use((response) => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, error => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  if (error && error.response) {
    const status = error.response.status;
    console.log('Status', status);
    console.error(error);
  }
  return Promise.reject(error);
});

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Main />);