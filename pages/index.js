import useSWR from "swr";



const fetcher = (url)=> fetch(url).then((res)=> res.json())

export default function HomePage() {
  const {data, error, isLoading} = useSWR('/api/transactions',fetcher)
  if (isLoading) return <h1>Loading...</h1>;
  if(!data) return <h1>somthing went wrong</h1>
  console.log(data)
  return (
    <div>
      <h1>Hello from Next.js</h1>
    </div>
  );
}
