<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <div className="mb-4">
    <label
      className="block text-gray-700 text-sm font-bold mb-2"
      htmlFor="sender"
    >
      Your email address
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="sender"
      name="sender"
      type="email"
      required
      placeholder="Who is this invoice from? (required)"
      // onChange={handleInputChange}
    />
    <label
      className="block text-gray-700 text-sm font-bold my-3"
      htmlFor="billTo"
    >
      Bill To
    </label>
    <textarea
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="billTo"
      name="billTo"
      type="email"
      required
      placeholder="Who is this invoice to? (required)"
      // onChange={handleInputChange}
    />
  </div>
  <div className="mb-6">
    <label
      className="block text-gray-700 text-sm font-bold mb-2"
      htmlFor="shipTo"
    >
      Ship To
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
      id="shipTo"
      name="shipTo"
      type="email"
      required
      placeholder="Client's email"
      // onChange={handleInputChange}
    />
  </div>
</form>;

{
  invoiceFields.map((invoiceField, i) => (
    <div
      className="flex justify-center items-center"
      key={`${invoiceField}~${i}`}
    >
      <label
        className="block text-gray-700 text-sm font-bold mb-2 w-full mr-5"
        htmlFor={`${invoiceField.itemDescription}~${i}`}
      >
        Invoice Item
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id={`${invoiceField.itemDescription}~${i}`}
          name="itemDescription"
          type="text"
          spellCheck="false"
          // value={invoiceField.itemDescription}
          // onChange={(event) => handleChange(i, event)}
        />
      </label>
      <label
        className="block text-gray-700 text-sm font-bold mb-2 w-full mr-5"
        htmlFor={`${invoiceField.qty}~${i}`}
      >
        Quantity
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id={`${invoiceField.qty}~${i}`}
          name="qty"
          type="number"
          spellCheck="false"
          // value={invoiceField.qty}
          // onChange={(event) => handleChange(i, event)}
        />
      </label>
      <label
        className="block text-gray-700 text-sm font-bold mb-2 w-full  mr-5"
        htmlFor={`${invoiceField.price}~${i}`}
      >
        Unit Price
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id={`${invoiceField.price}~${i}`}
          name="price"
          type="tel"
          spellCheck="false"
          // value={invoiceField.price}
          // onChange={(event) => handleChange(i, event)}
        />
      </label>
      <button
        className="bg-red-500 hover:bg-red-700 h-8 px-5 py-3 flex items-center justify-center text-white font-bold rounded focus:outline-none focus:shadow-outline"
        type="button"
        // onClick={() => handleRemoveInvoice(i)}
      >
        Remove
      </button>
    </div>
  ));
}
<button
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  type="button"
  // onClick={addInvoiceItem}
>
  Add Item
</button>;
const [invoiceFields, setInvoiceFields] = useState([
  {
    itemDescription: "",
    qty: "",
    price: "",
  },
]);
