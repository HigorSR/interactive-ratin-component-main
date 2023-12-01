import { StarIcon } from "@/img/star-icon";
import { Text } from "./text";
import { Number } from "./number";
import { Modal } from "@/components/modal";
import { ButtonSubmit } from "./button-submit";
import React, { useState } from 'react';

export function Card() {
    const [showModal, setShowModal] = useState(false);
    const [numberSelected, setNumberSelected] = useState("");

    return (
        <div className="w-[375px] h-96 bg-gradient-to-b from-dark-blue to-very-dark-blue rounded-2xl p-6">
            <div className="p-3 rounded-full bg-very-dark-blue w-fit mb-4">
                <StarIcon />
            </div>
            <Text />
            <div className="flex justify-between">
                <Number pickNumber={setNumberSelected}>1</Number>
                <Number pickNumber={setNumberSelected}>2</Number>
                <Number pickNumber={setNumberSelected}>3</Number>
                <Number pickNumber={setNumberSelected}>4</Number>
                <Number pickNumber={setNumberSelected}>5</Number>
            </div>
            <ButtonSubmit openModal={() => setShowModal(true)} />
            <Modal isVisible={showModal} closeModal={() => setShowModal(false)} showNumber={numberSelected} />
        </div>
    )
}