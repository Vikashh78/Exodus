import React from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false
}) 

{
  return (

    <div className={`bg-white p-4 rounded-2xl text-sm flex`}>

      <div className="w-1/2">
        <label className="text-black/50 mb-2 inline-block">
            {label}
        </label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} // && checks if onamountChange has any value is avail or not
        />
      </div>

      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency type</p>
        <select className="rounded-lg px-4 py-1 bg-gray-400 cursor-pointer outline-none"
            value={selectCurrency}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled={currencyDisable}
          >
            {currencyOptions.map((currency) => (  // {} -- means javascript starts here
                <option key={currency} value={currency}>
                  {currency}
                </option>  //always remember the KEY in maps
            ))} 
        </select>
      </div>
    </div>
  );
}

export default InputBox;
