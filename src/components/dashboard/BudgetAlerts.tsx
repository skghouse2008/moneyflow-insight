import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, XCircle, TrendingUp, Settings } from "lucide-react";

interface Alert {
  id: number;
  type: 'warning' | 'danger' | 'info' | 'success';
  category: string;
  message: string;
  amount?: number;
  percentage?: number;
  timestamp: string;
  actionable: boolean;
}

export const BudgetAlerts = () => {
  const alerts: Alert[] = [
    {
      id: 1,
      type: 'danger',
      category: 'Housing',
      message: 'You have exceeded your housing budget',
      amount: 34,
      percentage: 102.8,
      timestamp: '2 hours ago',
      actionable: true
    },
    {
      id: 2,
      type: 'warning',
      category: 'Transportation',
      message: 'Approaching transportation budget limit',
      amount: 75,
      percentage: 85.1,
      timestamp: '5 hours ago',
      actionable: true
    },
    {
      id: 3,
      type: 'info',
      category: 'AI Prediction',
      message: 'Based on spending patterns, you may exceed dining budget next week',
      timestamp: '1 day ago',
      actionable: false
    },
    {
      id: 4,
      type: 'success',
      category: 'Entertainment',
      message: 'Great job staying under your entertainment budget!',
      percentage: 63.3,
      timestamp: '2 days ago',
      actionable: false
    }
  ];

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'danger':
        return <XCircle className="w-4 h-4" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4" />;
      case 'success':
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <TrendingUp className="w-4 h-4" />;
    }
  };

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'danger':
        return 'text-danger bg-danger/10 border-danger/20';
      case 'warning':
        return 'text-warning bg-warning/10 border-warning/20';
      case 'success':
        return 'text-success bg-success/10 border-success/20';
      default:
        return 'text-primary bg-primary/10 border-primary/20';
    }
  };

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case 'danger':
        return 'destructive' as const;
      case 'warning':
        return 'secondary' as const;
      case 'success':
        return 'default' as const;
      default:
        return 'outline' as const;
    }
  };

  return (
    <Card className="p-6 card-shadow">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-warning/10">
            <AlertTriangle className="w-5 h-5 text-warning" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">Budget Alerts</h2>
            <p className="text-sm text-muted-foreground">Real-time notifications</p>
          </div>
        </div>
        <Button variant="outline" size="sm" className="gap-2">
          <Settings className="w-4 h-4" />
          Settings
        </Button>
      </div>

      <div className="space-y-3">
        {alerts.map((alert) => (
          <div 
            key={alert.id} 
            className={`p-4 rounded-lg border transition-smooth ${getAlertColor(alert.type)}`}
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5">
                {getAlertIcon(alert.type)}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant={getBadgeVariant(alert.type)} className="text-xs">
                    {alert.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{alert.timestamp}</span>
                </div>
                
                <p className="text-sm font-medium text-foreground mb-1">
                  {alert.message}
                </p>
                
                {alert.amount && (
                  <p className="text-xs text-muted-foreground">
                    Over budget by ${alert.amount} ({alert.percentage}%)
                  </p>
                )}
                
                {alert.actionable && (
                  <div className="flex gap-2 mt-3">
                    <Button size="sm" variant="outline" className="h-8 text-xs">
                      Adjust Budget
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 text-xs">
                      Dismiss
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 rounded-lg bg-muted/50">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">Smart Notifications</p>
            <p className="text-xs text-muted-foreground">
              AI learns your patterns to send relevant alerts
            </p>
          </div>
          <Badge variant="secondary" className="text-xs">
            AI Powered
          </Badge>
        </div>
      </div>
    </Card>
  );
};