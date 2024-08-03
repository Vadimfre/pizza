'use client';

import React from 'react';
import { FilterChecboxProps, FilterCheckbox } from './FilterCheckbox';
import { Input } from '../ui';


type Item = FilterChecboxProps
type Props = {
    title: string;
    defaultItems?: Item[];
    items: Item[];
    limit?: number;
    searchInputPlaceholder?: string;
    onChange?: (values: string[]) => void;
    defaulValue?: string[];
    className?: string;
  }

export const CheckboxFiltersGroup: React.FC<Props> = ({ 
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = 'Поиск',
  onChange,
  defaulValue,
  className
  
 }) => {
  return <div className={className}>
    <p className='font-bold mb-3'>{title}<p/>
        <div className='mb-5'>
            <Input placeholder={searchInputPlaceholder} className='bg-gray-50 border-none'/>
        </div>
        <div className='flex flex-col gap-4 max-h-96 overflow-auto pr-2 scrollbar'>
            {items.map((item, index) => (
  <FilterCheckbox
    onCheckedChange={(ids) => console.log(ids) }
    checked={false}
    key={String(item.value)}
    value={item.value}
    text={item.text}
    endAdornment={item.endAdornment}
  />
))
}
        </div>
    </p>
  </div>;
};
