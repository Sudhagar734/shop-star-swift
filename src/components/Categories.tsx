import { Smartphone, Laptop, Headphones, Watch, Gamepad2, Camera, Home, Car } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    icon: Smartphone,
    name: "Mobiles",
    description: "Latest smartphones",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Laptop,
    name: "Electronics",
    description: "Laptops & computers",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Home,
    name: "Home & Kitchen",
    description: "Appliances & decor",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Watch,
    name: "Fashion",
    description: "Clothing & accessories",
    color: "from-pink-500 to-pink-600"
  },
  {
    icon: Headphones,
    name: "Audio",
    description: "Headphones & speakers",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: Gamepad2,
    name: "Gaming",
    description: "Games & consoles",
    color: "from-red-500 to-red-600"
  },
  {
    icon: Camera,
    name: "Photography",
    description: "Cameras & lenses",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    icon: Car,
    name: "Automotive",
    description: "Car accessories",
    color: "from-gray-500 to-gray-600"
  }
];

const Categories = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our wide range of product categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Button
                key={index}
                variant="ghost"
                className="h-auto p-6 flex flex-col items-center space-y-4 hover:shadow-card transition-all duration-300 border border-border/50 hover:border-primary/20 bg-card hover:bg-card/80"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-foreground">{category.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{category.description}</p>
                </div>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;