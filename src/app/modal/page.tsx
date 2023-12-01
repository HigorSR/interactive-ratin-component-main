"use client"

import { IllustrationIcon } from "@/img/illustration-thank-you-icon"

export default function ThankYouPage() {
    
    return (
        <div className="flex items-center justify-center bg-black h-screen w-screen">
            <div className="flex flex-col items-center justify-center gap-6 w-[375px] h-96 bg-gradient-to-b from-dark-blue to-very-dark-blue rounded-2xl p-6">
                <IllustrationIcon />
                <p className="text-orange bg-dark-blue rounded-[25px] px-3 py-1">You selected 4 out of 5</p>
                <div className="flex flex-col gap-3 items-center ">
                    <h2 className="text-white text-2xl">Thank you!</h2>
                    <p className="text-medium-grey text-center">We appreciate you taking the time to give a rating. If you ever need more support, don&apos;t hesitate to get in touch!</p>
                </div>
            </div>
        </div>
    )
}