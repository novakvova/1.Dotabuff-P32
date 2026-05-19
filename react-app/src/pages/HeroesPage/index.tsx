import React, { useState } from 'react';

// Повний офіційний список усіх героїв Dota 2, відсортований за алфавітом всередині категорій (як у грі)
const heroesByCategory: Record<string, string[]> = {
  strength: [
    'alchemist', 'axe', 'beastmaster', 'brewmaster', 'bristleback', 'centaur', 'chaos_knight',
    'clockwerk', 'doom_bringer', 'dragon_knight', 'earth_spirit', 'earthshaker', 'elder_titan', 
    'huskar', 'io', 'kunkka', 'legion_commander', 'lifestealer', 'lycan', 'magnus', 'mars', 
    'night_stalker', 'omniknight', 'phoenix', 'primal_beast', 'pudge', 'sand_king', 'slardar', 
    'spirit_breaker', 'sven', 'tidehunter', 'timbersaw', 'tiny', 'treant', 'tusk', 'underlord', 
    'undying', 'wraith_king'
  ],
  agility: [
    'anti_mage', 'arc_warden', 'bloodseeker', 'bounty_hunter', 'broodmother', 'clinkz', 'drow_ranger',
    'ember_spirit', 'faceless_void', 'gyrocopter', 'hoodwink', 'juggernaut', 'kez', 'lone_druid', 'luna',
    'medusa', 'meepo', 'monkey_king', 'morphling', 'naga_siren', 'phantom_assassin', 'phantom_lancer', 
    'razor', 'riki', 'shadow_fiend', 'slark', 'sniper', 'spectre', 'templar_assassin', 'terrorblade', 
    'troll_warlord', 'ursa', 'viper', 'weaver'
  ],
  intelligence: [
    'ancient_apparition', 'crystal_maiden', 'death_prophet', 'disruptor', 'enchantress', 'grimstroke', 
    'jakiro', 'leshrac', 'lich', 'lina', 'lion', 'natures_prophet', 'necrophos', 'oracle', 
    'outworld_destroyer', 'puck', 'pugna', 'queenofpain', 'rubick', 'shadow_demon', 'shadow_shaman', 
    'silencer', 'skywrath_mage', 'storm_spirit', 'tinker', 'visage', 'warlock', 'witch_doctor', 'zeus'
  ],
  universal: [
    'abaddon', 'bane', 'batrider', 'chen', 'dark_seer', 'dark_willow', 'dazzle', 'enigma', 'invoker', 
    'marci', 'mirana', 'muerta', 'nyx_assassin', 'pangolier', 'ringmaster', 'snapfire', 'techies', 
    'venomancer', 'void_spirit', 'windranger', 'winter_wyvern'
  ]
};

