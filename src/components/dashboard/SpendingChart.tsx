import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const monthlyData = [
  { month: 'Jan', spending: 2800, predicted: 2900, budget: 3000 },
  { month: 'Feb', spending: 3200, predicted: 3100, budget: 3000 },
  { month: 'Mar', spending: 2900, predicted: 3000, budget: 3000 },
  { month: 'Apr', spending: 3400, predicted: 3300, budget: 3000 },
  { month: 'May', spending: 3100, predicted: 3200, budget: 3000 },
  { month: 'Jun', spending: 3247, predicted: 3150, budget: 3000 },
];

const categoryData = [
  { name: 'Housing', value: 1234, color: 'hsl(213, 94%, 68%)' },
  { name: 'Food', value: 847, color: 'hsl(142, 76%, 36%)' },
  { name: 'Transport', value: 426, color: 'hsl(38, 92%, 50%)' },
  { name: 'Entertainment', value: 312, color: 'hsl(0, 72%, 51%)' },
  { name: 'Other', value: 428, color: 'hsl(213, 27%, 84%)' },
];

const weeklyData = [
  { week: 'Week 1', spending: 789 },
  { week: 'Week 2', spending: 845 },
  { week: 'Week 3', spending: 923 },
  { week: 'Week 4', spending: 691 },
];

export const SpendingChart = () => {
  return (
    <Card className="p-6 card-shadow col-span-full lg:col-span-2">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-foreground mb-2">Spending Analytics</h2>
        <p className="text-sm text-muted-foreground">AI-powered predictive insights</p>
      </div>

      <Tabs defaultValue="monthly" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="monthly">Monthly Trend</TabsTrigger>
          <TabsTrigger value="weekly">Weekly View</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
        </TabsList>
        
        <TabsContent value="monthly" className="mt-6">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="month" 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickFormatter={(value) => `$${value}`}
                />
                <Line 
                  type="monotone" 
                  dataKey="spending" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                  name="Actual Spending"
                />
                <Line 
                  type="monotone" 
                  dataKey="predicted" 
                  stroke="hsl(var(--success))" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={{ fill: 'hsl(var(--success))', strokeWidth: 2, r: 3 }}
                  name="AI Prediction"
                />
                <Line 
                  type="monotone" 
                  dataKey="budget" 
                  stroke="hsl(var(--warning))" 
                  strokeWidth={2}
                  strokeDasharray="10 5"
                  dot={false}
                  name="Budget Limit"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center justify-center gap-6 mt-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span className="text-muted-foreground">Actual Spending</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-success"></div>
              <span className="text-muted-foreground">AI Prediction</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-warning"></div>
              <span className="text-muted-foreground">Budget</span>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="weekly" className="mt-6">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="week" 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickFormatter={(value) => `$${value}`}
                />
                <Bar 
                  dataKey="spending" 
                  fill="hsl(var(--primary))"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </TabsContent>
        
        <TabsContent value="categories" className="mt-6">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {categoryData.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm text-muted-foreground">{item.name}</span>
                <span className="text-sm font-medium ml-auto">${item.value}</span>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
};