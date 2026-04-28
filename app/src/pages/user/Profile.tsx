import { useContext, useState } from 'react';

import { Button } from '../../components/ui/Button';
import { CreateVehicle } from '../CreateVehicle';
import { AccountContext } from '../../context/account-context';

export const Profile = () => {
  const accountInfo = useContext(AccountContext);
  const [isAddingVehicle, setIsAddingVehicle] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const cancelVehicleHandler = () => {
    setIsAddingVehicle(false);
  };
  const cancelEditHandler = () => {
    setIsEditingProfile(false);
  };
  return (
    <div className="p-4">
      {isAddingVehicle ? (
        <CreateVehicle cancelHandler={cancelVehicleHandler} />
      ) : null}
      {isEditingProfile ? (
        <CreateVehicle cancelHandler={cancelEditHandler} />
      ) : null}
      <h1>Profile</h1>
      <div className="flex flex-col m-4 p-4">
        <h3>First Name: {accountInfo?.accountInfo?.firstName}</h3>
        <h3>Last Name: {accountInfo?.accountInfo?.lastName}</h3>
        <h3>E-mail: {accountInfo?.accountInfo?.email}</h3>
        {accountInfo?.accountInfo?.vehicles ? (
          <ul className="flex flex-wrap">
            {accountInfo?.accountInfo?.vehicles.map((vehicle) => (
              <div className="bg-slate-400 m-4 p-4">
                <h3>make: {vehicle.make}</h3>
                <h3>model: {vehicle.model}</h3>
                <h3>year: {vehicle.year}</h3>
              </div>
            ))}
          </ul>
        ) : null}
      </div>
      <div>
        <Button
          text="Edit Info"
          onClick={() => setIsEditingProfile(true)}
          className="bg-slate-400 rounded-2xl"
        />
        <Button
          text="Add Vehicle"
          onClick={() => setIsAddingVehicle(true)}
          className="bg-slate-400 rounded-2xl"
        />
      </div>
    </div>
  );
};
