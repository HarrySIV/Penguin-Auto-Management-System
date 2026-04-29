import { useState, type ChangeEvent } from 'react';
import { useHttpClient } from '../hooks/http-hook';
import { testServerURL, serverURL } from '../utility/environment';
import { Button } from '../components/ui/Button';

export function CreateInvoice() {
  const { sendRequest } = useHttpClient();
  const [repairInputs, setRepairInputs] = useState([{ repair: '', amount: 0 }]);
  const [formData, setFormData] = useState({
    repairs: [] as { repair: string; amount: number }[],
    id: null as number | null,
    total: 0,
    date: null as Date | null,
    email: '',
    vehicle: {
      make: '',
      model: '',
      year: '',
    },
  });

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    let total = 0;
    for (const { amount } of repairInputs) {
      total += amount;
    }
    console.log(repairInputs);
    setFormData({
      ...formData,
      total: total,
      date: new Date(Date.now()),
      id: Math.random(),
      repairs: repairInputs,
    });
    try {
      const response = await sendRequest(
        `${serverURL}/invoices/create-invoice`,
        'POST',
        JSON.stringify(formData),
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement, HTMLInputElement>,
    key: string,
  ) => {
    const values = [...repairInputs];
    if (!isNaN(parseInt(event.target.value))) {
      //@ts-expect-error the object key has to be a string so idk about this one
      values[index][key] = parseInt(event.target.value);
    } else {
      //@ts-expect-error same as above
      values[index][key] = event.target.value;
    }

    setRepairInputs(values);
  };

  const handleAddRepair = () => {
    setRepairInputs([...repairInputs, { repair: '', amount: 0 }]);
  };

  const handleRemoveRepair = (index: number) => {
    const newInputs = repairInputs.filter((repair, mapIndex) => {
      if (index !== mapIndex) return repair;
    });
    setRepairInputs(newInputs);
  };

  return (
    <>
      <h2 className="m-4 p-4">Add Vehicle</h2>
      <form className="m-4 p-4">
        <input
          className="border-black border-2 m-2"
          type="text"
          placeholder="customer email"
          required
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
        />
        <br />
        <input
          className="border-black border-2 m-2"
          type="text"
          placeholder="Make"
          required
          onChange={(e) =>
            setFormData({
              ...formData,
              vehicle: { ...formData.vehicle, make: e.target.value },
            })
          }
        />
        <br />
        <input
          className="border-black border-2 m-2"
          type="text"
          placeholder="Model"
          required
          onChange={(e) =>
            setFormData({
              ...formData,
              vehicle: { ...formData.vehicle, model: e.target.value },
            })
          }
        />
        <br />
        <input
          className="border-black border-2 m-2"
          type="text"
          placeholder="Year"
          required
          onChange={(e) =>
            setFormData({
              ...formData,
              vehicle: { ...formData.vehicle, year: e.target.value },
            })
          }
        />
        <br />
        <div className="p-8 m-8">
          {repairInputs.map((repair, index) => {
            return (
              <div key={index}>
                <input
                  className="border-black border-2 m-2"
                  type="text"
                  placeholder="repair"
                  required
                  onChange={(event) => handleChange(index, event, 'repair')}
                />
                <input
                  className="border-black border-2 m-2"
                  type="text"
                  placeholder="amount"
                  required
                  onChange={(event) => handleChange(index, event, 'amount')}
                />
                <Button
                  text="delete"
                  onClick={() => handleRemoveRepair(index)}
                />
                <br></br>
              </div>
            );
          })}
        </div>
        <Button text="Add repair" onClick={handleAddRepair} />
        <Button text="submit" onClick={handleSubmit} />
      </form>
    </>
  );
}
