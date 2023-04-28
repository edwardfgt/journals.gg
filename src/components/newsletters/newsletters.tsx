import { FC } from "react";

const Newsletters:FC = () => {

    return (
        <div>
          <div className="mt-5 p-5 pt-14 text-white">
            <div className="mx-20">
            <h1 className="text-3xl font-bold">Newsletters</h1>
            <p>
              We're the go-to source for market news and investing insights, trusted by{" "}
              <b>tens of thousands</b> of engaged retail and institutional investors.
            </p>
            <p>
              From <b>CEOs</b> and <b>hedge fund managers</b> to <b>amateur traders</b>, our
              audience consists of finance and technology workers looking to understand
              the world of <b>emerging investments</b>.
            </p>
            <p>Interested in advertising with us? Get in touch!</p>
    
            <div className="container mx-auto">
              <h2 className="text-2xl font-semibold mt-4">Investing Journal</h2>
              <p>
                Our flagship publication - Bitesize market-moving news, summaries and links
                from the world of investing, three times a week.
              </p>
              <p>
                <b>Subscribers:</b> 24,000+
              </p>
              <p>
                <b>Open Rate:</b> 38%
              </p>
              <p>
                <b>CTR:</b> 3.9%
              </p>
              <p>
                <b>Sponsorships:</b> Currently open, please fill in our form.
              </p>
            </div>
    
            <div className="container mx-auto">
              <h2 className="text-2xl font-semibold mt-4">Crypto Journal</h2>
              <p>
                Bitesize market-moving news, summaries and links from the world of Crypto and
                Web3, twice a week.
              </p>
              <p>
                <b>Subscribers:</b> 3200+
              </p>
              <p>
                <b>Open Rate:</b> 57.4%
              </p>
              <p>CTR: 1.6%</p>
              <p>
                <b>Sponsorships:</b> Closed
              </p>
            </div>
    
            <div className="container mx-auto">
              <h2 className="text-2xl font-semibold mt-4">AI Journal</h2>
              <p>
                Bitesize market-moving news, summaries and links from the world of AI and
                Machine Learning, every Friday.
              </p>
              <p>
                <b>Subscribers:</b> 1500+
              </p>
              <p>
                <b>Open Rate:</b> 40.6%
              </p>
              <p>
                <b>CTR:</b> 11.7%
              </p>
              <p>
                <b>Sponsorships:</b> Closed
              </p>
            </div>
          </div>
          </div>
        </div>
      );
}

export default Newsletters;
