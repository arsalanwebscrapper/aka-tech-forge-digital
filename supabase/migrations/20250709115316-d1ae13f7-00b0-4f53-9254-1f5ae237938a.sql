
-- Create a table for contact messages
CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  service TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT DEFAULT 'unread' CHECK (status IN ('read', 'unread'))
);

-- Add Row Level Security (RLS) - only admins can access contact messages
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policy that allows admins to view all contact messages
CREATE POLICY "Admins can view all contact messages" 
  ON public.contact_messages 
  FOR SELECT 
  USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.role = 'admin'
    )
  );

-- Create policy that allows admins to update contact messages (mark as read)
CREATE POLICY "Admins can update contact messages" 
  ON public.contact_messages 
  FOR UPDATE 
  USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.role = 'admin'
    )
  );

-- Allow anyone to insert contact messages (public contact form)
CREATE POLICY "Anyone can create contact messages" 
  ON public.contact_messages 
  FOR INSERT 
  WITH CHECK (true);
