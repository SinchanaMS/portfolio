import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { VoiceAIPlatformPage } from './pages/case-studies/VoiceAIPlatformPage';
import { DataTablePage } from './pages/case-studies/DataTablePage';
import { WithinPage } from './pages/case-studies/WithinPage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work/voice-ai-platform" element={<VoiceAIPlatformPage />} />
          <Route path="/work/advanced-data-table" element={<DataTablePage />} />
          <Route path="/work/within" element={<WithinPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
