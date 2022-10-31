import React from 'react'

interface ImportsIds {
    Imports: any;
    date: Date;
    userIDApp: Number;
    desksApp: string;

}

function NewBookingCheck(Imports: ImportsIds) {

    let date = Imports.date
    let userIDApp = Imports.userIDApp
    let desksApp = Imports.desksApp



  return (
    console.log(date),
    console.log(userIDApp),
    console.log(desksApp)

  )
}

export default NewBookingCheck
