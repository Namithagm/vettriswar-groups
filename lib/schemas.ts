import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .optional()
    .refine((val) => !val || val.length >= 7, "Please enter a valid phone number"),
  subject: z.string().min(3, "Please enter a subject"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export type NewsletterValues = z.infer<typeof newsletterSchema>;
