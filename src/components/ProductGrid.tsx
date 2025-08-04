import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart } from "lucide-react";
import phoneImage from "@/assets/phone-product.jpg";
import laptopImage from "@/assets/laptop-product.jpg";
import headphonesImage from "@/assets/headphones-product.jpg";
import watchImage from "@/assets/watch-product.jpg";

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    originalPrice: 999,
    salePrice: 899,
    rating: 4.8,
    reviews: 1234,
    image: phoneImage,
    discount: 10,
    tag: "Best Seller"
  },
  {
    id: 2,
    name: "MacBook Air M2",
    originalPrice: 1299,
    salePrice: 1199,
    rating: 4.9,
    reviews: 856,
    image: laptopImage,
    discount: 8,
    tag: "Top Rated"
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    originalPrice: 399,
    salePrice: 329,
    rating: 4.7,
    reviews: 2341,
    image: headphonesImage,
    discount: 18,
    tag: "Limited Offer"
  },
  {
    id: 4,
    name: "Apple Watch Series 9",
    originalPrice: 429,
    salePrice: 379,
    rating: 4.6,
    reviews: 1567,
    image: watchImage,
    discount: 12,
    tag: "New Launch"
  },
  {
    id: 5,
    name: "Samsung Galaxy S24",
    originalPrice: 899,
    salePrice: 799,
    rating: 4.5,
    reviews: 987,
    image: phoneImage,
    discount: 11,
    tag: "Trending"
  },
  {
    id: 6,
    name: "Dell XPS 13",
    originalPrice: 1099,
    salePrice: 999,
    rating: 4.4,
    reviews: 654,
    image: laptopImage,
    discount: 9,
    tag: "Popular"
  },
  {
    id: 7,
    name: "Bose QuietComfort",
    originalPrice: 349,
    salePrice: 279,
    rating: 4.6,
    reviews: 1876,
    image: headphonesImage,
    discount: 20,
    tag: "Hot Deal"
  },
  {
    id: 8,
    name: "Samsung Galaxy Watch",
    originalPrice: 329,
    salePrice: 279,
    rating: 4.3,
    reviews: 743,
    image: watchImage,
    discount: 15,
    tag: "Featured"
  }
];

const ProductGrid = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trending Products
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover the most popular items this week
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/20 overflow-hidden">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge 
                  variant="secondary" 
                  className="absolute top-2 left-2 bg-primary text-primary-foreground"
                >
                  {product.discount}% OFF
                </Badge>
                <Badge 
                  variant="outline" 
                  className="absolute top-2 right-2 bg-card/90 text-foreground border-border"
                >
                  {product.tag}
                </Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-12 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-card/90 hover:bg-card"
                >
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
              
              <CardContent className="p-4 space-y-3">
                <h3 className="font-semibold text-foreground line-clamp-2">{product.name}</h3>
                
                <div className="flex items-center space-x-1">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-warning text-warning" />
                    <span className="text-sm font-medium ml-1">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews})</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-foreground">${product.salePrice}</span>
                  <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                </div>
                
                <Button variant="cart" className="w-full">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;