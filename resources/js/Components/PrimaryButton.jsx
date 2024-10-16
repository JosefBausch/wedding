export default function PrimaryButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `rounded-xl bg-rose-300 px-6 py-2 text-lg text-white shadow-md duration-300 hover:bg-rose-400 hover:shadow-lg sm:px-8 sm:py-3 sm:text-xl ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
