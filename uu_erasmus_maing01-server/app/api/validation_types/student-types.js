/* eslint-disable */
const studentCreateDtoInType = shape({
    fullName: string(500)
})

const studentGetDtoInType = shape({
    id: uu5String()
})

const studentUpdateDtoInType = shape({
    id: uu5String().isRequired(),
    currentSemester: oneOf(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]),
    specialization: oneOf(["Economics and management", "Information Technology", "ICT Project management"]),
    erasmus: shape({
        destionations: array(shape({
            order: string(500),
            school: string(500),
            country: string(500),
            from: string(500),
            to: string(500),
            numberOfCredits:string(500)
        }),3)
    })
})