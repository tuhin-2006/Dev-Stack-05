import { useEffect, useState } from "react";
import "./App.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Banner from "./Components/Banner";
import ExploreBar from "./Components/ExploreBar";
import Nav from "./Components/Nav";
import TechnologyList from "./Components/TechnologyList";
import YourStack from "./Components/YourStack";

import DevStackFooter from "./Components/DevStackFooter";
import type { CardInfo } from "./Types/CardInfoType";

function App() {
  const [technologies, setTechnologies] = useState<CardInfo[]>([]);
  const [stack, setStack] = useState<CardInfo[]>([]);
  const [loading, setLoading] = useState(true);

  // Get data from data.json
  const getTechnologyData = async (): Promise<CardInfo[]> => {
    const res = await fetch("/data.json");
    const data = await res.json();

    return data;
  };

  // Load technology data
  useEffect(() => {
    getTechnologyData().then((data) => {
      setTechnologies(data);
      setLoading(false);
    });
  }, []);

  // Add technology to stack
  const handleAdd = (technology: CardInfo): void => {
    const alreadyAdded = stack.some((item) => item.id === technology.id);

    if (alreadyAdded) {
      toast.warning(`${technology.name} already in your stack!`);
      return;
    }

    setStack([...stack, technology]);

    toast.success(`${technology.name} added in stack!`);
  };

  // Remove one technology
  const handleRemove = (id: CardInfo["id"]): void => {
    const technology = stack.find((item) => item.id === id);

    const remainingItems = stack.filter((item) => item.id !== id);

    setStack(remainingItems);

    if (technology) {
      toast.info(`${technology.name} removed from your stack!`);
    }
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    setStack([]);
    toast.error("All technologies removed from your stack!");
  };

  return (
    <>
      <Nav />
      <Banner />
      <ExploreBar />
      <ToastContainer position="top-right" autoClose={2000} />
      <main className="min-h-screen bg-gray-50 p-4 md:p-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
            {loading ? (
              <div>
                <p>Loading...</p>
              </div>
            ) : (
              <TechnologyList
                technologies={technologies}
                addOn={handleAdd}
                stack={stack}
              />
            )}

            {/* Your Stack Section */}
            <YourStack
              stack={stack}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        </div>
      </main>
      <DevStackFooter></DevStackFooter>
    </>
  );
}

export default App;
