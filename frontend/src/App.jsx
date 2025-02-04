import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserRoutes from "../src/routes/UserRoutes";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<UserRoutes />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
