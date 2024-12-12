import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../utils/twMerge";

const ButtonsVariants = cva(
  `py-[18px] px-[25px] h-[60px] rounded-[18px] font-semibold transition-colors duration-300`,
  {
    variants: {
      variant: {
        default: "bg-green",
        white: "",
        green:
          "bg-green text-black hover:bg-grey hover:text-black active:bg-white/70",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface ButtonProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonsVariants> {}

const Button: React.FC<ButtonProps> = ({ className, variant, ...props }) => {
  return (
    <button
      className={cn(ButtonsVariants({ variant, className }))}
      {...props}
    />
  );
};

export { Button, ButtonsVariants };
