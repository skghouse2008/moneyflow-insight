import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Target, AlertTriangle } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: React.ReactNode;
}

const MetricCard = ({ title, value, change, trend, icon }: MetricCardProps) => (
  <Card className="p-6 card-shadow hover:shadow-financial transition-smooth hover:scale-105">
    <div className="flex items-center justify-between mb-4">
      <div className="p-3 rounded-lg bg-primary/10">
        {icon}
      </div>
      <div className={`flex items-center gap-1 text-sm ${
        trend === 'up' ? 'text-success' : 'text-danger'
      }`}>
        {trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
        {change}
      </div>
    </div>
    <h3 className="text-2xl font-bold text-foreground mb-1">{value}</h3>
    <p className="text-muted-foreground text-sm">{title}</p>
  </Card>
);

export const DashboardOverview = () => {
  const metrics = [
    {
      title: "Total Balance",
      value: "$24,592.50",
      change: "+5.2%",
      trend: 'up' as const,
      icon: <TrendingUp className="w-5 h-5 text-primary" />
    },
    {
      title: "Monthly Spending",
      value: "$3,247.80",
      change: "+12.3%",
      trend: 'up' as const,
      icon: <TrendingDown className="w-5 h-5 text-primary" />
    },
    {
      title: "Savings Goal",
      value: "67%",
      change: "+8.1%",
      trend: 'up' as const,
      icon: <Target className="w-5 h-5 text-primary" />
    },
    {
      title: "Budget Alerts",
      value: "3",
      change: "-2",
      trend: 'down' as const,
      icon: <AlertTriangle className="w-5 h-5 text-primary" />
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
};