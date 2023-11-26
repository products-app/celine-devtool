import { forwardRef } from "react";

type ButtonComponentProps = {
  as?: React.ElementType | keyof JSX.IntrinsicElements;
} & React.ComponentProps<any>;

const ButtonComponent = forwardRef<HTMLButtonElement, ButtonComponentProps>(
  ({ children, as = "button", ...props }, ref) => {
    const Component = as;

    return (
      <Component ref={ref} type="button" className="bg-" {...props}>
        {children}
      </Component>
    );
  },
);

ButtonComponent.displayName = 'Button';
export default ButtonComponent;
