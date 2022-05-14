import React from 'react'

function SerData() {
    const serdata = [
        {
            "sertitle": "Amet minim mollit ",
            "sercontent": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
        },
        {
            "sertitle": "Non deserunt ullamco  ",
            "sercontent": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
        },
        {
            "sertitle": "Non deserunt  ",
            "sercontent": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
        },
    ]
    return (
        <>
            <div className='servi_text'>
                {
                    serdata.map((e) =>
                        <>
                            <div className='d-flex align-items-center mb-3'>
                                <i className="far fa-check-circle me-3"></i>
                                <h3 className='mb-0'>{e.sertitle}</h3>
                            </div>
                            <p className='ms-5'>{e.sercontent}</p>
                        </>
                    )
                }
            </div>
        </>
    )
}
export default SerData
