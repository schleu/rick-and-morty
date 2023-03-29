import {useState, useEffect} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'



interface iCharacter  {
  "id": number,
  "name": string,
  "status": 'Alive' | 'Dead' | 'unknown',
  "species": string,
  "type": string,
  "gender": 'Female'| 'Male' | 'Genderless' | 'unknown',
  "origin": {
      "name": string,
      "url": string,
  },
  "location": {
      "name": string,
      "url": string,
  },
  "image": string;
  "episode": string[],
  "url": string,
  "created": string,
}

interface result {
  info:{
    "count": number,
    "pages": number,
    "next": string,
    "prev": string
},
  results:iCharacter[]
}

export default function Home() {
  const baseUrl = "https://rickandmortyapi.com/api/character"
  const [data, setData] = useState<iCharacter[]>([])
  const [isLoading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true)
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results)
        setLoading(false)
      })
  }, [])


  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>



  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          {data.map(e=>(
            <div key={e.id} className={styles.card}>
              <Image src={e.image} alt="" width={130} height={150}/>
              <div className={styles.cardDescription}>
                <h3>{e.name}</h3>
                <p>{e.gender}</p>
              </div>
            </div>
          ))}
        </div>

      </main>
    </>
  )
}
