import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import { QrCodeGenerator } from "./components/Generate/QrCodeGenerator";
import { QrCodeScanner } from "./components/Scan/QrCodeScanner";
import { GenerateHistory } from "./components/GenerateHistory/GenerateHistory";
import { ScanHistory } from "./components/ScanHistory/ScanHistory";

export const Layout = () => {
    return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/qr-code/generate" element={<QrCodeGenerator />} />
        <Route path="/qr-code/scan" element={<QrCodeScanner />} />
        <Route path="/qr-code/generateHistory" element={<GenerateHistory />} />
        <Route path="/qr-code/scanHistory" element={<ScanHistory />} />
      </Routes>
    </div>
  )
}
  