import React from 'react'

function Footer() {
  return (
    <div className="footer-containor bg-[#ebf2fa] flex mt-14 mb-8 justify-evenly" >
        <div className="left flex flex-col gap-12 py-5">
                    <a href="#" className='hover:text-blue-600'>FAQ</a>
                    <a href="#" className='hover:text-blue-600'>Media Center</a>
                    <a href="#" className='hover:text-blue-600'>Ways to Watch</a>
                    <a href="#" className='hover:text-blue-600'>Cookie Prefrences</a>
                    <a href="#" className='hover:text-blue-600'>Speed Test</a>
        </div>
        <div className="mid flex flex-col gap-12 py-5">
                    <a href="#" className='hover:text-blue-600'>Help Center</a>
                    <a href="#" className='hover:text-blue-600'>Investor Relations</a>
                    <a href="#" className='hover:text-blue-600'>Terms of Use</a>
                    <a href="#" className='hover:text-blue-600'>Corporate Information</a>
                    <a href="#" className='hover:text-blue-600'>Legal Notices</a>

        </div>
        <div className="right flex flex-col gap-12 py-5">
                    <a href="#" className='hover:text-blue-600'>Account</a>
                    <a href="#" className='hover:text-blue-600'>Jobs</a>
                    <a href="#" className='hover:text-blue-600'>Privacy</a>
                    <a href="#" className='hover:text-blue-600'>Contact Us</a>
                    <a href="#" className='hover:text-blue-600'>only on netflix</a>

        </div>
    </div>
  )
}

export default Footer