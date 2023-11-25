import React, { useEffect, useState } from "react";

interface Types {
  selectedHeroe: string;
  selectedHeroeName: string;
  setSelectedHeroekey: string;
}

interface HeroDetails {
  best?: {
    heroid: string;
    name: string;
    icon: string;
  };
  countered?: {
    heroid: string;
    name: string;
    icon: string;
  };
  counters?: {
    heroid: string;
    name: string;
    icon: string;
  };
}

const HeroeDetails = ({
  selectedHeroe,
  selectedHeroeName,
  setSelectedHeroekey,
}: Types) => {
  const [heroesDetails, setHeroesDetails] = useState<HeroDetails>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeroes = async () => {
      const url = `https://unofficial-mobile-legends.p.rapidapi.com/heroes/${selectedHeroe}`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "eaa875da99msh44bbee5b9b4a44cp1a3793jsnf95f8037d264",
          "X-RapidAPI-Host": "unofficial-mobile-legends.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.error(result);
        setHeroesDetails(result.data.counters);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    if (selectedHeroe) {
      fetchHeroes();
    }
  }, [selectedHeroe]);

  return (
    <div className="flex flex-col justify-center items-center mt-5 text-start space-y-8">
      <figure className="flex flex-col justify-center items-center font-semibold">
        <p>SELECCIONADO:</p>
        <img
          src={setSelectedHeroekey}
          alt={selectedHeroeName}
          width={90}
          height={90}
          loading="lazy"
          className="mt-2 mb-2 rounded-md border"
        />
        <figcaption>{selectedHeroeName}</figcaption>
      </figure>
      {loading ? (
        <p>Cargando lista...</p>
      ) : (
        <div className="grid grid-cols-3 justify-center items-center text-xs sm:text-sm font-semibold gap-3 sm:gap-20">
          {heroesDetails.best && (
            <figure
              key={`${heroesDetails.best.heroid}-best`}
              className="text-center"
            >
              <p>MEJOR ALIADO:</p>
              <img
                src={heroesDetails.best.icon}
                alt={heroesDetails.best.name}
                width={150}
                height={150}
                loading="lazy"
                className="mt-2 mb-2 rounded-md"
              />
              <figcaption>{heroesDetails.best.name}</figcaption>
            </figure>
          )}

          {heroesDetails.countered && (
            <figure
              key={`${heroesDetails.countered.heroid}-countered`}
              className="text-center"
            >
              <p>CONTRARRESTADO</p>
              <img
                src={heroesDetails.countered.icon}
                alt={heroesDetails.countered.name}
                width={150}
                height={150}
                loading="lazy"
                className="mt-2 mb-2 rounded-md"
              />
              <figcaption>{heroesDetails.countered.name}</figcaption>
            </figure>
          )}

          {heroesDetails.counters && (
            <figure
              key={`${heroesDetails.counters.heroid}-counters`}
              className="text-center"
            >
              <p>COUNTER</p>
              <img
                src={heroesDetails.counters.icon}
                alt={heroesDetails.counters.name}
                width={150}
                height={150}
                loading="lazy"
                className="mt-2 mb-2 rounded-md"
              />
              <figcaption>{heroesDetails.counters.name}</figcaption>
            </figure>
          )}
        </div>
      )}
      <section className="space-y-5">
        <article>
          <h3 className="opacity-75 font-semibold">MEJOR ALIADO:</h3>
          <h4>Aliado perfecto en batalla</h4>
          <p className="opacity-50">
            Dos héroes que trabajan juntos de maravilla, formando un equipo
            imparable al potenciar sus habilidades en conjunto.
          </p>
        </article>
        <article>
          <h3 className="opacity-75 font-semibold">CONTRARRESTADO:</h3>
          <h4>Héroe con desventajas frente a otro</h4>
          <p className="opacity-50">
            Héroe que tiene desventajas específicas contra otro en términos de
            habilidades o características, lo que puede llevar a dificultades en
            el enfrentamiento.
          </p>
        </article>
        <article>
          <h3 className="opacity-75 font-semibold">COUNTER:</h3>
          <h4>Héroe que domina a su rival</h4>
          <p className="opacity-50">
            Un héroe efectivo contra otro debido a habilidades especiales,
            estrategias únicas o ventajas en la pelea.
          </p>
        </article>
      </section>
    </div>
  );
};

export default HeroeDetails;
