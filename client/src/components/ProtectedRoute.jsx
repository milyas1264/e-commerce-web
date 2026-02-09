import {useContext} from 'react';
import {Navigate} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';

const ProtectedRoute = ({children, roles}) => {
  const {role} = useContext(AuthContext);

  if(!roles.includes(role)) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
