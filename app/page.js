import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Crocs Unisex Adult Classic Clog",
    features: [
      "Lightweight & comfortable",
      "Easy to clean",
      "Ventilation ports",
      "Jibbitz™ charms compatible",
    ],
    image: "/crocs.jpg",
    asin: "B0014C3NWS",
    price: "$49.99",
    tags: "shoes footwear comfort casual",
  },
  {
    id: 2,
    name: "Gildan Men's Crew T-Shirts",
    features: [
      "100% Cotton",
      "Moisture-wicking",
      "Double-needle stitching",
      "Multipack value",
    ],
    image: "/gildan.jpg",
    asin: "B002HJ377A",
    price: "$22.99 (6-pack)",
    tags: "tshirts clothing men apparel basics",
  },
  {
    id: 3,
    name: "Nippies Nipple Covers for Women",
    features: [
      "Silicone & reusable",
      "Waterproof & sweatproof",
      "Invisible under clothing",
      "Travel-friendly case",
    ],
    image: "/nippies.jpg",
    asin: "B07P6C3X4N",
    price: "$24.95",
    tags: "women accessories undergarments fashion",
  },
];

function ProductCard({ product }) {
  const affiliateLink = `https://www.amazon.com/dp/${product.asin}/?tag=YOUR_AFFILIATE_TAG`;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="h-64 flex items-center justify-center bg-gray-50">
        <div className="relative w-48 h-48 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
        <div className="flex items-center mb-3">
          <span className="text-amber-500">★ ★ ★ ★ ★</span>
          <span className="text-gray-500 text-sm ml-2">(4.8)</span>
        </div>
        <div className="mb-4">
          <span className="text-2xl font-bold text-gray-900">
            {product.price}
          </span>
        </div>
        <ul className="mb-5 space-y-2">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        <a
          href={affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-gradient-to-r from-amber-400 to-amber-500 text-white text-center font-medium py-3 px-4 rounded-lg hover:from-amber-500 hover:to-amber-600 transition-all shadow-md hover:shadow-lg"
        >
          View on Amazon
        </a>
      </div>
    </div>
  );
}

export default async function HomePage() {
  // if data came from API, you'd use fetch() here
  // but for now we use static data above

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-amber-400 to-amber-500 w-12 h-12 rounded-lg" />
            <h1 className="ml-3 text-2xl font-bold text-gray-800">
              Style<span className="text-amber-500">Essentials</span>
            </h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Amazon's Best Sellers
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Curated selection of top-rated fashion essentials loved by millions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <footer className="bg-white border-t py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>
            As an Amazon Associate I earn from qualifying purchases. Product
            prices and availability are accurate as of the date/time indicated
            and are subject to change.
          </p>
          <p className="mt-4">
            © {new Date().getFullYear()} Style Essentials. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
