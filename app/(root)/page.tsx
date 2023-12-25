'use client'
 import Image from 'next/image'
import { Des_1, Des_2, Des_3, Hero_img } from '../../public'
import Link from 'next/link'
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import useScrollAnimation from '@/Hooks/useScrollAnimation';



export default function Home() {

  const { ref, isVisible } = useScrollAnimation();
  return (
    <main>

      <section className='main_header_section slide-top' >
        <div className="header_section">
          <h1 >Event. Planning. <br /> Genius.</h1>
          <div className="header_box">
            <div className="header_info">
              <p >Create an account for FREE </p>
              <div>
                <Link href="" className="btn" >Sign Up</Link>
              </div>
              <div className="header_text" >
                <p className="yellow_cr">We’re the All-in-One Platform you’ve been waiting for.</p>
                <p className="mb">Plus. No monthly or annual fees. </p>
              </div>
            </div>
          </div>
        </div>

      </section>

      
      <div className='main_container'>

      <div className={`service_cards_section ${isVisible ? 'scale-up-center' : ''}`} ref={ref}>
       
                <h1>Do more. On One Platform</h1>
                <div className="service_cards">
                    <div className="service_card" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                            <path d="M20.5004 36.5996H17.4004C16.8004 36.5996 16.4004 36.9996 16.4004 37.5996V40.5996C16.4004 41.1996 16.8004 41.5996 17.4004 41.5996H20.5004C21.1004 41.5996 21.5004 41.1996 21.5004 40.5996V37.5996C21.5004 37.0996 21.0004 36.5996 20.5004 36.5996Z" fill="#FAE100"/>
                            <path d="M33.5004 36.5996H30.4004C29.8004 36.5996 29.4004 36.9996 29.4004 37.5996V40.5996C29.4004 41.1996 29.8004 41.5996 30.4004 41.5996H33.5004C34.1004 41.5996 34.5004 41.1996 34.5004 40.5996V37.5996C34.5004 37.0996 34.1004 36.5996 33.5004 36.5996Z" fill="#FAE100"/>
                            <path d="M46.6 36.5996H43.5C42.9 36.5996 42.5 36.9996 42.5 37.5996V40.5996C42.5 41.1996 42.9 41.5996 43.5 41.5996H46.6C47.2 41.5996 47.6 41.1996 47.6 40.5996V37.5996C47.6 37.0996 47.2 36.5996 46.6 36.5996Z" fill="#FAE100"/>
                            <path d="M20.5004 49.5H17.4004C16.8004 49.5 16.4004 49.9 16.4004 50.5V53.5C16.4004 54.1 16.8004 54.5 17.4004 54.5H20.5004C21.1004 54.5 21.5004 54.1 21.5004 53.5V50.5C21.5004 50 21.0004 49.5 20.5004 49.5Z" fill="#FAE100"/>
                            <path d="M33.5004 49.5H30.4004C29.8004 49.5 29.4004 49.9 29.4004 50.5V53.5C29.4004 54.1 29.8004 54.5 30.4004 54.5H33.5004C34.1004 54.5 34.5004 54.1 34.5004 53.5V50.5C34.5004 50 34.1004 49.5 33.5004 49.5Z" fill="#FAE100"/>
                            <path d="M46.6 49.5H43.5C42.9 49.5 42.5 49.9 42.5 50.5V53.5C42.5 54.1 42.9 54.5 43.5 54.5H46.6C47.2 54.5 47.6 54.1 47.6 53.5V50.5C47.6 50 47.2 49.5 46.6 49.5Z" fill="#FAE100"/>
                            <path d="M56.0002 15.3992H34.3002V13.4992C36.6002 12.5992 38.2002 10.3992 38.2002 7.79922C38.2002 4.39922 35.4002 1.69922 32.0002 1.69922C28.6002 1.69922 25.8002 4.39922 25.8002 7.79922C25.8002 10.3992 27.4002 12.5992 29.7002 13.4992V15.3992H8.0002C4.6002 15.3992 1.7002 18.1992 1.7002 21.6992V55.9992C1.7002 59.3992 4.5002 62.2992 8.0002 62.2992H56.0002C59.4002 62.2992 62.3002 59.4992 62.3002 55.9992V21.5992C62.3002 18.1992 59.4002 15.3992 56.0002 15.3992ZM32.0002 6.19922C32.9002 6.19922 33.7002 6.89922 33.7002 7.79922C33.7002 8.69922 33.0002 9.39922 32.0002 9.39922C31.0002 9.39922 30.3002 8.69922 30.3002 7.79922C30.3002 6.89922 31.1002 6.19922 32.0002 6.19922ZM8.0002 19.8992H56.0002C57.0002 19.8992 57.8002 20.6992 57.8002 21.6992V27.8992H6.3002V21.6992C6.3002 20.5992 7.0002 19.8992 8.0002 19.8992ZM56.0002 57.7992H8.0002C7.0002 57.7992 6.2002 56.9992 6.2002 55.9992V32.2992H57.7002V55.9992C57.8002 56.9992 57.0002 57.7992 56.0002 57.7992Z" fill="#FAE100"/>
                          </svg>
                        <p className="service_card_title">List Events</p>
                        <p>You can list events for free. Customers absorb service fees by default.</p>
                    </div>
                    <div className="service_card">
                        <svg xmlns="http://www.w3.org/2000/svg" width="65" height="64" viewBox="0 0 65 64" fill="none">
                            <path d="M35.7678 11.8992H30.3678C29.3678 11.8992 28.5678 11.1992 28.5678 10.2992C28.5678 9.39922 29.3678 8.69922 30.3678 8.69922H38.3678C39.5678 8.69922 40.6678 7.69922 40.6678 6.39922C40.6678 5.09922 39.6678 4.09922 38.3678 4.09922H36.0678V3.99922C36.0678 2.79922 35.0678 1.69922 33.7678 1.69922C32.5678 1.69922 31.4678 2.69922 31.4678 3.99922V4.09922H30.2678C26.7678 4.09922 23.9678 6.89922 23.9678 10.1992C23.9678 13.4992 26.7678 16.2992 30.2678 16.2992H35.6678C36.6678 16.2992 37.4678 16.9992 37.4678 17.8992C37.4678 18.7992 36.6678 19.4992 35.6678 19.4992H26.6678C25.4678 19.4992 24.3678 20.4992 24.3678 21.7992C24.3678 23.0992 25.3678 24.0992 26.6678 24.0992H31.5678V24.1992C31.5678 25.3992 32.5678 26.4992 33.8678 26.4992C35.0678 26.4992 36.1678 25.4992 36.1678 24.1992V24.0992C39.4678 23.9992 42.1678 21.2992 42.1678 17.9992C42.0678 14.5992 39.2678 11.8992 35.7678 11.8992Z" fill="#FAE100"/>
                            <path d="M14.4674 35.2988H10.3674C8.06738 35.2988 6.06738 37.1988 6.06738 39.5988V57.9988C6.06738 60.2988 7.96738 62.2988 10.3674 62.2988H14.4674C16.7674 62.2988 18.7674 60.3988 18.7674 57.9988V39.5988C18.6674 37.1988 16.7674 35.2988 14.4674 35.2988ZM14.1674 57.7988H10.5674V39.7988H14.1674V57.7988Z" fill="#FAE100"/>
                            <path d="M34.7672 29.5996H30.6672C28.3672 29.5996 26.3672 31.4996 26.3672 33.7996V57.9996C26.3672 60.2996 28.2672 62.2996 30.6672 62.2996H34.7672C37.0672 62.2996 39.0672 60.3996 39.0672 57.9996V33.8996C38.9672 31.4996 37.0672 29.5996 34.7672 29.5996ZM34.4672 57.7996H30.8672V34.0996H34.4672V57.7996Z" fill="#FAE100"/>
                            <path d="M54.9674 35.2988H50.8674C48.5674 35.2988 46.5674 37.1988 46.5674 39.5988V57.9988C46.5674 60.2988 48.4674 62.2988 50.8674 62.2988H54.9674C57.2674 62.2988 59.2674 60.3988 59.2674 57.9988V39.5988C59.2674 37.1988 57.3674 35.2988 54.9674 35.2988ZM54.7674 57.7988H51.1674V39.7988H54.7674V57.7988Z" fill="#FAE100"/>
                          </svg>
                        <p className="service_card_title">Sell Tickets</p>
                        <p>Our platform allows you to make sales online and also over the phone. Accept cash and in-person payments? You can do it all in one place.</p>
                    </div>
                    <div className="service_card">
                        <svg xmlns="http://www.w3.org/2000/svg" width="65" height="64" viewBox="0 0 65 64" fill="none">
                            <path d="M60.3332 29.7992H54.4332C53.3332 19.2992 45.0332 10.9992 34.6332 9.89922V3.99922C34.6332 2.79922 33.6332 1.69922 32.3332 1.69922C31.1332 1.69922 30.0332 2.69922 30.0332 3.99922V9.89922C19.6332 10.9992 11.3332 19.2992 10.2332 29.7992H4.3332C3.1332 29.7992 2.0332 30.7992 2.0332 32.0992C2.0332 33.2992 3.0332 34.3992 4.3332 34.3992H10.2332C11.2332 44.9992 19.6332 53.3992 30.1332 54.4992V59.9992C30.1332 61.1992 31.1332 62.2992 32.4332 62.2992C33.6332 62.2992 34.7332 61.2992 34.7332 59.9992V54.3992C45.2332 53.2992 53.6332 44.8992 54.6332 34.2992H60.3332C61.5332 34.2992 62.6332 33.2992 62.6332 31.9992C62.6332 30.7992 61.5332 29.7992 60.3332 29.7992ZM34.5332 49.7992C34.5332 48.5992 33.5332 47.5992 32.3332 47.5992C31.1332 47.5992 30.1332 48.5992 30.1332 49.7992C22.1332 48.7992 15.7332 42.2992 14.8332 34.1992H17.1332C18.3332 34.1992 19.4332 33.1992 19.4332 31.8992C19.4332 30.6992 18.4332 29.5992 17.1332 29.5992H14.8332C15.9332 21.5992 22.2332 15.2992 30.1332 14.2992C30.2332 15.3992 31.2332 16.2992 32.3332 16.2992C33.4332 16.2992 34.4332 15.3992 34.5332 14.2992C42.5332 15.2992 48.8332 21.5992 49.8332 29.5992C48.7332 29.6992 47.8332 30.6992 47.8332 31.7992C47.8332 32.9992 48.7332 33.8992 49.8332 33.9992C49.0332 42.2992 42.6332 48.7992 34.5332 49.7992Z" fill="#FAE100"/>
                            <path d="M38.4329 36.1C39.7329 34.7 40.5329 32.8 40.5329 30.7C40.5329 26.2 36.8329 22.5 32.3329 22.5C27.8329 22.5 24.1329 26.2 24.1329 30.7C24.1329 32.8 24.9329 34.7 26.2329 36.1C24.6329 36.8 23.2329 37.7 21.9329 38.8C21.0329 39.6 20.9329 41 21.7329 42C22.1329 42.5 22.8329 42.8 23.4329 42.8C23.9329 42.8 24.5329 42.6 24.9329 42.2C27.0329 40.4 29.6329 39.3 32.3329 39.3C35.1329 39.3 37.7329 40.3 39.7329 42.1C40.6329 42.9 42.0329 42.9 42.9329 41.9C43.7329 41 43.7329 39.6 42.7329 38.7C41.4329 37.7 40.0329 36.8 38.4329 36.1ZM32.3329 27C34.3329 27 36.0329 28.7 36.0329 30.7C36.0329 32.7 34.3329 34.4 32.3329 34.4C30.3329 34.4 28.6329 32.7 28.6329 30.7C28.6329 28.7 30.3329 27 32.3329 27Z" fill="#FAE100"/>
                          </svg>
                        <p className="service_card_title">Run SMS Campaigns</p>
                        <p>No need to go out and look for a separate platform to reach your recurring customer base. Run SMS Campaigns right from your dashboard.   </p>
                    </div>
                    <div className="service_card">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                            <path d="M19.2998 1.80078H7.89981C4.4998 1.80078 1.7998 4.50078 1.7998 7.90078V19.3008C1.7998 20.5008 2.7998 21.6008 4.0998 21.6008C5.3998 21.6008 6.39981 20.6008 6.39981 19.3008V7.90078C6.29981 7.00078 6.9998 6.30078 7.89981 6.30078H19.2998C20.4998 6.30078 21.5998 5.30078 21.5998 4.00078C21.5998 2.70078 20.4998 1.80078 19.2998 1.80078Z" fill="#FAE100"/>
                            <path d="M56.1004 1.80078H44.7004C43.5004 1.80078 42.4004 2.80078 42.4004 4.10078C42.4004 5.40078 43.4004 6.40078 44.7004 6.40078H56.1004C57.0004 6.40078 57.7004 7.10078 57.7004 8.00078V19.4008C57.7004 20.6008 58.7004 21.7008 60.0004 21.7008C61.3004 21.7008 62.3004 20.7008 62.3004 19.4008V7.90078C62.3004 4.50078 59.5004 1.80078 56.1004 1.80078Z" fill="#FAE100"/>
                            <path d="M60.0004 42.5C58.8004 42.5 57.7004 43.5 57.7004 44.8V56.2C57.7004 57.1 57.0004 57.8 56.1004 57.8H44.7004C43.5004 57.8 42.4004 58.8 42.4004 60.1C42.4004 61.4 43.4004 62.4 44.7004 62.4H56.1004C59.5004 62.4 62.2004 59.7 62.2004 56.3V44.7C62.3004 43.5 61.2004 42.5 60.0004 42.5Z" fill="#FAE100"/>
                            <path d="M19.3002 57.8004H7.9002C7.0002 57.8004 6.3002 57.1004 6.3002 56.2004V44.7004C6.3002 43.5004 5.3002 42.4004 4.0002 42.4004C2.7002 42.4004 1.7002 43.4004 1.7002 44.7004V56.1004C1.7002 59.5004 4.4002 62.2004 7.8002 62.2004H19.2002C20.4002 62.2004 21.5002 61.2004 21.5002 59.9004C21.5002 58.6004 20.5002 57.8004 19.3002 57.8004Z" fill="#FAE100"/>
                          </svg>
                        <p className="service_card_title">Scan Tickets</p>
                        <p>Scan your customers’ tickets right from your mobile device when they walk into your establishment. </p>
                    </div>
                </div>
            </div>

            <div className="show_section">
                <div className="mid_effect"></div>
                <div className="show_container">
                    <div className="show_imgs">
                      <Image src={Des_1} alt='des_1'/>
                      <Image src={Des_2} alt='des_1'/>
                      <Image src={Des_3} alt='des_1'/>
                    </div>
                    <div className="show_info" >
                        <h2>Create your events with ease.</h2>
                        <p>Need reserved seating for <br/>your event? Not a <br/>problem.</p>
                        <p>Use our built-in designer to <br /> customize your seating chart and  <br /> allow customers to select their<br/>seats at checkout</p>
                    </div>
                </div>
            </div>

            <div className="table_section">
                <div className="table_container" >
                    <table>
                        <thead>
                        <tr>
                            <th>Features</th>
                            <th>Event Visionary</th>
                            <th className="tc">Eventbrite</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Create and List Events</td>
                            <td className="tc"><FaCheck  className="small_icon green"/></td>
                            <td className="tc"><FaCheck  className="small_icon green"/></td>
                        </tr>
                        <tr>
                            <td>Sell Tickets</td>
                            <td className="tc"><FaCheck  className="small_icon green"/></td>
                            <td className="tc"><FaCheck  className="small_icon green"/></td>
                        </tr>
                        <tr>
                            <td>Run SMS Campaigns</td>
                            <td className="tc"><FaCheck  className="small_icon green"/></td>
                            <td className="tc"><FaXmark  className="small_icon red"/></td>
                        </tr>
                        <tr>
                            <td>Easily create custom dynamic seating charts</td>
                            <td className="tc"><FaCheck  className="small_icon green"/></td>
                            <td className="tc"><FaXmark  className="small_icon red"/></td>
                        </tr>
                        <tr>
                            <td>Manage Orders</td>
                            <td className="tc"><FaCheck  className="small_icon green"/></td>
                            <td className="tc"><FaCheck  className="small_icon green"/></td>
                        </tr>
                        <tr>
                            <td>Manage Attendees</td>
                            <td className="tc"><FaCheck  className="small_icon green"/></td>
                            <td className="tc"><FaCheck  className="small_icon green"/></td>
                        </tr>
                        <tr>
                            <td>We Pledge Not to Cancel Your Events</td>
                            <td className="tc"><FaCheck  className="small_icon green"/></td>
                            <td className="tc"><FaCheck  className="small_icon green"/></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>






      </div>

    </main>
  )
}