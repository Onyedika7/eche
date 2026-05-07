export interface Product {
  id: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  sku: string;
  stock: number;
  image: string;
  description: string;
  specs: Record<string, string>;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Schneider Electric 32A MCB",
    category: "Circuit Breakers",
    brand: "Schneider",
    price: 4500,
    sku: "MCB-SCN-32A-01",
    stock: 150,
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
    description: "Multi9 C60H series 32A single pole circuit breaker for residential and commercial protection.",
    specs: { "Voltage": "230V", "Poles": "1P", "Curve": "C", "Breaking Capacity": "10kA" }
  },
  {
    id: "2",
    name: "16mm Single Core Copper Cable",
    category: "Cables & Wires",
    brand: "Coleman",
    price: 120000,
    sku: "CBL-CLM-16MM-100",
    stock: 45,
    image: "https://images.unsplash.com/photo-1616431949013-bc752c069b22?q=80&w=800&auto=format&fit=crop",
    description: "100-meter coil of high-purity single core copper wire for industrial power distribution.",
    specs: { "Length": "100m", "Material": "Copper", "Insulation": "PVC", "Standard": "NIS/ISO" }
  },
  {
    id: "3",
    name: "ABB 100A 3-Phase Main Switch",
    category: "Circuit Breakers",
    brand: "ABB",
    price: 28500,
    sku: "SWT-ABB-100A-3P",
    stock: 20,
    image: "https://images.unsplash.com/photo-1558444479-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
    description: "Industrial grade main isolator switch for 3-phase electrical panels.",
    specs: { "Current": "100A", "Poles": "3P", "Voltage": "415V", "Mounting": "Din Rail" }
  },
  {
    id: "4",
    name: "Legrand 13A Twin Socket",
    category: "Switches & Sockets",
    brand: "Legrand",
    price: 3200,
    sku: "SCK-LEG-13A-TWN",
    stock: 500,
    image: "https://images.unsplash.com/photo-1603566023348-12497a73a903?q=80&w=800&auto=format&fit=crop",
    description: "Premium Arteor series white twin switched socket with child safety shutters.",
    specs: { "Current": "13A", "Gangs": "2", "Finish": "Gloss White", "Standard": "BS 1363" }
  },
  {
    id: "5",
    name: "SolarWorld 400W Mono Panel",
    category: "Solar Components",
    brand: "SolarWorld",
    price: 85000,
    sku: "SOL-SWD-400W-MN",
    stock: 30,
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?q=80&w=800&auto=format&fit=crop",
    description: "High-efficiency monocrystalline solar panel for residential solar installations.",
    specs: { "Power": "400W", "Type": "Monocrystalline", "Efficiency": "20.4%", "Warranty": "25 Years" }
  }
];
