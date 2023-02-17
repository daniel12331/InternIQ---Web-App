import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const { employer } = useSelector((store) => store.employer);
  if (!employer) {
    return <Navigate to='/registerEmployer' />;
  }
  return children;
};
export default ProtectedRoute;