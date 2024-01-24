import { loadStripe } from "@stripe/stripe-js";
import SectionTitle5 from "../../Components/SectionTitle5";
import { Elements } from "@stripe/react-stripe-js";

const Payment = () => {
  // =================================================================
  const stripePromise = loadStripe("");

  // =================================================================
  return (
    <section className="text-white bg-slate-900">
      <div className="mb-24">hello</div>
      <SectionTitle5 heading={"Please Pay For Order"}></SectionTitle5>

      <div>
        <Elements stripe={stripePromise}></Elements>
      </div>
    </section>
  );
};

export default Payment;
