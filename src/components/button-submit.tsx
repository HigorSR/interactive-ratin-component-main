import Link from "next/link"

export function ButtonSubmit() {
    return (
        <div>
            <Link href={`/modal`}>
                <button className="bg-orange text-white spc rounded-3xl w-full py-3 tracking-widest text-sm hover:bg-white hover:text-orange ease-in-out duration-300">SUBMIT</button>
            </Link>
        </div>
    )
}