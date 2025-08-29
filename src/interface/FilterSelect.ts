export interface FilterSelectOption {
  value: string;
  label: string;
}

export interface FilterSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  disabled?: boolean;
  label?: string;
  name?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;  
  required?: boolean;
  value?: string;
}
