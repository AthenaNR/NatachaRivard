# RêveRévélateur - AI Dream Interpretation Platform

## Overview

RêveRévélateur is a French enterprise-grade web application that provides AI-powered dream interpretation services. The platform features a complete business website with Stripe payment integration, GDPR compliance, and an administrative dashboard. It's designed as a comprehensive solution for dream analysis using advanced AI models, with both one-time payments and subscription-based services.

The application serves as the web presence for a mobile app business, providing legal pages, product information, pricing plans, and payment processing capabilities required for Stripe verification and business operations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state and data fetching
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Theming**: Built-in dark/light mode support with CSS custom properties

### Backend Architecture
- **Runtime**: Node.js with Express.js web framework
- **Language**: TypeScript throughout for consistency and type safety
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Storage**: In-memory storage implementation with interface for easy database migration
- **API Design**: RESTful endpoints with proper error handling and validation
- **Email Service**: SendGrid integration for transactional emails

### Authentication & Security
- **GDPR Compliance**: Cookie consent banner, privacy policy, data processing transparency
- **Data Protection**: Environment variable configuration for sensitive keys
- **Validation**: Zod schemas for runtime type checking and data validation
- **CORS**: Configured for secure cross-origin requests

### Payment Processing
- **Stripe Integration**: Full Stripe SDK implementation for payments and subscriptions
- **Webhook Handling**: Secure webhook processing for payment events
- **Payment Types**: Support for one-time payments and recurring subscriptions
- **Test Mode**: Configured for Stripe test environment by default

### Database Schema Design
- **Users**: Account management with Stripe customer integration
- **Contacts**: Customer support and inquiry management
- **Payments**: Transaction tracking and payment history
- **Webhook Logs**: Stripe webhook event processing and audit trail

### Deployment Architecture
- **Platform**: Optimized for Replit deployment with proper configuration
- **Build Process**: Separate client and server builds with static asset serving
- **Environment**: Development and production environment support
- **Static Assets**: Efficient serving of built frontend assets

## External Dependencies

### Payment Processing
- **Stripe**: Complete payment infrastructure including Stripe SDK, Stripe Elements for frontend, webhook processing, and customer/subscription management

### Email Services
- **SendGrid**: Transactional email service for contact form notifications and customer communications

### Database
- **Neon Database**: PostgreSQL hosting service via @neondatabase/serverless connector
- **Drizzle ORM**: Type-safe database operations with PostgreSQL dialect support

### UI and Styling
- **Radix UI**: Comprehensive component primitives for accessible UI components
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Lucide React**: Modern icon library for consistent iconography

### Development Tools
- **TypeScript**: Type safety across frontend and backend
- **Vite**: Modern build tool with hot module replacement
- **Zod**: Runtime type validation and schema definition

### Fonts and Assets
- **Google Fonts**: Inter and Playfair Display fonts for typography
- **Custom CSS Variables**: Theme system for consistent colors and spacing

### Replit-Specific
- **Replit Plugins**: Runtime error overlay, cartographer, and dev banner for development experience
- **Deployment**: Configured for Replit's hosting environment with proper build scripts