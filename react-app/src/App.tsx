import  { useState } from 'react';
import { HomePage } from './pages/HomePage';
import { HeroesPage } from './pages/HeroesPage'; // Підключаємо реальну сторінку героїв
import {Route, Routes} from "react-router-dom";
import Layout from "./widgets/Layout";
function App() {
  // Створюємо перемикач news або heroes
  const [activeTab, setActiveTab] = useState<'news' | 'heroes'>('news');

  return (
    // <div style={{ backgroundColor: '#151b22', minHeight: '100vh', margin: 0, fontFamily: 'sans-serif' }}>
      
    //   {/* НАША ВЕРХНЯ ПЛАШКА МЕНЮ DOTABUFF */}
    //   <header style={{ 
    //     backgroundColor: '#1c242d', 
    //     borderBottom: '1px solid #2c3e50', 
    //     padding: '15px 30px', 
    //     display: 'flex', 
    //     alignItems: 'center',
    //     justifyContent: 'space-between'
    //   }}>
    //     {/* Назва сайту */}
    //     <div style={{ color: '#ff4c4c', fontWeight: 'bold', fontSize: '22px', letterSpacing: '1.5px' }}>
    //       DOTABUFF
    //     </div>

    //     {/* Навігаційні кнопки */}
    //     <nav style={{ display: 'flex', gap: '20px' }}>
    //       <button 
    //         onClick={() => setActiveTab('news')}
    //         style={{ 
    //           color: activeTab === 'news' ? 'white' : '#b0bec5', 
    //           backgroundColor: activeTab === 'news' ? '#ff4c4c' : 'transparent',
    //           border: 'none',
    //           fontWeight: 'bold',
    //           fontSize: '16px',
    //           padding: '8px 16px',
    //           borderRadius: '4px',
    //           cursor: 'pointer',
    //           transition: '0.3s'
    //         }}
    //       >
    //         Новини
    //       </button>
          
    //       <button 
    //         onClick={() => setActiveTab('heroes')}
    //         style={{ 
    //           color: activeTab === 'heroes' ? 'white' : '#b0bec5', 
    //           backgroundColor: activeTab === 'heroes' ? '#ff4c4c' : 'transparent',
    //           border: 'none',
    //           fontWeight: 'bold',
    //           fontSize: '16px',
    //           padding: '8px 16px',
    //           borderRadius: '4px',
    //           cursor: 'pointer',
    //           transition: '0.3s'
    //         }}
    //       >
    //         Герої (Stats)
    //       </button>
    //     </nav>
    //   </header>

    //   {/* ЛОГІКА ПЕРЕМИКАННЯ КОНТЕНТУ */}
    //   <main style={{ padding: '20px' }}>
    //     {activeTab === 'news' ? <HomePage /> : <HeroesPage />}
    //   </main>

    // </div>
    <>
          <Routes>
              <Route path="/"  element={<Layout/>}>
                  <Route index element={<HomePage/>} />
                  <Route path={"heroes-page"} element={<HeroesPage/>} />
              </Route>
          </Routes>
      </>
  );
}

export default App;