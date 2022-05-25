import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppThemeProvider } from './themes';
import { Layout } from './components/Layout';
import { HomePlanningPoker } from './screens/HomePlanningPoker';
import { JoinPlanningPoker } from './screens/JoinPlanningPoker';
import { Game } from './screens/Game';
import { AppState } from './context/AppContext';

function App() {
  return (
    <AppState>
      <AppThemeProvider>
        <Layout>
          <Router>
            <Routes>
              <Route path='/' element={<HomePlanningPoker />} />
              <Route path='/join' element={<JoinPlanningPoker />} />
              <Route path='/game/:id' element={<Game />} />
            </Routes>
          </Router>
        </Layout>
      </AppThemeProvider>
    </AppState>

    // </AppContext.Provider>
  );
}

export default App;
