-- Create projects table for the projects section
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  location TEXT,
  price TEXT,
  bedrooms INTEGER,
  bathrooms INTEGER,
  area TEXT,
  status TEXT DEFAULT 'available',
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create testimonials table
CREATE TABLE public.testimonials (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT,
  company TEXT,
  content TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  avatar_url TEXT,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create newsletter subscriptions table
CREATE TABLE public.newsletter_subscriptions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  active BOOLEAN DEFAULT true
);

-- Create company info table for dynamic content
CREATE TABLE public.company_info (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT NOT NULL UNIQUE,
  value TEXT NOT NULL,
  description TEXT,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.company_info ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Anyone can view projects" 
ON public.projects 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can view testimonials" 
ON public.testimonials 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can view company info" 
ON public.company_info 
FOR SELECT 
USING (true);

-- Allow anyone to subscribe to newsletter
CREATE POLICY "Anyone can subscribe to newsletter" 
ON public.newsletter_subscriptions 
FOR INSERT 
WITH CHECK (true);

-- Create update triggers for timestamps
CREATE TRIGGER update_projects_updated_at
BEFORE UPDATE ON public.projects
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_testimonials_updated_at
BEFORE UPDATE ON public.testimonials
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_company_info_updated_at
BEFORE UPDATE ON public.company_info
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample data for projects
INSERT INTO public.projects (title, description, location, price, bedrooms, bathrooms, area, featured, image_url) VALUES
('Luxury Villa Paradise', 'Exquisite 4-bedroom villa with panoramic city views, modern amenities, and private garden. Perfect for families seeking luxury living.', 'Banjara Hills, Hyderabad', '₹2.5 Cr', 4, 3, '3500 sq ft', true, 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'),
('Modern Apartment Complex', 'Contemporary 2-bedroom apartments with smart home features, gym, swimming pool, and 24/7 security in prime location.', 'Gachibowli, Hyderabad', '₹95 Lakh', 2, 2, '1200 sq ft', true, 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'),
('Premium Penthouse', 'Stunning penthouse with 360-degree views, private terrace, premium finishes, and exclusive access to rooftop amenities.', 'Jubilee Hills, Hyderabad', '₹4.2 Cr', 3, 3, '2800 sq ft', true, 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'),
('Family Townhouse', 'Spacious 3-bedroom townhouse with private garden, garage, and close proximity to schools and shopping centers.', 'Kondapur, Hyderabad', '₹1.8 Cr', 3, 2, '2200 sq ft', false, 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'),
('Urban Studio Loft', 'Modern studio apartment perfect for young professionals, featuring open layout, high ceilings, and city center location.', 'Hi-Tech City, Hyderabad', '₹65 Lakh', 1, 1, '800 sq ft', false, 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'),
('Garden Villa Estate', 'Elegant 4-bedroom villa surrounded by lush gardens, featuring traditional architecture with modern amenities.', 'Shamshabad, Hyderabad', '₹3.1 Cr', 4, 4, '4200 sq ft', false, 'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80');

-- Insert sample testimonials
INSERT INTO public.testimonials (name, role, company, content, rating, featured, avatar_url) VALUES
('Rajesh Kumar', 'CEO', 'Tech Solutions Inc', 'Shridhar Developers delivered beyond our expectations. The quality of construction and attention to detail is remarkable. Our new office space has truly enhanced our company culture.', 5, true, 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'),
('Priya Sharma', 'Doctor', 'Apollo Hospitals', 'From the first consultation to the final handover, the team was professional and responsive. My dream home became a reality thanks to their expertise and commitment.', 5, true, 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'),
('Arjun Reddy', 'Business Owner', 'Reddy Enterprises', 'The entire process was smooth and transparent. They kept us informed at every stage and delivered the project on time. Highly recommend for anyone looking for quality construction.', 5, true, 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'),
('Sneha Patel', 'Software Engineer', 'Google', 'Exceptional service and quality! The team understood our requirements perfectly and created a beautiful home that fits our lifestyle. The after-sales support is also outstanding.', 5, false, 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80');

-- Insert company information
INSERT INTO public.company_info (key, value, description) VALUES
('company_name', 'Shridhar Developers', 'Official company name'),
('tagline', 'Building Dreams, Creating Futures', 'Company tagline'),
('established_year', '2015', 'Year the company was established'),
('total_projects', '150+', 'Total number of completed projects'),
('happy_clients', '500+', 'Number of satisfied clients'),
('years_experience', '8+', 'Years of experience in the industry'),
('email', 'info@shridhardevelopers.com', 'Primary contact email'),
('phone', '+91 98765 43210', 'Primary contact phone'),
('address', '123 Business District, Hyderabad, Telangana', 'Company address'),
('working_hours', 'Monday - Saturday: 9:00 AM - 6:00 PM', 'Office working hours');