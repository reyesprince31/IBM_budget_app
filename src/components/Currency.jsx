import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../Currency.css"; // Import a custom CSS file for styling

const Currency = () => {
  const { dispatch, currency } = useContext(AppContext);

  let wordCurrency;

  if (currency === "$") wordCurrency = " Dollar";
  if (currency === "£") wordCurrency = " Pound";
  if (currency === "€") wordCurrency = " Euro";
  if (currency === "₹") wordCurrency = " Ruppee";

  const handleCurrencyChange = (newCurrency) => {
    dispatch({ type: "CHG_CURRENCY", payload: newCurrency });
  };

  return (
    <div className="col-sm text-white font-semibold">
      <div className={`alert bg-[#2DCB70] ${currency === "" ? "" : "open"}`}>
        <div className="dropdown">
          <button
            className={` bg-[#2DCB70] ml-1 dropdown-toggle ${
              currency === "" ? "" : "btn-success"
            }`}
            type="button"
            id="currencyDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            <label htmlFor="currencyDropdown">Currency</label> (
            {currency === "" ? "Select Currency" : currency + wordCurrency})
          </button>
          <ul
            className="dropdown-menu bg-[#2DCB70]"
            aria-labelledby="currencyDropdown">
            <li>
              <button
                className="dropdown-item text-black"
                onClick={() => handleCurrencyChange("$")}>
                $ Dollar
              </button>
            </li>
            <li>
              <button
                className="dropdown-item text-black"
                onClick={() => handleCurrencyChange("£")}>
                £ Pound
              </button>
            </li>
            <li>
              <button
                className="dropdown-item text-black"
                onClick={() => handleCurrencyChange("€")}>
                € Euro
              </button>
            </li>
            <li>
              <button
                className="dropdown-item text-black"
                onClick={() => handleCurrencyChange("₹")}>
                ₹ Rupee
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Currency;
