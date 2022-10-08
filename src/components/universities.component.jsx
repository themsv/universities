import React, { useState, useEffect } from "react";

import { getUniversitiesByCountry } from "../utils/apiMethods";

const Universities = ({ searchText, isFetchData }) => {
  const [universities, setUniversities] = useState([]);
  const [univesity, setUniversity] = useState({});

  useEffect(() => {
    if (isFetchData) {
      const fetchdata = async () => {
        const data = await getUniversitiesByCountry(searchText);
        setUniversities(data);
        setUniversity(data[0]);
      };
      fetchdata();
    }
  }, [isFetchData]);

  if (!universities.length) return <h2>Search for data</h2>;

  return (
    <table>
      <thead>
        <tr>
          {Object.keys(univesity).map((head) => (
            <th>{head}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {universities.map((eachRow) => {
          return (
            <tr>
              {Object.values(eachRow).map((data) => (
                <td>{data}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Universities;
