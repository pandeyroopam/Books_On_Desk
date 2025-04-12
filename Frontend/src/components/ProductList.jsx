import book1 from '../assets/images/1.jpeg';
import book2 from '../assets/images/2.jpeg';
import book3 from '../assets/images/3.jpeg';
import book4 from '../assets/images/4.jpeg';
import book5 from '../assets/images/5.jpeg';
import book6 from '../assets/images/6.jpeg';
import book7 from '../assets/images/7.jpeg';
import book8 from '../assets/images/8.jpeg';

const products = [
  { id: 1, name: 'The Great Gatsby', href: '#', imageSrc: book1, imageAlt: "Cover of The Great Gatsby", price: '$10', color: 'Blue' },
  { id: 2, name: 'To Kill a Mockingbird', href: '#', imageSrc: book2, imageAlt: "Cover of To Kill a Mockingbird", price: '$12', color: 'Black' },
  { id: 3, name: '1984', href: '#', imageSrc: book3, imageAlt: "Cover of 1984", price: '$15', color: 'Red' },
  { id: 4, name: 'Pride and Prejudice', href: '#', imageSrc: book4, imageAlt: "Cover of Pride and Prejudice", price: '$8', color: 'Green' },
  { id: 5, name: 'Moby-Dick', href: '#', imageSrc: book5, imageAlt: "Cover of Moby-Dick", price: '$11', color: 'White' },
  { id: 6, name: 'War and Peace', href: '#', imageSrc: book6, imageAlt: "Cover of War and Peace", price: '$20', color: 'Gray' },
  { id: 7, name: 'The Catcher in the Rye', href: '#', imageSrc: book7, imageAlt: "Cover of The Catcher in the Rye", price: '$9', color: 'Brown' },
  { id: 8, name: 'The Hobbit', href: '#', imageSrc: book8, imageAlt: "Cover of The Hobbit", price: '$13', color: 'Yellow' },
];

export default function ProductList() {
  
  return (
    <div className="" style={{
      background: "linear-gradient(0deg, rgba(209,243,255,1) 0%, rgba(255,255,255,1) 49%, rgba(199,241,255,1) 100%)"
    }}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