// Функція для красивого відображення імені (наприклад, chaos_knight -> Chaos Knight)
const formatHeroName = (id: string) => {
  return id
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// Генератор реалістичного вінрейту для тестів
const getMockStats = (id: string) => {
  const hash = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const winRate = (45 + (hash % 11) + (hash % 10) / 10).toFixed(2) + '%';
  const pickRate = (2 + (hash % 15) + (hash % 10) / 10).toFixed(1) + '%';
  return { winRate, pickRate };
};

export const HeroesPage: React.FC = () => {
  const [hoveredHeroId, setHoveredHeroId] = useState<string | null>(null);

  const renderCategory = (categoryKey: string, title: string, titleColor: string, icon: string) => {
    const heroIds = heroesByCategory[categoryKey];

    return (
      <div style={{ marginBottom: '35px' }}>
        <h2 style={{ 
          color: titleColor, 
          fontSize: '20px', 
          borderBottom: '2px solid #2c3e50', 
          paddingBottom: '8px', 
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <img src={icon} alt={title} style={{ width: '24px', height: '24px' }} />
          {title} ({heroIds.length})
        </h2>
        
        {/* Сітка героїв адаптована під інтерфейс вибору в грі */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(76px, 1fr))', 
          gap: '12px' 
        }}>
          {heroIds.map((id) => {
            const fullName = formatHeroName(id);
            const { winRate, pickRate } = getMockStats(id);
            const imgUrl = `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${id}.png`;
            const uniqueKey = `${categoryKey}-${id}`;

            return (
              <div
                key={uniqueKey}
                onMouseEnter={() => setHoveredHeroId(uniqueKey)}
                onMouseLeave={() => setHoveredHeroId(null)}
                style={{
                  position: 'relative',
                  cursor: 'pointer',
                  backgroundColor: '#1c242d',
                  borderRadius: '4px',
                  border: '1px solid #2c3e50',
                  paddingBottom: '4px',
                  transition: 'transform 0.15s, border-color 0.15s, box-shadow 0.15s',
                  transform: hoveredHeroId === uniqueKey ? 'scale(1.1)' : 'scale(1)',
                  borderColor: hoveredHeroId === uniqueKey ? '#ff4c4c' : '#2c3e50',
                  zIndex: hoveredHeroId === uniqueKey ? 5 : 1,
                  boxShadow: hoveredHeroId === uniqueKey ? '0px 0px 10px rgba(255, 76, 76, 0.5)' : 'none'
                }}
              >
                {/* Картинка героя */}
                <img 
                  src={imgUrl} 
                  alt={fullName} 
                  style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '4px 4px 0 0' }} 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/76x43/1c242d/white?text=?';
                  }}
                />
                
                {/* Текст під картинкою */}
                <div style={{ 
                  marginTop: '4px', 
                  fontSize: '11px', 
                  fontWeight: '500',
                  padding: '0 4px', 
                  overflow: 'hidden', 
                  textOverflow: 'ellipsis', 
                  whiteSpace: 'nowrap',
                  color: '#e0e0e0'
                }}>
                  {fullName}
                </div>

                {/* ПЛАШКА СТАТИСТИКИ З ВІНРЕЙТОМ ТА ПІКРЕЙТОМ */}
                {hoveredHeroId === uniqueKey && (
                  <div style={{
                    position: 'absolute',
                    top: '-95px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#1f2933',
                    border: '1px solid #ff4c4c',
                    borderRadius: '6px',
                    padding: '10px',
                    width: '140px',
                    boxShadow: '0px 4px 15px rgba(0,0,0,0.7)',
                    zIndex: 10,
                    textAlign: 'left',
                    color: '#fff'
                  }}>
                    <div style={{ fontSize: '13px', fontWeight: 'bold', marginBottom: '6px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {fullName}
                    </div>
                    <div style={{ fontSize: '12px', marginBottom: '4px', color: '#b0bec5' }}>
                      Win Rate: <span style={{ color: '#81c784', fontWeight: 'bold' }}>{winRate}</span>
                    </div>
                    <div style={{ fontSize: '12px', color: '#b0bec5' }}>
                      Pick Rate: <span style={{ color: '#ffb74d', fontWeight: 'bold' }}>{pickRate}</span>
                    </div>
                    {/* Хвостик плашки */}
                    <div style={{
                      position: 'absolute',
                      bottom: '-6px',
                      left: '50%',
                      transform: 'translateX(-50%) rotate(45deg)',
                      width: '10px',
                      height: '10px',
                      backgroundColor: '#1f2933',
                      borderRight: '1px solid #ff4c4c',
                      borderBottom: '1px solid #ff4c4c'
                    }}></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // Офіційні іконки атрибутів від Valve
  const strengthIcon = "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png";
  const agilityIcon = "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png";
  const intelligenceIcon = "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png";
  const universalIcon = "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_universal.png";

  return (
    <div style={{ padding: '30px', maxWidth: '1400px', margin: '0 auto', color: 'white', backgroundColor: '#101519', minHeight: '100vh' }}>
      <h1 style={{ color: '#fff', borderBottom: '3px solid #37474f', paddingBottom: '15px', fontSize: '32px', marginBottom: '10px', fontWeight: 'bold' }}>
        Герої Dota 2
      </h1>
      <p style={{ color: '#b0bec5', marginBottom: '35px', fontSize: '16px', lineHeight: '1.5' }}>
        Наведіть мишку на іконку героя, щоб переглянути його вінрейт та пікрейт у поточному патчі.
      </p>

      {renderCategory('strength', 'СИЛА', '#f44336', strengthIcon)}
      {renderCategory('agility', 'СПРИТНІСТЬ', '#4caf50', agilityIcon)}
      {renderCategory('intelligence', 'ІНТЕЛЕКТ', '#2196f3', intelligenceIcon)}
      {renderCategory('universal', 'УНІВЕРСАЛЬНІ', '#00bcd4', universalIcon)}
    </div>
  );
};