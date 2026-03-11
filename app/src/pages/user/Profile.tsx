const DUMMYACCOUNTDATA = {
  firstName: 'Harry',
  lastName: 'Sanders',
  email: 'herr.harr@yahoo.com',
  vehicleIds: [1, 2, 3],
};

const DUMMYVEHICLEDATA = [
  {
    make: 'ford',
    model: 'fseries',
    year: '2014',
  },
  {
    make: 'dodge',
    model: 'ram',
    year: '2024',
  },
];
export const Profile = () => {
  return (
    <>
      <h1>Profile</h1>
      <div className="flex flex-col">
        <h3>First Name: {DUMMYACCOUNTDATA.firstName}</h3>
        <h3>Last Name: {DUMMYACCOUNTDATA.lastName}</h3>
        <h3>E-mail: {DUMMYACCOUNTDATA.email}</h3>
        <ul className="flex flex-wrap">
          {DUMMYVEHICLEDATA.map((vehicle) => (
            <div className="bg-slate-400 m-4 p-4">
              <h3>make: {vehicle.make}</h3>
              <h3>model: {vehicle.model}</h3>
              <h3>year: {vehicle.year}</h3>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};
