import CashMateBenefits from "./components/Benefits/CashMateBenefits";
import CashMateTimeSavings from "./components/TimeSavings/CashMateTimeSavings";
import CashMateHero from "./components/Hero/CashMateHero";
import CashMateHighlights from "./components/Highlights/CashmateHighlights";
import CashMateFooter from "./components/Footer/CashMateFooter";

function App() {
  return (
    <div>
      <CashMateHero />
      <CashMateHighlights />
      <CashMateTimeSavings />
      <CashMateBenefits />
      <CashMateFooter />
    </div>
  );
}
export default App;
