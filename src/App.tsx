import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import ScrollManager from "./components/site/ScrollManager";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import Pray from "./pages/Pray";
import Moments from "./pages/Moments";
import OurHouse from "./pages/OurHouse";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Addresses from the previous site, sent to their new home.
const redirects: Record<string, string> = {
  "/about": "/our-house",
  "/leadership": "/our-house",
  "/ministry": "/our-house",
  "/ministry/*": "/our-house",
  "/worship": "/#visit",
  "/pastor": "/watch",
  "/apostle": "/watch",
  "/gallery": "/moments",
  "/prayer": "/pray",
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollManager />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/pray" element={<Pray />} />
          <Route path="/moments" element={<Moments />} />
          <Route path="/our-house" element={<OurHouse />} />
          {Object.entries(redirects).map(([from, to]) => (
            <Route key={from} path={from} element={<Navigate to={to} replace />} />
          ))}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
