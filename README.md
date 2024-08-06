# Wedding Website

A beautiful and interactive wedding website built with Laravel (backend) and Angular (frontend).

## Features

- RSVP management
- Event details and schedule
- Photo gallery
- Guest information
- Gift registry

## Requirements

- PHP 8.1+
- Composer
- Node.js 14+
- npm or yarn
- MySQL or PostgreSQL

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/wedding-website.git
   cd wedding-website
2. Install backend dependencies:
   composer install
3. Set up environment variables:
   cp .env.example .env
   php artisan key:generate
4. Configure database in `.env` file
5. Run migrations:
   php artisan migrate:refresh
6. Install frontend dependencies:
   cd frontend
   npm install

## Running the Application

1. Start Laravel server:
php artisan serve
2. In a separate terminal, start Angular development server:
  cd frontend
  ng serve
3. Access the website at `http://localhost:4200`

## Deployment

- Backend: Deploy Laravel application to a PHP-compatible web server
- Frontend: Build Angular app (`ng build --prod`) and deploy to a static file host

## Contributing

Please read `CONTRIBUTING.md` for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the `LICENSE.md` file for details.
