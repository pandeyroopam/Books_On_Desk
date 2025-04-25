// import book1 from '../assets/images/1.jpeg';
// import book2 from '../assets/images/2.jpeg';
// import book3 from '../assets/images/3.jpeg';
// import book4 from '../assets/images/4.jpeg';
// import book5 from '../assets/images/5.jpeg';
// import book6 from '../assets/images/6.jpeg';
// import book7 from '../assets/images/7.jpeg';
// import book8 from '../assets/images/8.jpeg';
import { useNavigate } from "react-router-dom";

// const products = [
//   { id: 1, name: 'The Great Gatsby', href: '#', imageSrc: book1, imageAlt: "Cover of The Great Gatsby", price: '$10', color: 'Blue' },
//   { id: 2, name: 'To Kill a Mockingbird', href: '#', imageSrc: book2, imageAlt: "Cover of To Kill a Mockingbird", price: '$12', color: 'Black' },
//   { id: 3, name: '1984', href: '#', imageSrc: book3, imageAlt: "Cover of 1984", price: '$15', color: 'Red' },
//   { id: 4, name: 'Pride and Prejudice', href: '#', imageSrc: book4, imageAlt: "Cover of Pride and Prejudice", price: '$8', color: 'Green' },
//   { id: 5, name: 'Moby-Dick', href: '#', imageSrc: book5, imageAlt: "Cover of Moby-Dick", price: '$11', color: 'White' },
//   { id: 6, name: 'War and Peace', href: '#', imageSrc: book6, imageAlt: "Cover of War and Peace", price: '$20', color: 'Gray' },
//   { id: 7, name: 'The Catcher in the Rye', href: '#', imageSrc: book7, imageAlt: "Cover of The Catcher in the Rye", price: '$9', color: 'Brown' },
//   { id: 8, name: 'The Hobbit', href: '#', imageSrc: book8, imageAlt: "Cover of The Hobbit", price: '$13', color: 'Yellow' },
// ];

export default function ProductList({ products }) {
  const navigate = useNavigate();

  const handleShowBooks = (productId) => {
    navigate(`/showbooks/${productId}`);
  };

  return (
    <div
      className=""
      style={{
        background:
        "#E9D9DA",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 xl:gap-x-8">
          {products.map((product) => (
            <div key={product._id} className="group relative">
              {product.images && product.images.length > 0 && (
                <img
                  alt={product.images[0].filename || "Book cover"}
                  src={
                    product.images[0].url.startsWith("http")
                      ? product.images[0].url
                      : `http://localhost:5000/${product.images[0].url}`
                  }
                  className="aspect-square w-auto h-full rounded-md bg-gray-200 object-contain group-hover:opacity-75 lg:h-80"
                />
              )}
              <div className="mt-4 flex justify-between">
                <div
                  onClick={() => handleShowBooks(product._id)}
                  className="cursor-pointer"
                >
                  <h3 className="text-sm text-gray-700">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.author}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
