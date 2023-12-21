import React, { useEffect, useState } from "react";
import HeroeDetails from "./HeroeDetails.tsx";
import BackBtn from "./BackBtn";

interface Types {
  selectedRole: string;
  setContentActive: (active: boolean) => void;
}

interface Types2 {
  name: string;
  heroid: number;
  key: string;
}

const Roles = ({ selectedRole, setContentActive }: Types) => {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedHeroe, setSelectedHeroe] = useState("");
  const [roleActive, setRoleActive] = useState(true);
  const [selectedHeroeName, setSelectedHeroeName] = useState("");
  const [selectedHeroeKey, setSelectedHeroekey] = useState("");

  useEffect(() => {
    const fetchHeroes = async () => {
      const url = `https://unofficial-mobile-legends.p.rapidapi.com/roles/${selectedRole}`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "c30b8e2ccamshab751f9f08221d8p1babb0jsna7471e5b9358",
          "X-RapidAPI-Host": "unofficial-mobile-legends.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setHeroes(result.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    if (selectedRole) {
      fetchHeroes();
    }
  }, [selectedRole]);

  const handleHeroeClick = (heroe: string, key: string, name: string) => {
    setSelectedHeroe(heroe);
    setRoleActive(false);
    setSelectedHeroeName(name);
    setSelectedHeroekey(key);
  };

  const handleBackClick = () => {
    setRoleActive(true);
  };

  const handleBackClickContent = () => {
    setContentActive(true);
  };

  return (
    <div className="space-y-7 text-center">
      {!loading && roleActive && <BackBtn onClick={handleBackClickContent} />}
      {loading ? (
        <p>Cargando lista...</p>
      ) : roleActive ? (
        <div className="grid grid-cols-5 sm:grid-cols-9 gap-3">
          {heroes.map(({ key, name, heroid }) => (
            <figure key={key}>
              <img
                src={key}
                alt={name}
                width="150"
                height="150"
                loading="lazy"
                onClick={() => handleHeroeClick(heroid, key, name)}
                className="border hover:border-4 hover:opacity-70 rounded-sm"
              />
              <figcaption className="font-semibold text-xs mt-2">
                {name}
              </figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <div>
          <BackBtn onClick={handleBackClick} />
          <HeroeDetails
            selectedHeroe={selectedHeroe}
            selectedHeroeName={selectedHeroeName}
            setSelectedHeroekey={selectedHeroeKey}
          />
        </div>
      )}
    </div>
  );
};

export default Roles;
