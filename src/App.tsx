import { Button } from "@/components/ui/button";

function App() {
  return (
    <>
      <div className="text-red-500 bg-amber-500 h-[300px] w-full flex flex-col justify-center items-center">
        <div className="flex w-[100px] flex-col justify-center items-center">
          Bestwater
          <Button>Click me</Button>
        </div>
      </div>
    </>
  );
}

export default App;
