
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Admin from './Components/Admin';
import Add from './Components/Add';
import Edit from './Components/Edit';
import Pagenotfound from './Components/Pagenotfound';
import View from './Components/View';

function App() {
  return (
    <div className="App">
     <Routes>
                                                   {/* Admin - localhost://3000 */}
          <Route path='' element={<Admin/>}/>
                                                   {/* Add- localhost://3000/add */}
          <Route path='add' element={<Add/>}/>
                                                   {/* Edit -  localhost://3000/edit/56 */}
          <Route path='edit/:id' element={<Edit/>}/>
                                                   {/* view -  localhost://3000/view/56  */}
          <Route path='view/:id' element={<View/>}/>
                                                     {/* Pagenotfound */}
          <Route path='*' element={<Pagenotfound/>}/>
     </Routes>
    </div>
  );
}

export default App;
