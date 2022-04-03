import { useState, useEffect } from "react";
import { useFirestore } from "../../hooks/useFirestore";
const TransactionForm = ({ uid }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const { addDocument, response } = useFirestore("transactions");

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const doc = {
      uid,
      name,
      amount,
    };
    addDocument(doc);
  };

  // reset the form fields
  useEffect(() => {
    if (response.success) {
      setAmount("");
      setName("");
    }
  }, [response.success]);
  return (
    <>
      <h3>Add Transaction</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Transaction Name:</span>
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Amount (&#8377;):</span>
          <input
            type="number"
            required
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </label>
        <button>Add</button>
      </form>
    </>
  );
};

export default TransactionForm;
