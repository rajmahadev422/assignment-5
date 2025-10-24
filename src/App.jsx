import Card from "./components/Card";
import Loader from "./components/Loader";
import Header from "./components/Header";
import useFetch from "./useFetch";

function App() {
  const url = 'https://api.escuelajs.co/api/v1/products';
  
  const { d, l, e } = useFetch(url);

  if (l) return <Loader />;

  if(e) return <p>{error}</p>
  
  return (
    <>
    <Header />
      <div className="min-h-screen bg-gray-50 flex flex-wrap gap-6 justify-center items-center p-6">
        {d.length == 0 ? <p className="text-4xl">No data</p> : d.map((item, i) => (
          <div
            key={i}
            className="flex-1 min-w-[300px]"
            style={{
              animationName: "fade",
              animationDuration: "1s",
              animationDelay: `${i * 100}ms`,
            }}
          >
            <Card
              image={item.category.image}
              title={item.title}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
