import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./Theme";

import './index.css'

import ScrollToTop from "./Components/scroll/ScrollToTop";




import { Provider } from "react-redux";

import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './Redux/store/Store'
import Home from "./Pages/Home";
import {Route, Routes} from 'react-router'
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Footer from "./Components/Footer/Footer";

function App() {
   const [theme, colorMode] = useMode();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            
            <div className="App">
           
              <Box sx={{ bgcolor: theme.palette.bgColor.main }}>
                <Routes>
                  <Route path="/" element={ <Home/>}/>
                  <Route path="/register" element={<Register/>}/>
                  <Route path="/login" element={<Login/>}/>
                </Routes>
               


                <Footer />
                
              </Box>

              <ScrollToTop />
            </div>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </PersistGate>
    </Provider>
  );
}

export default App
