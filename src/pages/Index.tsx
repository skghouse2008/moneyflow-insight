import { Header } from "@/components/layout/Header";
import { DashboardOverview } from "@/components/dashboard/DashboardOverview";
import { ExpenseCategories } from "@/components/dashboard/ExpenseCategories";
import { SpendingChart } from "@/components/dashboard/SpendingChart";
import { GoalTracking } from "@/components/dashboard/GoalTracking";
import { BudgetAlerts } from "@/components/dashboard/BudgetAlerts";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="mb-8">
          <div className="hero-gradient rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-3xl font-bold mb-2">Welcome back, John! 👋</h1>
              <p className="text-white/90 mb-6">
                Your AI-powered financial assistant has new insights ready for you.
              </p>
              <div className="flex items-center gap-4">
                <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                  <p className="text-sm text-white/80">Total Net Worth</p>
                  <p className="text-2xl font-bold">$127,592.50</p>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                  <p className="text-sm text-white/80">This Month</p>
                  <p className="text-2xl font-bold text-green-300">+$2,847</p>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* Dashboard Overview */}
        <div className="mb-8">
          <DashboardOverview />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Left Column - Charts */}
          <div className="lg:col-span-2 space-y-8">
            <SpendingChart />
          </div>
          
          {/* Right Column - Categories */}
          <div className="space-y-8">
            <ExpenseCategories />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <GoalTracking />
          <BudgetAlerts />
        </div>
      </main>
    </div>
  );
};

export default Index;
