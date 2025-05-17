// Form Types
export interface FormData {
  name: string;
  email: string;
  company: string;
  licenseType: string;
  message: string;
}

// Chat Types
export interface ChatMessage {
  text: string;
  isUser: boolean;
}

export interface FaqButton {
  text: string;
  response: string;
}

// License Types
export type LicenseType = 'Office' | 'Adobe' | 'Others';

// Component Props Types
export interface SectionProps {
  className?: string;
  children?: React.ReactNode;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface ValidationError {
  field: string;
  message: string;
} 