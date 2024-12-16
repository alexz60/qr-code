import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import { QrCodeGenerator } from "./components/Generate/QrCodeGenerator";
import { QrCodeScanner } from "./components/Scan/QrCodeScanner";
import { History } from "./components/History/History";
import { GENERATE_DATA, SCAN_DATA } from "./constants";

export const Layout = () => {
    return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/generate" element={<QrCodeGenerator />} />
        <Route path="/scan" element={<QrCodeScanner />} />
        <Route path="/generateHistory" element={<History key_data={GENERATE_DATA} />} />
        <Route path="/scanHistory" element={<History key_data={{SCAN_DATA}} />} />
      </Routes>
    </div>
  )
}
  