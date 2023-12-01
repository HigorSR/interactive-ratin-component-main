interface NumberProps {
    children: string;
    pickNumber: (selectedNumber: string) => void;
}

export function Number({ children, pickNumber }: NumberProps) {
    return (
        <button
            onClick={() => pickNumber(children)}
            className="focus:bg-light-grey focus:text-white w-12 h-12 text-medium-grey bg-dark-blue rounded-full flex items-center justify-center mb-8 hover:bg-orange hover:text-white ease-in-out duration-300"
        >
            {children}
        </button>
    );
}
