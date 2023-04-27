import { FC } from "react";
import phone from '../../assets/phone.png'
import Companies from "../companies/companies";

const Home:FC = () => {


    return (
    <>
    <div className="mt-90 mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-40 lg:flex lg:px-8 lg:pt-40">
      <div className="grid grid-cols-2 gap-4">
        <div>
        <h1 className="mt-100 mb-4 text-6xl">Journals.GG</h1>
        <h2 className="mb-10">We publish a selection of newsletters covering the world of emerging investments.
            We keep tens of thousands of engaged investors ahead of the curve - from stocks, to crypto and beyond.
            No BS, no fluff and no spam - We help our readers become a better investor in 5 minutes per day.</h2>
        </div>
  
        <div>
          <img src={phone}></img>
        </div>
      </div>
     </div>

     <Companies/>
  </>
      );
}

export default Home;
