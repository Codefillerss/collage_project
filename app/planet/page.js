"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
const planet = () => {
  const [data, setData] = useState();
  const url = "https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/";
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b101944eccmsh4c3dfc70cfebf72p15830ejsn600db0ad5cce",
        "X-RapidAPI-Host": "planets-info-by-newbapi.p.rapidapi.com",
      },
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(res, " planet Data");
        console.log(res[0].imgSrc.img, " Image Source");
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <section className="planets_list">
      <div className="container">
        <div className="row-plantes">
          {data?.map((data, id) => {
            return (
              <div className="box-planets" key={id}>
                <div className="inner-box-planet">
                  <img
                    className="planet_box"
                    src={data.imgSrc.img}
                    alt="Planet Image"
                  />
                  <h3>{data.name}</h3>
                  <p className="planet_name">{data.description}</p>
                  <Link href={data.wikiLink} target="_blank">
                    Read more
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default planet;
