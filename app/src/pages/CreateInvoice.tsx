import { useState } from 'react';
import { useHttpClient } from '../hooks/http-hook';
import { testServerURL } from '../utility/environment';
import { Button } from '../components/ui/Button';

export function CreateInvoice() {
  const { sendRequest } = useHttpClient();
  const [repairInputs, setRepairInputs] = useState({ '': 0 });
  const [formData, setFormData] = useState({
    repairs: [] as Array<[string, number]>,
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
    setFormData({
      ...formData,
      date: new Date(Date.now()),
      id: Math.random(),
      repairs: Object.entries(repairInputs),
    });
    try {
      const response = await sendRequest(
        `${testServerURL}/invoices/create-invoice`,
        'POST',
        JSON.stringify(formData),
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2 className="m-4 p-4">Add Vehicle</h2>
      <form className="m-4 p-4">
        <input
          className="border-black border-2"
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
        <input
          className="border-black border-2"
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
        &nbsp;
        <input
          className="border-black border-2"
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
        <br></br>
        <br></br>
        <input
          className="border-black border-2"
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
        <br></br>
        <br></br>
        {Object.keys(repairInputs).map((key) => {
          return (
            <div key={key}>
              <input
                className="border-black border-2"
                type="text"
                placeholder="repair"
                required
                onChange={(e) =>
                  setRepairInputs({
                    ...repairInputs,
                    //@ts-expect-error typing is off
                    [e.target.value]: repairInputs.key,
                  })
                }
              />
              <input
                className="border-black border-2"
                type="text"
                placeholder="amount"
                required
                onChange={(e) =>
                  setRepairInputs({
                    ...repairInputs,
                    [key]: parseInt(e.target.value),
                  })
                }
              />
              <br></br>
              <br></br>
            </div>
          );
        })}
        <Button text="submit" onClick={handleSubmit} />
      </form>
    </>
  );
}
