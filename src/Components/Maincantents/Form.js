import { useState } from 'react'
import './Form.css'

const Form = () => {
    const [date, setDate] = useState("")
    const [sitename, setSitename] = useState("")
    const [number, setNumber] = useState("")
    const [category, setCategory] = useState("")
    const [vendor, setVendor] = useState("")
    const [amount, setAmount] = useState("")
    const [comments, setComments] = useState("")

    return (
        <div className='form-wrapper'>
            <div className='header'>
                <div className='account'>
                    <h4>Account Type</h4>
                    <select>
                        <option>Daily Wage</option>
                        <option>Weekly payment</option>
                        <option>claim</option>
                    </select>
                </div>

                <div className='details'>
                    <label>Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>

                <div className='row'>
                    <div className='column sitename'>
                        <label>Site Name</label>
                        <select value={sitename} onChange={(e) => setSitename(e.target.value)}>
                            <option>Sivakumar-Latha hotel</option>
                            <option>Saravanan-Dhanya Nagar</option>
                            <option>ESM-A.A.Nagar</option>
                        </select>
                    </div>

                    <div className='column vcname'>
                        <label>Vendor/Contractor</label>
                        <select value={vendor} onChange={(e) => setVendor(e.target.value)}>
                            <option>Bannari Amman Traders</option>
                        </select>
                    </div>
                    <div className='name'>
                        <p>Vendor</p>
                    </div>
                </div>

                <div className='column quantity'>
                    <label>Quantity</label>
                    <input
                        type='number'
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                </div>

                <div className='row'>
                    <div className='column category'>
                        <label>Category</label>
                        <select value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option>Cement</option>
                            <option>Machine Service</option>
                        </select>
                    </div>

                    <div className='column amount'>
                        <label>Amount</label>
                        <input
                            type='number'
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                </div>

                <div className='forcomments'>
                    <div className='row'>
                        <div className='column comments'>
                            <label>Comments</label>
                            <input className='comminput'
                                type='text'
                                placeholder='Enter Your Comments ...'
                                value={comments}
                                onChange={(e) => setComments(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form
