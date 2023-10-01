import React, { useState } from "react";
export default function App() {
   const [searchInput, setSearchInput] = useState("");
   const [searchPopulation, setPopulation] = useState("");
   let countries = [
      { name: "china", population: "1439323776" },
      { name: "india", population: "1380004385" },
      { name: "usa", population: "331002651" },
      { name: "indonesia", population: "273523615" },
      { name: "pakistan", population: "220892340" },
      { name: "canada", population: "37742154" },
      { name: "new zealand", population: "4822233" },
      { name: "italy", population: "60461826" },
      { name: "south africa", population: "59308690" },
      { name: "rusia", population: "154934462" },
      { name: "egypt", population: "102334404" },
      { name: "iran", population: "83992949" },
      { name: "france", population: "65273511" },
      { name: "mexico", population: "128932753" },
      { name: "spain", population: "46754778" },
      { name: "senegal", population: "16743927" },
      { name: "brazil", population: "212559417" },
      { name: "denmark", population: "5792202" },
      { name: "sudan", population: "43849260" },
      { name: "iraq", population: "40222493" },
      { name: "peru", population: "32971854" },
      { name: "bangladesh", population: "164689383" },
      { name: "portugal", population: "10196709" },
   ];
   const handleChange = (e) => {
      e.preventDefault();
      setSearchInput(e.target.value);
   };

   const handleChange2 = (e) => {
    e.preventDefault();
    setPopulation(e.target.value);
 };

   function searchList() {
      
      // filter countries according to search values
      let filteredCountries = countries.filter((country) => {
        return country.name.match(searchInput.toLowerCase());
      });

      let filteredPopulation = countries.filter((country) => {
        return country.population.match(searchPopulation.toLowerCase());
      });
      
      if (searchInput != ""){
      // create table rows
      const filtered = filteredCountries?.map((country) => (
         <tr>
            <td> {country.name}</td>
            <td> {country.population} </td>
         </tr>
      ));
      return <div> {filtered} </div>;
      } else if (searchPopulation != "") {const filtered2 = filteredPopulation?.map((country) => (
        <tr>
           <td> {country.name}</td>
           <td> {country.population} </td>
        </tr>
     ));
     return <div> {filtered2} </div>;}
   }
   return (
      <div>
         <h2>
            {" "}
            <center>Pencarian Negara Dan Populasinya</center>
         </h2>
         <input
            id = "input 1"
            Type="search"
            placeholder="Cari Berdasarkan Nama"
            onChange={handleChange}
            value={searchInput}
         />
         <input
            id = "input2"
            Type="search"
            placeholder="Cari Berdasarkan Populasi"
            onChange={handleChange2}
            value={searchPopulation}
         />
         <table style={{ tableLayout: "fixed", width: "11rem" }}>
            <tr>
               <th> Negara </th>
               <th> Populasi </th>
            </tr>
            {searchList()}
         </table>
         
      </div>
   );
}