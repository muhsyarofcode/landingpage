import 'bootstrap/dist/css/bootstrap.min.css';
import RoutePage from './routes/route';
import { Suspense } from 'react';
import LoadingPage from './pages/loadingpage';


function App() {
  return (
    <div className="App">
      <Suspense fallback={<LoadingPage/>}>
        <RoutePage/>
      </Suspense>
    </div>
  );
}

export default App;
