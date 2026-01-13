import React from "react";
import PageSection from "../../layout/PageSection";
import ThreeDee from "../../components/cards/ThreeDee";
import Card1 from "../../components/cards/Card1";
import Card2 from "../../components/cards/Card2";
import CardGlassDetails from "../../components/cards/CardGlassDetails";
import GlassCard from "../../components/GlassCard";
import ServiceCards from "../../components/SrviceCard";
import Menu3d from "../../components/Menu3d";

const TempPage = () => {
  return (
    <PageSection className="min-h-screen relative">
      <div>
        Card1
        <Card1 />
      </div>

      <div>
        Card2
        <Card2 />
      </div>
      <div>
        CardGlassDetails
        <CardGlassDetails />
      </div>
      <div>
        GlassCard
        <GlassCard />
      </div>
      <div>
        ServiceCards
        <ServiceCards />
      </div>

      <div>
        Menu3d
        <Menu3d />
      </div>
      <div>
        ThreeDee
        <ThreeDee />
      </div>
    </PageSection>
  );
};

export default TempPage;
