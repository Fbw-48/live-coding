import React from "react";

const Country = ({ results, getCountry }) => {
  const lands = results.map((obj, i) => {
    console.log(obj);
    let { name, flag, capital, population, borders, languages } = obj;
    // option 1 flag = flag || "./img/untitled.jpg";
    return (
      <div key={i}>
        <h2>{name}</h2>
        <h5>Capital: {capital}</h5>
        <h5>Population: {population}</h5>
        <h5>
          {borders.map((border, i) => (
            <i key={i} onClick={() => getCountry("name", border)}>
              &nbsp;&nbsp; {border}
            </i>
          ))}
        </h5>
        <h5>
          language:
          {languages.map((lang) => (
            <h6 onClick={() => getCountry("lang", lang.iso639_1)}>
              {lang.name}
            </h6>
          ))}
        </h5>
        {
          // option 2
        }
        <img
          src={flag ? flag : "./img/untitled.jpg"}
          alt={name}
          className="flag"
        />
      </div>
    );
  });

  return <React.Fragment>{lands}</React.Fragment>;
};
export default Country;
