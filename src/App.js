import CashMateBenefits from "./components/Benefits/CashMateBenefits";
import CashMateTimeSavings from "./components/TimeSavings/CashMateTimeSavings";
import CashMateHero from "./components/Hero/CashMateHero";
import CashMateHighlights from "./components/Highlights/CashmateHighlights";
import CashMatePricing from "./components/Pricing/Pricing";
import CashMateFooter from "./components/Footer/CashMateFooter";
import CashmateFaq from "./components/FAQ/Faq";

function App() {
  return (
    <div>
      <CashMateHero />
      <CashMateHighlights />
      <CashMateTimeSavings />
      <CashMatePricing />
      <CashMateBenefits />
      <CashmateFaq />
      <CashMateFooter />
    </div>
  );
}
export default App;
