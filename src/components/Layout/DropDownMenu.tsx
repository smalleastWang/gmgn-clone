import { cn } from '@/utils/utils';
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";
import './style.scss'
import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

type Option = {
  icon: ReactElement;
  label: string;
  path?: string;
  cb?: () => void;
};

type DropMenuProps = {
  options: Option[];
  placeholder?: string;
};

export default function DropMenu({
  options,
}: DropMenuProps) {

  const navigate = useNavigate();
  
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className={`inline-flex items-center justify-between px-3 py-2 rounded-md w-full gap-2`}
        >
          <svg width="12" height="12" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M10.8539 2.34028C11.2129 2.34028 11.5039 2.04927 11.5039 1.69028C11.5039 1.3313 11.2129 1.04028 10.8539 1.04028L3.05134 1.04028C1.8988 1.04028 0.964478 1.97461 0.964478 3.12715V13.5818C0.964478 14.4931 1.70321 15.2318 2.61448 15.2318H14.2872C14.7014 15.2318 15.0372 14.896 15.0372 14.4818V4.8215C15.0372 4.40728 14.7014 4.0715 14.2872 4.0715L10.8539 4.0715V5.3715L13.7372 5.3715V13.9318H2.61448C2.42118 13.9318 2.26448 13.7751 2.26448 13.5818V5.13296C2.63215 5.29828 3.03041 5.3715 3.40139 5.3715L10.8539 5.3715V4.0715L3.40139 4.0715C3.09224 4.0715 2.79204 3.98005 2.58537 3.82226C2.39948 3.68033 2.26448 3.46998 2.26448 3.12715C2.26448 2.69258 2.61677 2.34028 3.05134 2.34028L10.8539 2.34028Z"></path><path d="M8.49849 9.36897C8.49849 9.00999 8.78951 8.71897 9.14849 8.71897H11.2794C11.6383 8.71897 11.9293 9.00999 11.9293 9.36897C11.9293 9.72796 11.6383 10.019 11.2794 10.019H9.14849C8.78951 10.019 8.49849 9.72796 8.49849 9.36897Z"></path></svg>
          <div></div>
          <svg width="12px" height="12px" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M1.69995 8.19689C1.76308 8.13375 1.84989 8.09692 1.94197 8.09692H10.2917C10.4443 8.09692 10.5206 8.28107 10.4127 8.38893L8.76331 10.0384C8.70017 10.1015 8.61336 10.1383 8.52128 10.1383H.171524C.018945 10.1383-.0573445 9.95418.0505131 9.84632L1.69995 8.19689ZM1.69995 2.03991C1.76571 1.97677 1.85252 1.93994 1.94197 1.93994H10.2917C10.4443 1.93994 10.5206 2.12409 10.4127 2.23195L8.76331 3.88138C8.70017 3.94452 8.61336 3.98134 8.52128 3.98134H.171524C.018945 3.98134-.0573445 3.7972.0505131 3.68934L1.69995 2.03991ZM8.76331 5.1007C8.70017 5.03756 8.61336 5.00073 8.52128 5.00073H.171524C.018945 5.00073-.0573445 5.18488.0505131 5.29274L1.69995 6.94217C1.76308 7.00531 1.84989 7.04214 1.94197 7.04214H10.2917C10.4443 7.04214 10.5206 6.85799 10.4127 6.75013L8.76331 5.1007Z"></path></svg>
          <span>0</span>
          <i className="h-24px w-1px bg-line-200"></i>
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
              className={cn('pl-3 pr-8 py-2 rounded-lg flex items-center text-xs')}
              onClick={() => {
                if (opt.path) navigate(opt.path)
                if (opt.cb) {
                  opt.cb()
                }
              }}
            >
              <span className="text-gray-100 mr-2">{opt.icon}</span>
              {opt.label}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}