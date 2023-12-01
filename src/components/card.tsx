import { StarIcon } from "@/img/star-icon";
import { Text} from "./text";
import { Number } from "./number";
import { ButtonSubmit } from "./button-submit";

export function Card() {
    return (
        <div className="w-[375px] h-96 bg-gradient-to-b from-dark-blue to-very-dark-blue rounded-2xl p-6">
            <div className="p-3 rounded-full bg-very-dark-blue w-fit mb-4">
                <StarIcon/>
            </div>
            <Text />
            <div className="flex justify-between">
                <Number >1</Number>
                <Number >2</Number>
                <Number >3</Number>
                <Number >4</Number>
                <Number >5</Number>
            </div>
            <ButtonSubmit />
        </div>
    )
}