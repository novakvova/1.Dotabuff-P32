import React from 'react';

export const HomePage: React.FC = () => {
  // Актуальні новини для нашого DOTABUFF
  const newsList = [
    {
      id: 1,
      title: "Патч 7.41: Глобальне оновлення балансу та видалення аспектів",
      date: "Сьогодні",
      description: "Розробники кардинально змінили підхід до героїв, додавши вроджені здібності та аспекти для кожного персонажа в поточному мета-оновленні 7.41.",
      image: "https://via.placeholder.com/300x150/1c242d/white?text=Dota2+Patch+7.41"
    },
    {
      id: 2,
      title: "Анонсовано новий турнір The International з призовим у $5,000,000",
      date: "Вчора",
      description: "Найкращі команди світу знову зберуться разом цієї осені. Кваліфікації стартують уже наступного тижня на актуальному клієнті.",
      image: "https://via.placeholder.com/300x150/1c242d/white?text=The+International"
    }
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', color: 'white' }}>
      <h1 style={{ color: '#fff', borderBottom: '2px solid #37474f', paddingBottom: '10px', fontSize: '24px' }}>
        Останні новини Dota 2
      </h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '20px' }}>
        {newsList.map((news) => (
          <div key={news.id} style={{ backgroundColor: '#1c242d', borderRadius: '8px', overflow: 'hidden', border: '1px solid #2c3e50', display: 'flex', flexDirection: 'column' }}>
            <img src={news.image} alt={news.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <div style={{ padding: '15px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <span style={{ color: '#90caf9', fontSize: '12px', marginBottom: '5px' }}>{news.date}</span>
              <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', color: '#fff' }}>{news.title}</h3>
              <p style={{ color: '#b0bec5', fontSize: '14px', margin: 0, lineHeight: '1.5' }}>{news.description}</p>
              <button style={{ marginTop: 'auto', alignSelf: 'flex-start', background: 'none', border: 'none', color: '#ff4c4c', padding: '10px 0', fontWeight: 'bold', cursor: 'pointer' }}>
                Читати далі →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};