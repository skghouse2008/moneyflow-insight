import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  ShoppingCart, 
  Car, 
  Home, 
  Utensils, 
  Gamepad2, 
  Heart,
  Plane,
  GraduationCap 
} from "lucide-react";

interface CategoryData {
  name: string;
  amount: number;
  budget: number;
  percentage: number;
  icon: React.ReactNode;
  color: string;
}

export const ExpenseCategories = () => {
  const categories: CategoryData[] = [
    {
      name: "Groceries & Food",
      amount: 847.32,
      budget: 1000,
      percentage: 84.7,
      icon: <ShoppingCart className="w-5 h-5" />,
      color: "text-primary"
    },
    {
      name: "Transportation",
      amount: 425.67,
      budget: 500,
      percentage: 85.1,
      icon: <Car className="w-5 h-5" />,
      color: "text-warning"
    },
    {
      name: "Housing & Utilities",
      amount: 1234.00,
      budget: 1200,
      percentage: 102.8,
      icon: <Home className="w-5 h-5" />,
      color: "text-danger"
    },
    {
      name: "Dining Out",
      amount: 312.45,
      budget: 400,
      percentage: 78.1,
      icon: <Utensils className="w-5 h-5" />,
      color: "text-success"
    },
    {
      name: "Entertainment",
      amount: 189.90,
      budget: 300,
      percentage: 63.3,
      icon: <Gamepad2 className="w-5 h-5" />,
      color: "text-success"
    },
    {
      name: "Healthcare",
      amount: 156.78,
      budget: 250,
      percentage: 62.7,
      icon: <Heart className="w-5 h-5" />,
      color: "text-success"
    }
  ];

  const getProgressColor = (percentage: number) => {
    if (percentage > 100) return "bg-danger";
    if (percentage > 85) return "bg-warning";
    return "bg-success";
  };

  return (
    <Card className="p-6 card-shadow">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground">Expense Categories</h2>
        <p className="text-sm text-muted-foreground">AI Categorized</p>
      </div>
      
      <div className="space-y-4">
        {categories.map((category, index) => (
          <div key={index} className="flex items-center justify-between p-4 rounded-lg hover:bg-card-hover transition-smooth">
            <div className="flex items-center gap-4 flex-1">
              <div className={`p-2 rounded-lg bg-primary/10 ${category.color}`}>
                {category.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-foreground">{category.name}</h3>
                  <div className="text-right">
                    <p className="font-semibold text-foreground">${category.amount.toFixed(2)}</p>
                    <p className="text-xs text-muted-foreground">of ${category.budget}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Progress 
                    value={Math.min(category.percentage, 100)} 
                    className="flex-1 h-2"
                  />
                  <span className={`text-sm font-medium ${
                    category.percentage > 100 ? 'text-danger' :
                    category.percentage > 85 ? 'text-warning' : 'text-success'
                  }`}>
                    {category.percentage.toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};