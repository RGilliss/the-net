import useAxios from 'axios-hooks'

export default function Regulations() {
  const { data, loading, error } = useAxios(
    'https://angler-reg-api.herokuapp.com/regulations'
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
  console.log(data)
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}