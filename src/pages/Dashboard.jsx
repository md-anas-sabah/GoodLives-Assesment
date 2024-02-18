import Chat from "../components/Chat";
import Navbar from "../components/Navbar";
import ProgressChart from "../components/ProgressChart";
import Vaccination from "../components/Vaccination";
import Graph from "../components/Graph";
function Dashboard() {
  return (
    <div className="h-full flex flex-col gap-4">
      <Navbar />
      <div className="flex">
        <div className="flex flex-col px-4">
          <ProgressChart />
          <Graph />
        </div>
        <div className="flex flex-col gap-3 w-full mr-10">
          <Vaccination
            title={"Vaccination schedule"}
            filtersNames={"By type"}
          />
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
