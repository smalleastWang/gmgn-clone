import { cn } from '@/utils/utils';
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";
import './style.scss'

type Option = {
  icon: string;
  label: string;
  value: string;
};

type SelectProps = {
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
};

export default function Select({
  options,
  value,
  onChange,
  placeholder = "Select...",
  className = "",
}: SelectProps) {
  const selected = options.find((opt) => opt.value === value) || options[0];

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className={`inline-flex items-center justify-between px-3 py-2 rounded-md w-full ${className}`}
        >
          <img src={selected.icon} alt="logo" width={16} height={16} className='mr-1.5 inline-block' />
          <span>{selected?.label}</span>
          <ChevronDown className="ml-2 h-4 w-4" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          style={{background: 'rgb(26, 27, 31)', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 4px 8px 0px'}}
          className="rounded-md bg-gray-700 p-2 chain-select"
          sideOffset={4}
        >
          {options.map((opt) => (
            <DropdownMenu.Item
              key={opt.value}
              className={cn('pl-3 pr-8 py-1.5 rounded-lg flex items-center', {
                active: opt.value === value
              })}
              onSelect={() => onChange?.(opt.value)}
            >
              <img src={opt.icon} alt="logo" width={16} height={16} className='mr-1.5 inline-block' />
              {opt.label}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}