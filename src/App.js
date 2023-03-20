import { Routes, Route } from "react-router-dom";
import Contacts from './components/Contacts';
import Edit from './components/Contacts/Edit';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Contacts />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
  );
}

export default App;
