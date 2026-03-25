import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Plans from "@/pages/plans";
import Products from "@/pages/products";
import Affiliates from "@/pages/affiliates";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/planos" component={Plans} />
      <Route path="/produtos" component={Products} />
      <Route path="/afiliados" component={Affiliates} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
