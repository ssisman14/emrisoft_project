import './App.css';
import TodoListPage from "./pages/TodoListPage";
import MainProvider from "./context/MainContext";

function App() {
    return (
        <MainProvider>
            <div className="w-full h-full">
                <TodoListPage/>
            </div>
        </MainProvider>
    );
}

export default App;
