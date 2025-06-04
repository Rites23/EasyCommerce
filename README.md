# 🛒 Next.js Ecommerce Store — EasyCommerce

A sleek, modern eCommerce web application built with **Next.js App Router**, **Tailwind CSS v4**, **Shadcn/UI**, and integrated with **Stripe** for product listing and checkout.

![image](https://github.com/user-attachments/assets/d706320b-48d0-4606-a50e-06c71a0809ee)

🎥 [EasyCommerce](https://easy-commerce-three.vercel.app/)

## 🚀 Features

- 🧭 Sticky responsive **Navbar**
- 🛍️ **Home page** with Stripe-powered product feed
- 🎞️ **Hero section** with dynamic product image
- 📦 **Product listing** & individual **product detail pages**
- 🛒 **Cart** logic & total count
- 💳 Fully integrated **Stripe Checkout**

## 🔧 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/YOUR_USERNAME/nextjs-ecommerce.git
cd nextjs-ecommerce
```

2. Install dependencies

```bash
pnpm install
```
3. Set up Stripe keys

Create a .env.local file in the root and add:

```bash
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLIC_KEY=your_stripe_public_key
```
4. Run development server

```bash
pnpm dev
```
- Visit http://localhost:3000 to view your ecommerce site!

🧾 Stripe Setup:

- Sign up at Stripe

- Create a new product with images and a price

- Copy your Secret and Public keys into .env.local

- Products are automatically fetched using the Stripe API


🔮 Future Enhancements:

- 🔐 Auth & User Dashboard

- 📊 Admin Panel for Product Management

- 🧠 AI Helpdesk Chatbot

- 🤝 Contributing

Pull requests are welcome! If you'd like to suggest a feature or report a bug, please open an issue.



