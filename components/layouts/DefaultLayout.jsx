import React, { Fragment } from 'react'
import DefaultFooter from './DefaultFooter'
import DefaultHeader from './DefaultHeader'

const DefaultLayout = ({ children }) => {
    return (
        <Fragment>
            <DefaultHeader />

            <div className='min-h-[95vh]'>
                {children}
            </div>

            <DefaultFooter />
        </Fragment>
    )
}

export default DefaultLayout