import React from 'react'
import Commonbtn2 from './common/Commonbtn2'
import teamimg1 from '../assets/images/webp/teamimg1.webp'
import teamimg2 from '../assets/images/webp/teamimg2.webp'
import teamimg3 from '../assets/images/webp/teamimg3.webp'
import teamimg4 from '../assets/images/webp/teamimg4.webp'
import teamimg5 from '../assets/images/webp/teamimg5.webp'
import teamimg6 from '../assets/images/webp/teamimg6.webp'
import teamimg7 from '../assets/images/webp/teamimg7.webp'
import teamimg8 from '../assets/images/webp/teamimg8.webp'
const Ourteam = () => {
    const ourteam = [
        {
            img1: teamimg1,
            title: 'James Vuong',
            title2: '(Co-CEO)',
            para: 'James is a dynamic CEO leading two thriving companies. He co-founded ROOMERANG, elevating it from $0 to $8 million in annual net revenue in just 5 years. Additionally, as a co-founder of KEYNINJA, James achieved an ',
            para2: 'impressive 50% year-over-year net revenue growth within the same timeframe. With a background in property valuation, sales, and technology, James brings a unique blend of skills to drive innovation and success in both ventures.'
        },
        {
            img1: teamimg2,
            title: 'Tricia Yong',
            title2: '(Co-CEO)',
            para: 'Tricia is a Marketing Director with 15 years of expertise, co-founded ROOMERANG and KEYNINJA with James Vuong, bringing a wealth of knowledge from the tech industry, property valuation, and consumer ',
            para2: 'products. With a background in consumer behavior, UI/UX design, and marketing strategies, she adeptly navigates the convergence of technology and marketing. Tricia is renowned for crafting compelling narratives that deeply resonate with both business clients and consumers, propelling the company to success in the ever-evolving tech landscape.'
        },
        {
            img1: teamimg3,
            title: 'Kevin Li',
            title2: '(CFO)',
            para: 'Kev is a seasoned CFO with 15 years of expertise in the Big Pharma sector, demonstrated his leadership by establishing a successful branch office in Myanmar, overseeing its growth to 70 employees in just 24 months. His',
            para2: 'strategic pricing initiatives for life-saving medications not only gained eligibility onto the government reimbursement list in Singapore, Sri Lanka, and the Maldives but also significantly alleviated the financial burden on patients grappling with the costs of disease.'
        },
        {
            img1: teamimg4,
            title: 'Ryan Ang',
            title2: '(Lorem Ipsum)',
            para: 'Experienced in investing in traditional equity markets and blockchain companies. Early adopter of digital assets and co-founded a decentralised finance application that provides walletservices, swaps and DeFi ',
            para2: 'products. Previously in the private equity arm of one of Singapore’s leading asset management funds, Dymon Asia Capital. Previously the fund manager at Blockchain Ventures.'
        },
        {
            img1: teamimg5,
            title: 'Dylan',
            title2: '(Executive Producer)',
            para: 'Lorem ipsum dolor sit amet consectetur. Quis in ullamcorper molestie velit proin est. Vestibulum eget eu in egestas. Consequat mi consequat eu eu id integer est. Eget at egestas morbi vitae platea imperdiet sed egestas dignissim.',
            para2: 'Lorem ipsum dolor sit amet consectetur. Amet erat condimentum.'
        },
        {
            img1: teamimg6,
            title: 'Ralf',
            title2: '(Lorem Ipsum)',
            para: 'Lorem ipsum dolor sit amet consectetur. Cursus vulputate facilisis mattis diam consectetur molestie ultrices. Laoreet sagittis facilisis consequat dignissim viverra etiam gravida. Eu cursus scelerisque purus pharetra enim.',
            para2: 'Lorem ipsum dolor sit amet consectetur. Donec amet mattis sit fermentum. Cursus at sed commodo ac mattis feugiat vel faucibus iaculis. Id congue egestas sit leo placerat. Ipsum a feugiat massa fringilla justo consectetur. Eu euismod viverra ut porttitor sed leo. Eget viverra etiam sit nunc.'
        },
        {
            img1: teamimg7,
            title: 'Jordan Stratford',
            title2: '(Creative Director)',
            para: 'Jordan is an international best-selling author of the Wollstonecraft Detective Agency series with Penguin Random House, which was adapted to a mobile game for iOS, Android, and Nintendo Switch, and is in development',
            para2: 'for television with the world’s largest streaming producer.'
        },
        {
            img1: teamimg8,
            title: 'Jae Sik Choi',
            title2: '(Lorem Ipsum)',
            para: 'Early adopter of digital assets since 2011, founded Garuda Crypto, The Cryptocurrency Fund Project and Kalian Cryptocurrency Fund, along with being deeply experienced in DeFi and dApps since 2019. Previously an ex-NAB',
            para2: 'impressive 50% year-over-year net revenue growth within the same timeframe. With a background in property valuation, sales, and technology, James brings a unique blend of skills to drive innovation and success in both ventures.'
        },

    ]
    return (
        <>
            <div className='pt-5 mt-5 mt-md-0 position-relative z-1' id='Team'>
                <p className="fs-xxl animater2 z-n1 color-black2 fw-bold ff-roboto lh-224">Our Team</p>
                <div className='container-xl max-w-1140'>
                    <div className='text-center mt-md-5 pt-md-4'>
                        <Commonbtn2 text="OUR TEAM" />
                    </div>
                    <h2 className='fs-lg lh-62 fw-700 text-center fw-bold ff-roboto pb-2 color-white mt-3 mb-4 mb-md-5 pb-lg-3'>Behind our expertise</h2>
                    <div className='row justify-content-center'>

                        {ourteam.map((obj, index) => {
                            return (
                                <div className=' col-lg-6 mb-4 col-md-10'>
                                    <div className='team-card p-3 position-relative z-1 overflow-hidden'>
                                        <div className=' red-ellipse2 z-n1'></div>
                                        <div className='d-sm-flex gap-3 mb-2 pb-1 align-items-center justify-content-center'>
                                            <div className='text-center text-sm-start'><img src={obj.img1} alt="image" className='img-team' />  </div>
                                            <div className='mt-3 mt-sm-0'>
                                                <p className='fs-md1 text-center text-sm-start mb-1 color-white  ff-roboto fw-semibold lh-21'>{obj.title} <span className='color-gradient fs-sm ff-roboto fw-normal'>{obj.title2}</span></p>
                                                <p className='fs-sm3 text-center text-sm-start color-white mb-0 opacity-75 ff-roboto'>{obj.para}</p>
                                            </div>
                                        </div>
                                        <p className='fs-sm text-center text-sm-start color-white fw-normal mb-0 ff-roboto opacity-75'>{obj.para2}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ourteam