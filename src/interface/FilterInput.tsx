export interface FilterInputProps {
  autoFocus?: boolean;
  className?: string;
  disabled?: boolean;
  label?: string;
  max?: number;
  min?: number;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  type?: 'text' | 'number' | 'email' | 'password'; // Puedes agregar más tipos si lo necesitas
  value: string;
}