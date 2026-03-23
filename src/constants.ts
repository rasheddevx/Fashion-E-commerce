export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Men' | 'Women' | 'Kids';
  image: string;
  description: string;
  isNew?: boolean;
  discount?: number;
  sizes?: string[];
  quality?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Premium Cotton Panjabi',
    price: 2450,
    category: 'Men',
    image: 'https://easyfashion.com.bd/wp-content/uploads/2026/03/3Y2A1759-Editmyth-studio-2026-600x800.webp',
    description: 'উচ্চমানের সুতি কাপড়ের পাঞ্জাবি, যা যেকোনো উৎসবের জন্য উপযুক্ত।',
    isNew: true,
    sizes: ['S', 'M', 'L', 'XL'],
    quality: '100% Premium Cotton'
  },
  {
    id: '2',
    name: 'Casual Slim Fit Shirt',
    price: 1850,
    category: 'Men',
    image: 'https://easyfashion.com.bd/wp-content/uploads/2026/02/3Y2A4350-Editmyth-studio-2026-600x800.webp',
    description: 'আরামদায়ক এবং স্টাইলিশ ক্যাজুয়াল শার্ট।',
    sizes: ['M', 'L', 'XL'],
    quality: 'High Quality Fabric'
  },
  {
    id: '3',
    name: 'Classic Formal Shirt',
    price: 1650,
    category: 'Men',
    image: 'https://easyfashion.com.bd/wp-content/uploads/2026/02/3Y2A4136-Editmyth-studio-2026-600x800.webp',
    description: 'অফিস বা ফরমাল মিটিংয়ের জন্য সেরা পছন্দ।',
    sizes: ['S', 'M', 'L', 'XL'],
    quality: 'Breathable Cotton'
  },
  {
    id: '4',
    name: 'Stylish Polo T-Shirt',
    price: 950,
    category: 'Men',
    image: 'https://easyfashion.com.bd/wp-content/uploads/2026/02/3Y2A4129-Editmyth-studio-2026-600x800.webp',
    description: 'প্রতিদিনের ব্যবহারের জন্য আরামদায়ক পোলো শার্ট।',
    discount: 10,
    sizes: ['M', 'L', 'XL', 'XXL'],
    quality: 'Soft Pique Fabric'
  },
  {
    id: '5',
    name: 'Trendy Denim Jacket',
    price: 3200,
    category: 'Men',
    image: 'https://easyfashion.com.bd/wp-content/uploads/2026/02/DSC08785-600x800.webp',
    description: 'শীতের জন্য স্টাইলিশ ডেনিম জ্যাকেট।',
    isNew: true,
    sizes: ['M', 'L', 'XL'],
    quality: 'Heavy Denim'
  },
  {
    id: '6',
    name: 'Designer Kurta',
    price: 2150,
    category: 'Men',
    image: 'https://easyfashion.com.bd/wp-content/uploads/2026/02/3Y2A3880-Editmyth-studio-2026-600x800.webp',
    description: 'আধুনিক ডিজাইনের কুর্তা, যা আপনাকে দেবে এক অনন্য লুক।',
    sizes: ['S', 'M', 'L'],
    quality: 'Silk Blend'
  },
  {
    id: '7',
    name: 'Modern Fit Trousers',
    price: 1450,
    category: 'Men',
    image: 'https://easyfashion.com.bd/wp-content/uploads/2026/02/3Y2A4300-Editmyth-studio-2026-600x800.webp',
    description: 'আরামদায়ক এবং টেকসই ট্রাউজার।',
    sizes: ['30', '32', '34', '36'],
    quality: 'Stretchable Twill'
  },
  {
    id: '8',
    name: 'Casual Printed Tee',
    price: 650,
    category: 'Men',
    image: 'https://easyfashion.com.bd/wp-content/uploads/2026/02/3Y2A3577-Editmyth-studio-2026-600x800.webp',
    description: 'তরুণদের জন্য ট্রেন্ডি প্রিন্টেড টি-শার্ট।',
    sizes: ['S', 'M', 'L', 'XL'],
    quality: 'Organic Cotton'
  },
  {
    id: '9',
    name: 'Premium Waistcoat',
    price: 2850,
    category: 'Men',
    image: 'https://easyfashion.com.bd/wp-content/uploads/2026/02/3Y2A3614-Editmyth-studio-2026-600x800.webp',
    description: 'পাঞ্জাবির সাথে পরার জন্য এক্সক্লুসিভ ওয়েস্টকোট।',
    sizes: ['38', '40', '42', '44'],
    quality: 'Premium Suiting Fabric'
  },
  {
    id: '10',
    name: 'Winter Hoodie',
    price: 1550,
    category: 'Men',
    image: 'https://easyfashion.com.bd/wp-content/uploads/2026/03/DSC08940-600x800.webp',
    description: 'শীতের সকালের জন্য আরামদায়ক হুডি।',
    sizes: ['M', 'L', 'XL'],
    quality: 'Fleece Fabric'
  },
  {
    id: '11',
    name: 'Classic White Shirt',
    price: 1750,
    category: 'Men',
    image: 'https://easyfashion.com.bd/wp-content/uploads/2026/02/3Y2A2167-Editmyth-studio-2026-600x800.webp',
    description: 'সাদা রঙের ক্লাসিক শার্ট, যা সব প্যান্টের সাথেই মানানসই।',
    sizes: ['S', 'M', 'L', 'XL'],
    quality: 'Fine Cotton'
  },
  {
    id: '12',
    name: 'Traditional Panjabi',
    price: 2250,
    category: 'Men',
    image: 'https://easyfashion.com.bd/wp-content/uploads/2026/03/image-600x800.webp',
    description: 'ঐতিহ্যবাহী ডিজাইনের পাঞ্জাবি।',
    sizes: ['M', 'L', 'XL'],
    quality: 'Linen Cotton'
  },
  {
    id: '13',
    name: 'Casual Polo',
    price: 850,
    category: 'Men',
    image: 'https://easyfashion.com.bd/wp-content/uploads/2026/02/3Y2A5184-Editmyth-studio-2026-600x800.webp',
    description: 'স্মার্ট ক্যাজুয়াল লুকের জন্য পোলো শার্ট।',
    sizes: ['M', 'L', 'XL'],
    quality: 'Cotton Pique'
  },
  {
    id: '14',
    name: 'Slim Fit Chinos',
    price: 1550,
    category: 'Men',
    image: 'https://easyfashion.com.bd/wp-content/uploads/2026/02/3Y2A5716-Editmyth-studio-2026-600x800.webp',
    description: 'আরামদায়ক চিনোস প্যান্ট।',
    sizes: ['30', '32', '34', '36'],
    quality: 'Cotton Twill'
  },
  {
    id: '15',
    name: 'Exclusive Panjabi',
    price: 3500,
    category: 'Men',
    image: 'https://easyfashion.com.bd/wp-content/uploads/2026/03/3Y2A1817-Editmyth-studio-2026-600x800.webp',
    description: 'বিলাসবহুল ডিজাইনের পাঞ্জাবি।',
    isNew: true,
    sizes: ['M', 'L', 'XL'],
    quality: 'Premium Silk'
  },
  {
    id: '16',
    name: 'Designer Kurta Set',
    price: 4200,
    category: 'Men',
    image: 'https://easyfashion.com.bd/wp-content/uploads/2026/03/3Y2A7118-Editmyth-studio-2026-600x800.webp',
    description: 'কুর্তা এবং পায়জামা সেট।',
    sizes: ['S', 'M', 'L', 'XL'],
    quality: 'High-end Fabric'
  },
  {
    id: '17',
    name: 'Graphic Tee',
    price: 550,
    category: 'Men',
    image: 'https://easyfashion.com.bd/wp-content/uploads/2026/02/3Y2A0393.jpg-600x800.webp',
    description: 'আকর্ষণীয় গ্রাফিক ডিজাইনের টি-শার্ট।',
    sizes: ['S', 'M', 'L', 'XL'],
    quality: '100% Cotton'
  },
  {
    id: '18',
    name: 'Denim Shirt',
    price: 1950,
    category: 'Men',
    image: 'https://easyfashion.com.bd/wp-content/uploads/2026/02/3Y2A9707-Editmyth-studio-2026-600x800.webp',
    description: 'স্টাইলিশ ডেনিম শার্ট।',
    sizes: ['M', 'L', 'XL'],
    quality: 'Soft Denim'
  },
  {
    id: '19',
    name: 'Leather Jacket',
    price: 5500,
    category: 'Men',
    image: 'https://easyfashion.com.bd/wp-content/uploads/2026/01/3Y2A9731-Editmyth-studio-2026-600x800.webp',
    description: 'আসল চামড়ার জ্যাকেট।',
    sizes: ['M', 'L', 'XL'],
    quality: 'Genuine Leather'
  },
  {
    id: '20',
    name: 'Formal Blazer',
    price: 4800,
    category: 'Men',
    image: 'https://easyfashion.com.bd/wp-content/uploads/2026/03/3Y2A7454-Editmyth-studio-2026-600x800.webp',
    description: 'পারফেক্ট ফরমাল ব্লেজার।',
    sizes: ['38', '40', '42'],
    quality: 'Wool Blend'
  },
  {
    id: '21',
    name: 'Casual Chinos',
    price: 1350,
    category: 'Men',
    image: 'https://easyfashion.com.bd/wp-content/uploads/2026/02/3Y2A3723-Editmyth-studio-2026-600x800.webp',
    description: 'প্রতিদিনের ব্যবহারের জন্য চিনোস।',
    sizes: ['30', '32', '34'],
    quality: 'Cotton'
  },
  {
    id: '22',
    name: 'Women Premium Top',
    price: 1650,
    category: 'Women',
    image: 'https://plus.unsplash.com/premium_photo-1679056835084-7f21e64a3402?w=600&auto=format&fit=crop&q=60',
    description: 'নারীদের জন্য প্রিমিয়াম ডিজাইনের টপ।',
    sizes: ['S', 'M', 'L'],
    quality: 'Georgette'
  },
  {
    id: '23',
    name: 'Summer Dress',
    price: 2200,
    category: 'Women',
    image: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=600&auto=format&fit=crop&q=60',
    description: 'আরামদায়ক সামার ড্রেস।',
    sizes: ['M', 'L', 'XL'],
    quality: 'Cotton'
  },
  {
    id: '24',
    name: 'Elegant Scarf',
    price: 450,
    category: 'Women',
    image: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=600&auto=format&fit=crop&q=60',
    description: 'স্টাইলিশ স্কার্ফ।',
    sizes: ['One Size'],
    quality: 'Silk'
  },
  {
    id: '25',
    name: 'Trench Coat',
    price: 4500,
    category: 'Women',
    image: 'https://images.unsplash.com/photo-1578681994506-b8f463449011?w=600&auto=format&fit=crop&q=60',
    description: 'শীতের জন্য ট্রেন্ডি কোট।',
    sizes: ['S', 'M', 'L'],
    quality: 'Premium Wool'
  },
  {
    id: '26',
    name: 'Ethnic Wear',
    price: 3200,
    category: 'Women',
    image: 'https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?w=600&auto=format&fit=crop&q=60',
    description: 'ঐতিহ্যবাহী পোশাক।',
    sizes: ['M', 'L', 'XL'],
    quality: 'Cotton Silk'
  },
  {
    id: '27',
    name: 'Knit Sweater',
    price: 1850,
    category: 'Women',
    image: 'https://plus.unsplash.com/premium_photo-1673125287084-e90996bad505?w=600&auto=format&fit=crop&q=60',
    description: 'আরামদায়ক নিট সোয়েটার।',
    sizes: ['M', 'L'],
    quality: 'Wool'
  },
  {
    id: '28',
    name: 'Designer Handbag',
    price: 2500,
    category: 'Women',
    image: 'https://images.unsplash.com/photo-1618354691551-44de113f0164?w=600&auto=format&fit=crop&q=60',
    description: 'স্টাইলিশ হ্যান্ডব্যাগ।',
    sizes: ['One Size'],
    quality: 'Faux Leather'
  },
  {
    id: '29',
    name: 'Kids Winter Cap',
    price: 350,
    category: 'Kids',
    image: 'https://plus.unsplash.com/premium_photo-1669703777548-08503c3085a0?w=600&auto=format&fit=crop&q=60',
    description: 'বাচ্চাদের জন্য গরম টুপি।',
    sizes: ['S', 'M'],
    quality: 'Wool'
  },
  {
    id: '30',
    name: 'Kids Play Set',
    price: 1250,
    category: 'Kids',
    image: 'https://images.unsplash.com/photo-1613461920867-9ea115fee900?w=600&auto=format&fit=crop&q=60',
    description: 'বাচ্চাদের খেলার জন্য আরামদায়ক সেট।',
    sizes: ['2Y', '4Y', '6Y'],
    quality: 'Soft Cotton'
  },
  {
    id: '31',
    name: 'Kids Denim',
    price: 950,
    category: 'Kids',
    image: 'https://plus.unsplash.com/premium_photo-1675186049563-000f7ac02c44?w=600&auto=format&fit=crop&q=60',
    description: 'বাচ্চাদের স্টাইলিশ ডেনিম।',
    sizes: ['4Y', '6Y', '8Y'],
    quality: 'Denim'
  },
  {
    id: '32',
    name: 'Baby Romper',
    price: 750,
    category: 'Kids',
    image: 'https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=600&auto=format&fit=crop&q=60',
    description: 'আরামদায়ক বেবি রম্পার।',
    sizes: ['0-6M', '6-12M'],
    quality: 'Organic Cotton'
  },
  {
    id: '33',
    name: 'Kids Sneakers',
    price: 1850,
    category: 'Kids',
    image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600&auto=format&fit=crop&q=60',
    description: 'বাচ্চাদের আরামদায়ক জুতো।',
    sizes: ['24', '26', '28'],
    quality: 'Mesh'
  },
  {
    id: '34',
    name: 'Kids Raincoat',
    price: 1150,
    category: 'Kids',
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=60',
    description: 'রঙিন রেইনকোট।',
    sizes: ['S', 'M', 'L'],
    quality: 'Waterproof Material'
  },
  {
    id: '35',
    name: 'Kids Party Dress',
    price: 2850,
    category: 'Kids',
    image: 'https://plus.unsplash.com/premium_photo-1673125287363-b4e837f1215f?w=600&auto=format&fit=crop&q=60',
    description: 'বাচ্চাদের পার্টির জন্য সুন্দর ড্রেস।',
    sizes: ['4Y', '6Y', '8Y'],
    quality: 'Net and Silk'
  }
];

export const CATEGORIES = [
  { name: 'Men', image: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&q=80&w=800' },
  { name: 'Women', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800' },
  { name: 'Kids', image: 'https://images.unsplash.com/photo-1514090458221-65bb69af63e6?auto=format&fit=crop&q=80&w=800' }
];

export const TESTIMONIALS = [
  { id: 1, name: 'Sarah Johnson', role: 'Fashion Blogger', content: 'The quality of the clothes is exceptional. VogueVibe has become my go-to for premium fashion.', avatar: 'https://i.pravatar.cc/150?u=sarah' },
  { id: 2, name: 'Michael Chen', role: 'Creative Director', content: 'Minimalist design and great fit. The velvet blazer is a masterpiece.', avatar: 'https://i.pravatar.cc/150?u=michael' },
  { id: 3, name: 'Emma Davis', role: 'Stylist', content: 'Fast shipping and beautiful packaging. Highly recommended for anyone looking for modern style.', avatar: 'https://i.pravatar.cc/150?u=emma' }
];
