import React from "react";
import HeroSection from "../components/HeroSection";
import FeatureItem from "../components/FeatureItem";
import chatIcon from "../images/icon-chat.webp";
import moneyIcon from "../images/icon-money.webp";
import securityIcon from "../images/icon-security.webp";

function HomePage() {
  return (
    <div>
      <main>
        <HeroSection />
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <FeatureItem
            icon={chatIcon}
            title="You are our #1 priority"
            description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
          />
          <FeatureItem
            icon={moneyIcon}
            title="More savings means higher rates"
            description="The more you save with us, the higher your interest rate will be!"
          />
          <FeatureItem
            icon={securityIcon}
            title="Security you can trust"
            description="We use top of the line encryption to make sure your data and money is always safe."
          />
        </section>
      </main>
    </div>
  );
}

export default HomePage;
