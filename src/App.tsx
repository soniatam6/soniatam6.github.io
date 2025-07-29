import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PortfolioLayout from "@/layouts/PortfolioLayout";
import { Home } from "@/components/sections/Home";
import { PastWork } from "@/components/sections/PastWork";
import { PersonalProjects } from "@/components/sections/PersonalProjects";
import { Writing } from "@/components/sections/Writing";
import ProjectDetail from "@/pages/ProjectDetail";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* ----- main layout with nav + footer ----- */}
          <Route element={<PortfolioLayout />}>

            <Route index element={<Home />} />

            <Route path="past-work">
              <Route index element={<PastWork />} />
              <Route path=":slug" element={<ProjectDetail />} />
            </Route>

            <Route path="personal-projects" element={<PersonalProjects />} />
            <Route path="writing" element={<Writing />} />

          </Route>

          {/* catch‑all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
