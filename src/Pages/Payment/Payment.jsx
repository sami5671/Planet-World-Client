import { loadStripe } from "@stripe/stripe-js";
import SectionTitle5 from "../../Components/SectionTitle5";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

const Payment = () => {
  // =================================================================
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

  // =================================================================
  return (
    <section className="text-white bg-slate-900">
      <div className="mb-24">hello</div>
      <SectionTitle5 heading={"Please Pay For Order"}></SectionTitle5>

      <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm></CheckOutForm>
        </Elements>
      </div>
    </section>
  );
};

export default Payment;
