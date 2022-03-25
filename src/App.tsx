import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppThemeProvider } from './themes';
import { Layout } from './components/Layout';
import { HomePlanningPoker } from './screens/HomePlanningPoker';
import { JoinPlanningPoker } from './screens/JoinPlanningPoker';

function App() {
  return (
    <AppThemeProvider>
      <Layout>
        <Router>
          <Routes>
            <Route path='/' element={<HomePlanningPoker />} />
            <Route path='/join' element={<JoinPlanningPoker />} />
            {/* <Route path='/service' component={Service} /> */}
          </Routes>
        </Router>
      </Layout>
    </AppThemeProvider>
  );
}

export default App;
