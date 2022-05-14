import React from 'react'
import flag_1 from '../../images/flag_1.png'
import flag_2 from '../../images/flag_2.png'
import flag_3 from '../../images/flag_3.png'
import flag_4 from '../../images/flag_4.png'
import flag_5 from '../../images/flag_5.png'
import AndikemsitioComp from './AndikemsitioComp'

export default function Andikemmexico() {
    return (
        <>
            <AndikemsitioComp flag={flag_1} />
        </>
    )
}

export function AndikemPeru() {
    return (
        <>
            <AndikemsitioComp flag={flag_2} />
        </>
    )
}

export function AndikemBrasil() {
    return (
        <>
            <AndikemsitioComp flag={flag_3} />
        </>
    )
}

export function AndikemColombia() {
    return (
        <>
            <AndikemsitioComp flag={flag_4} />
        </>
    )
}

export function AndikemTobago() {
    return (
        <>
            <AndikemsitioComp flag={flag_5} />
        </>
    )
}

