"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const weather = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("Delhi");
  const [imgd, setImgd] = useState("fog");
  const handleSearch = () => {};
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=7f620e4b9997bb31d38cada2d1f5d014`;
      const response = await fetch(url);
      const resJson = await response.json();
      console.log(resJson);
      setData(resJson);
      setImgd(resJson.weather[0].main);
    };
    fetchApi();
  }, [search]);
  return (
    <div className="weather_app">
      <div className="box-weather-wrp">
        <div className="headersearch">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button type="button" onClick={handleSearch}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </button>
        </div>
        {data?.cod == 200 ? (
          <div className="weather_result">
            <img src={`${imgd}.png`} alt="Cloud image" />
            <h4>
              {data?.main?.temp}
              <sup>o</sup>C
            </h4>
            <h5>{search}</h5>
            <div className="d-flex justify-content-between">
              <div className="box-wind-wrp">
                <img src="/humidity.png" />
                <div className="data-wind-wrp">
                  <h4>{data?.main?.humidity} %</h4>
                  <p>Humidity</p>
                </div>
              </div>
              <div className="box-wind-wrp">
                <img src="/wind.png" />
                <div className="data-wind-wrp">
                  <h4>{data?.wind?.speed} km/h</h4>
                  <p>Wind Speed</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h3>No Data Found</h3>
          </div>
        )}
      </div>
    </div>
  );
};
export default weather;
