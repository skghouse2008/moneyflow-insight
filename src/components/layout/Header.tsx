import { Button } from "@/components/ui/button";
import { 
  Bell, 
  Search, 
  Settings, 
  User, 
  PlusCircle,
  TrendingUp
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl financial-gradient">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">FinanceAI</h1>
              <p className="text-xs text-muted-foreground">Smart Financial Management</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center gap-4 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Search transactions, goals, categories..." 
                className="pl-10 bg-muted/50 border-0 focus-visible:ring-1"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="gap-2 hidden sm:flex">
              <PlusCircle className="w-4 h-4" />
              Add Transaction
            </Button>
            
            <div className="relative">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-5 h-5" />
                <Badge 
                  variant="destructive" 
                  className="absolute -top-1 -right-1 w-5 h-5 text-xs p-0 flex items-center justify-center"
                >
                  3
                </Badge>
              </Button>
            </div>
            
            <Button variant="ghost" size="sm">
              <Settings className="w-5 h-5" />
            </Button>
            
            <div className="flex items-center gap-3 pl-3 border-l">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-foreground">John Doe</p>
                <p className="text-xs text-muted-foreground">Premium User</p>
              </div>
              <Button variant="ghost" size="sm" className="rounded-full">
                <User className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};