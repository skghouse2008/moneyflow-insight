import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Target, Plus, TrendingUp, Calendar } from "lucide-react";

interface Goal {
  id: number;
  title: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
  category: string;
  priority: 'high' | 'medium' | 'low';
}

export const GoalTracking = () => {
  const goals: Goal[] = [
    {
      id: 1,
      title: "Emergency Fund",
      targetAmount: 10000,
      currentAmount: 6750,
      deadline: "Dec 2024",
      category: "Security",
      priority: 'high'
    },
    {
      id: 2,
      title: "Vacation to Europe",
      targetAmount: 5000,
      currentAmount: 2150,
      deadline: "Jun 2025",
      category: "Travel",
      priority: 'medium'
    },
    {
      id: 3,
      title: "New Car Down Payment",
      targetAmount: 8000,
      currentAmount: 3200,
      deadline: "Mar 2025",
      category: "Transportation",
      priority: 'high'
    },
    {
      id: 4,
      title: "Home Renovation",
      targetAmount: 15000,
      currentAmount: 4500,
      deadline: "Aug 2025",
      category: "Home",
      priority: 'low'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-danger';
      case 'medium': return 'text-warning';
      case 'low': return 'text-success';
      default: return 'text-muted-foreground';
    }
  };

  const getProgressPercentage = (current: number, target: number) => {
    return Math.min((current / target) * 100, 100);
  };

  return (
    <Card className="p-6 card-shadow">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Target className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">Financial Goals</h2>
            <p className="text-sm text-muted-foreground">Track your savings progress</p>
          </div>
        </div>
        <Button variant="outline" size="sm" className="gap-2">
          <Plus className="w-4 h-4" />
          Add Goal
        </Button>
      </div>

      <div className="space-y-4">
        {goals.map((goal) => {
          const progress = getProgressPercentage(goal.currentAmount, goal.targetAmount);
          const remaining = goal.targetAmount - goal.currentAmount;
          
          return (
            <div key={goal.id} className="p-4 rounded-lg border hover:bg-card-hover transition-smooth">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-medium text-foreground">{goal.title}</h3>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {goal.category}
                    </span>
                    <span className={`text-xs font-medium ${getPriorityColor(goal.priority)}`}>
                      {goal.priority.toUpperCase()} PRIORITY
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-foreground">
                    ${goal.currentAmount.toLocaleString()}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    of ${goal.targetAmount.toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium text-foreground">{progress.toFixed(1)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>Due {goal.deadline}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>${remaining.toLocaleString()} remaining</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <TrendingUp className="w-4 h-4 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">AI Insight</p>
            <p className="text-xs text-muted-foreground">
              Based on your current savings rate, you're on track to reach your Emergency Fund goal 2 months early!
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};