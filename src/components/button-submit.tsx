interface ButtonSubmitProps {
    openModal: () => void;
}

export function ButtonSubmit({ openModal }: ButtonSubmitProps) {
    return (
        <button
            onClick={() => openModal()}
            className="bg-orange text-white spc rounded-3xl w-full py-3 tracking-widest text-sm hover:bg-white hover:text-orange ease-in-out duration-300">
            SUBMIT
        </button>
    )
}
