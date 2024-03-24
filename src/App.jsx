import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import PaymentSuccessful from "./components/PaymentSuccessful"

function App() {
  return (
    <div className="w-full h-[100vh]">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paymentSuccessful?" element={<PaymentSuccessful />} />
      </Routes>
    </div>
  )
}

export default App
