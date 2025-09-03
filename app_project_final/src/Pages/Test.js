import React, { useState } from 'react'
import './test.css'

const TestComp = () => {
    const [activeTab, setActiveTab] = useState('Sign Up')
    const tabData = ['Sign Up', 'Login']
    return (
        <div className='test-main'>
            <div className='test-inside'>
                <div className='test-left'>
                    <h3 className='white'>
                        We solve digital problems with an outstanding creative flaresss
                    </h3>
                    <p className='white'>We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.</p>
                </div>
                <div className='test-right'>
                    <div className='form-main'>
                        <div className='form-head'>
                            {tabData?.map((item) => <button
                                className={`${activeTab === item ? 'active' : ''}`}
                                onClick={() => setActiveTab(item)}>{item}</button>)}
                        </div>
                        {activeTab === 'Login' ? <>
                            <h2>Login</h2>
                        </> : <h2>Signup</h2>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestComp
