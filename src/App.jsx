
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  
  const [bill, setBill] = useState(0)
  const [people, setPeople] = useState(1)
  const [tipAmount, setTipAmount] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)
  const [splitAmount, setSplitAmount] = useState(0)
  const [isCustom, setIsCustom] = useState(false)
  const [tip, setTip] = useState(0)
  
const calTip =(tip) => {
  //  const tipcal =  (bill/100)*tip
  setTip(tip)
   setTipAmount((bill/100)*tip)
}

useEffect(()=>{
  setTotalAmount( (+bill)+(+tipAmount))
  setSplitAmount((+totalAmount)/(+people))

},[people,tipAmount,tip,calTip])

const reset =()=>{
  setBill(0)
  setPeople(1)
  setTipAmount(0)
  setTotalAmount(0)
  setSplitAmount(0)
  setIsCustom(false)
  setTip(0)
}
  return (
    <>
      <div className='flex flex-col lg:justify-center h-screen'>
        <img src='/images/logo.svg' alt='' className='w-20 mx-auto lg:mb-20 my-5' />
        <div className='bg-white rounded-3xl shadow-xl  lg:grid lg:grid-cols-2 gap-x-5 lg:w-[60%] mx-auto p-7 w-[100%]'>
          <div>
            <label htmlFor='bill' className='text-[#5E7A7D] text-[16px] font-bold mb-2' >Bill</label>
            <div className='relative mb-10'>
            <input
            id="bill"
            type='number'
            name='Bill'
            onChange={(e)=>setBill(e.target.value)}
            value={bill}
            className='bg-[#F3F9FA] border-[#F3F9FA] rounded-md p-2 w-full text-right !border-[2px] mt2 focus:!border-[#26C2AE] focus:!border-[2px]'
            />
            <img src='/images/icon-dollar.svg' alt='icon-dollor' className='absolute top-1/2  transform left-3 -translate-y-1/2' />
            </div>

            <p className='text-[#5E7A7D] text-[16px] font-bold'>Select Tip %</p>
            <div className='grid lg:grid-cols-3 grid-cols-2  gap-3 my-2 mb-10'>
              <button onClick={()=>calTip(5)} className={`bg-[#00474B] rounded-md text-white p-3 ${tip===5&&"!bg-[#9FE8DF] !text-[#00474B]"}`}>5%</button>
              <button onClick={()=>calTip(10)} className={`bg-[#00474B] rounded-md text-white p-3 ${tip===10&&"!bg-[#9FE8DF] !text-[#00474B]"}`}>10%</button>
              <button onClick={()=>calTip(15)} className={`bg-[#00474B] rounded-md text-white p-3 ${tip===15&&"!bg-[#9FE8DF] !text-[#00474B]"}`}>15%</button>
              <button onClick={()=>calTip(25)} className={`bg-[#00474B] rounded-md text-white p-3 ${tip===25&&"!bg-[#9FE8DF] !text-[#00474B]"}`}>25%</button>
              <button onClick={()=>calTip(50)} className={`bg-[#00474B] rounded-md text-white p-3 ${tip===50&&"!bg-[#9FE8DF] !text-[#00474B]"}`}>50%</button>
             
              {isCustom?<input
                  id="tip-custom"
                  type='number'
                  name='tip-custom'
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      calTip(e.target.value);
                      setIsCustom(false)
                    }
                  }}
                  className='bg-[#F3F9FA] border-[#F3F9FA] rounded-md p-2 w-full text-right !border-[2px] mt2 focus:!border-[#26C2AE] focus:!border-[2px]'
                />: <button onClick={()=>setIsCustom(true)} className='bg-[#00474B] rounded-md text-white p-3'>Custom</button>}
            </div>

            <label htmlFor='people' className='text-[#5E7A7D] text-[16px] font-bold mt-5' >Number of People</label>
            <div className='relative my-4 lg:my-auto'>
            <input
            id="people"
            type='text'
            name='People'
            defaultValue={1}
            onChange={(e)=>setPeople(e.target.value)}
            value={people}
            className='bg-[#F3F9FA] border-[#F3F9FA] rounded-md p-2 w-full text-right !border-[2px] mt2 focus:!border-[#26C2AE] focus:!border-[2px]'
            />
            <img src='/images/icon-person.svg' alt='icon-dollor'className='absolute top-1/2  transform left-3 -translate-y-1/2'  />
            </div>
          </div>



          <div className='bg-[#00474B] p-7 rounded-2xl'>
            <div className='flex justify-between items-center'>
              <div>
                <p  className='text-[#fff] text-[16px] font-bold'>Tip Amount</p>
                <p className='text-[#7F9D9F] text-[13px] font-bold'>/ person</p>
              </div>
              <div className='text-[#26C2AE] text-[32px] lg:text-[48px] font-bold'>{`$${tipAmount.toFixed(2)}`}</div>
            </div>
            <div className='flex justify-between  items-center'>
              <div>
              <p  className='text-[#fff] text-[16px] font-bold'>Total Amount</p>
               
              </div>
              <div className='text-[#26C2AE] text-[32px] lg:text-[48px] font-bold'>{`$${totalAmount.toFixed(2)}`}</div>
            </div>
            <div className='flex justify-between  items-center'>
              <div>
                <p  className='text-[#fff] text-[16px] font-bold'>Total</p>
                <p className='text-[#7F9D9F] text-[13px] font-bold'>/ person</p>
              </div>
              <div className='text-[#26C2AE] text-[32px] lg:text-[48px] font-bold'>{`$${splitAmount.toFixed(2)}`}</div>
            </div>
            <button onClick={()=>reset()} className='bg-[#26C2AE] rounded-md w-full text-[20px] font-bold text[#00474B] mt-5 lg:mt-20 p-3'>RESET</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
