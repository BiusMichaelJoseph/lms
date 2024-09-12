import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import ParentDashboard from './components/ParentDashboard';
import { useAuth } from './context/AuthContext'; // Make sure this path matches your context file

const App = () => {
  const { user } = useAuth();

  return (
    <Router>
      <div className="App">
        <Route path="/parent-dashboard">
          {user && user.role === 'parent' ? <ParentDashboard /> : <Redirect to="/login" />}
        </Route>
        {/* Add other routes here */}
      </div>
    </Router>
  );
};

export default App;
