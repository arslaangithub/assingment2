import React from "react";
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from './Layout_link';
import Home from './HomePage';
import Blogs from './Blogs';
import Contact from './Contact';
import NoPage from './Nopage';
export default function App() {
return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Layout />}>
<Route index element={<Home />} />
<Route path="blogs" element={<Blogs />} />
<Route path="contact" element={<Contact />} />
<Route path="*" element={<NoPage />} />
</Route>
</Routes>
</BrowserRouter>
);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);