import React from "react";
import { useFormContext } from "react-hook-form";
import { X } from "lucide-react";
import { Textarea } from "../../ui/textarea";
import { ClearButton } from "../clear-button";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  name: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
}

export const FormTextarea: React.FC<Props> = ({
  className,
  name,
  label,
  required,
  disabled,
  ...props
}) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const value = watch(name);
  const errotText = errors[name]?.message as string;

  const onClickClear = () => {
    setValue(name, "");
  };

  return (
    <div className={className}>
      <p className="font-medium mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </p>
      <div className="relative">
        <Textarea className="h-12 text-md" {...register(name)} {...props} />
        {value && <ClearButton onClick={onClickClear} />}
      </div>
      {errotText && <p className="text-red-500 text-sm mt-2">{errotText}</p>}
    </div>
  );
};
