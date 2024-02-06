import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { FiSettings } from 'react-icons/fi';
import { useLayoutEffect } from 'react';

function App() {
  const activeMenu = true;

  useLayoutEffect(() => {
    const notise = document.querySelector('#root~div');
    if (notise) notise.remove();
  }, []);

  return (
    <div>
      <Router>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: 1000 }}>
            <TooltipComponent content="Settings">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{
                  background: 'blue',
                  borderRadius: '50%',
                }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              Sidebar
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">Sidebar w-0</div>
          )}

          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? 'md:ml-72' : 'flex-2'
            }`}
          ></div>
        </div>
      </Router>
    </div>
  );
}

export default App;
