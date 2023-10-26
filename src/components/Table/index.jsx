import data from '../../../data.json';
import { TableRow } from '../TableRow';
export const Table = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          {data.titles.map((el) => (
            <th key={el}>{el}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.people.map((el) => {
          const info = {
            ...el,
            city: data.cities.find((city) => city.city_id === el.city_id),
            study: data.studies.find((study) => study.study_id === el.study_id),
            gender: data.gender.find(
              (gender) => gender.gender_id === el.gender_id
            ),
            bloodType: data.bloodType.find(
              (bloodType) => bloodType.bloodType_id === el.bloodtype_id
            ),
          };
          const country = data.countries.find(
            (country) => country.country_id === info.city.country_id
          );

          return <TableRow key={info.person_id} info={{ ...info, country }} />;
        })}
      </tbody>
    </table>
  );
};
