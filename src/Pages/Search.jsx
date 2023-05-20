import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Search() {
  const title = 'Kanojyo to Himitsu to Koimoyou';
  const baseUrl = 'https://api.mangadex.org';
  const [mangaData, setMangaData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get(`${baseUrl}/manga`, {
          params: {
            title: title
          }
        });

        const mangaIds = resp.data.data.map(manga => manga.id);

        const mangaDetailsPromises = mangaIds.map(mangaId =>
          axios.get(`${baseUrl}/manga/${mangaId}`)
        );

        const mangaDetailsResponses = await Promise.all(mangaDetailsPromises);

        const coverIds = mangaDetailsResponses.map(response =>
          response.data.data.relationships.find(
            relationship => relationship.type === 'cover_art'
          ).id
        );

        const coverPromises = coverIds.map(coverId =>
          axios.get(`${baseUrl}/cover/${coverId}`)
        );

        const coverResponses = await Promise.all(coverPromises);

        const mangaData = coverResponses.map(response => {
          const mangaId = response.data.data.relationships.find(
            relationship => relationship.type === 'manga'
          ).id;
          const coverUrl = response.data.data.attributes.fileName;
          return {
            mangaId,
            coverUrl: `https://uploads.mangadex.org/covers/${mangaId}/${coverUrl}`
          };
        });

        setMangaData(mangaData);

      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>{title}</h1>
      <div className="flex flex-wrap">
        {mangaData.map(manga => (
          <img
            className='w-48 mx-2 my-2'
            key={manga.mangaId}
            src={manga.coverUrl}
            alt="Manga Cover"
          />
        ))}
      </div>
    </div>
  );  
}

export default Search;
