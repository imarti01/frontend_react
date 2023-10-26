import data from '../../../data.json';

/* eslint-disable react/prop-types */
export const TableRow = ({ info }) => {
  const getNow = () => {
    const date = new Date().toLocaleString('es-ES', {
      timeZone: data.countryTimeZones[info.country.countryName],
    });
    return date;
  };

  return (
    <tr>
      <td>{info.name}</td>
      <td>{info.surname1}</td>
      <td>{info.age}</td>
      <td>{info.height}</td>
      <td>{info.weight}</td>
      <td>{info.city.cityName}</td>
      <td>{info.country.countryName}</td>
      <td>{info.study?.level || '-'}</td>
      <td>{info.gender.type}</td>
      <td>{info.bloodType.bloodName}</td>
      <td>{getNow()}</td>
    </tr>
  );
};
