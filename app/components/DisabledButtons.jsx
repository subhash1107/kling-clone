'use client'
import PremiumButton from "./PremiumButton"
import { TbBrandMercedes } from "react-icons/tb"
import { CiSliderVertical } from "react-icons/ci"

export const ModelButton = () =>{
    return(
        <PremiumButton icon={TbBrandMercedes} name="My Models"/>
    )
}
export const AiCustomButton = () =>{
    return(
        <PremiumButton icon={CiSliderVertical} name="AI Custom Model"/>
    )
}