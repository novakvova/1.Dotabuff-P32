import React, { useState, useEffect } from 'react';
import type{OpenDotaHero} from '../../entityes/heroes/model/Iheroes';
import {useGetHeroesQuery} from "../../entityes/heroes/api/heroesApi.ts";
export const HeroesPage: React.FC = () => {
  const [heroes, setHeroes] = useState<OpenDotaHero[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [hoveredHeroId, setHoveredHeroId] = useState<string | null>(null);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [activeHero, setActiveHero] = useState<OpenDotaHero | null>(null);

  const {data, isLoading, isError } = useGetHeroesQuery();
    console.log(data);
    console.log(isError);
    console.log(isLoading);

  useEffect(() => {
    fetch('https://api.opendota.com/api/heroStats')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Не вдалося завантажити дані з OpenDota API');
        }
        return response.json();
      })
      .then((data: OpenDotaHero[]) => {
        if (Array.isArray(data)) {
          const sortedHeroes = data.sort((a, b) => 
            (a.localized_name || '').localeCompare(b.localized_name || '')
          );
          setHeroes(sortedHeroes);

          const alchemist = sortedHeroes.find(h => h.localized_name.toLowerCase() === 'alchemist');
          if (alchemist) {
            setActiveHero(alchemist);
          } else if (sortedHeroes.length > 0) {
            setActiveHero(sortedHeroes[0]);
          }
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', color: '#fff', fontSize: '20px' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: '50px', height: '50px', border: '5px solid #2c3e50', borderTop: '5px solid #ff4c4c', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 20px' }}></div>
          Завантаження героїв з OpenDota...
          <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ color: '#f44336', textAlign: 'center', padding: '50px', fontSize: '18px' }}>
        Помилка: {error}. Перевірте підключення до інтернету.
      </div>
    );
  }

  const rolesSidebar = [
    { id: null, name: 'Усі герої' },
    { id: 'Carry', name: 'Керрі (Carry)' },
    { id: 'Mid', name: 'Мід (Mid Lane)' },
    { id: 'Durable', name: 'Хард (Durable)' },
    { id: 'Support', name: 'Сапорти (Support)' }
  ];

  const getAttrName = (attr: string) => {
    if (attr === 'str') return 'Сила';
    if (attr === 'agi') return 'Спритність';
    if (attr === 'int') return 'Інтелект';
    return 'Універсальний';
  };

  const renderCategory = (apiAttrKey: string, title: string, titleColor: string, iconUrl: string) => {
    let filtered = heroes.filter((hero) => hero.primary_attr === apiAttrKey);

    if (selectedRole) {
      if (selectedRole === 'Mid') {
        filtered = filtered.filter(hero => hero.roles.includes('Nuker') && !hero.roles.includes('Support'));
      } else {
        filtered = filtered.filter(hero => hero.roles.includes(selectedRole));
      }
    }

    if (filtered.length === 0) return null;

    return (
      <div style={{ marginBottom: '35px' }}>
        <h2 style={{ 
          color: titleColor, 
          fontSize: '18px', 
          borderBottom: '2px solid #2c3e50', 
          paddingBottom: '8px', 
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <img src={iconUrl} alt={title} style={{ width: '22px', height: '22px' }} />
          {title} ({filtered.length})
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(76px, 1fr))', 
          gap: '12px' 
        }}>
          {filtered.map((hero) => {
            const picks = hero.pro_pick || 0;
            const wins = hero.pro_win || 0;
            const winRate = picks > 0 ? ((wins / picks) * 100).toFixed(2) + '%' : '0.00%';
            
            const heroImageId = hero.name.replace('npc_dota_hero_', '');
            const fullImgUrl = `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${heroImageId}.png`;
            const uniqueKey = `${apiAttrKey}-${hero.id}`;
            const isHeroActive = activeHero?.id === hero.id;

            return (
              <div
                key={uniqueKey}
                onMouseEnter={() => setHoveredHeroId(uniqueKey)}
                onMouseLeave={() => setHoveredHeroId(null)}
                onClick={() => setActiveHero(hero)}
                style={{
                  position: 'relative',
                  cursor: 'pointer',
                  backgroundColor: '#1c242d',
                  borderRadius: '4px',
                  border: '1px solid',
                  borderColor: isHeroActive ? '#ff4c4c' : (hoveredHeroId === uniqueKey ? '#b0bec5' : '#2c3e50'),
                  paddingBottom: '4px',
                  transition: 'transform 0.15s, border-color 0.15s',
                  transform: hoveredHeroId === uniqueKey ? 'scale(1.08)' : 'scale(1)',
                  zIndex: hoveredHeroId === uniqueKey ? 5 : 1,
                  boxShadow: isHeroActive ? '0px 0px 8px rgba(255, 76, 76, 0.6)' : 'none'
                }}
              >
                <img 
                  src={fullImgUrl} 
                  alt={hero.localized_name} 
                  style={{ width: '100%', height: '43px', objectFit: 'cover', borderRadius: '4px 4px 0 0' }} 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/76x43/1c242d/white?text=?';
                  }}
                />
                
                <div style={{ 
                  marginTop: '4px', 
                  fontSize: '11px', 
                  fontWeight: '500',
                  padding: '0 4px', 
                  overflow: 'hidden', 
                  textOverflow: 'ellipsis', 
                  whiteSpace: 'nowrap',
                  color: isHeroActive ? '#ff4c4c' : '#e0e0e0'
                }}>
                  {hero.localized_name}
                </div>

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
                      {hero.localized_name}
                    </div>
                    <div style={{ fontSize: '12px', marginBottom: '4px', color: '#b0bec5' }}>
                      Pro Win Rate: <span style={{ color: '#81c784', fontWeight: 'bold' }}>{winRate}</span>
                    </div>
                    <div style={{ fontSize: '12px', color: '#b0bec5' }}>
                      Pro Picks: <span style={{ color: '#ffb74d', fontWeight: 'bold' }}>{picks}</span>
                    </div>
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

  const strengthIcon = "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png";
  const agilityIcon = "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png";
  const intelligenceIcon = "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png";
  const universalIcon = "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_universal.png";

  const activeHeroImgId = activeHero?.name.replace('npc_dota_hero_', '') || '';
  const activeHeroImgUrl = `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${activeHeroImgId}.png`;

  return (
    <div style={{ display: 'flex', maxWidth: '1600px', margin: '0 auto', color: 'white', backgroundColor: '#101519', minHeight: '100vh', padding: '20px' }}>
      
      {/*  ЛІВА ПАНЕЛЬ*/}
      <div style={{ 
        width: '200px', 
        minWidth: '200px', 
        backgroundColor: '#1c242d', 
        borderRadius: '8px', 
        padding: '15px', 
        marginRight: '20px', 
        border: '1px solid #2c3e50',
        height: 'fit-content',
        position: 'sticky',
        top: '20px'
      }}>
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '12px', color: '#ff4c4c', borderBottom: '1px solid #2c3e50', paddingBottom: '8px' }}>
          Ролі героїв
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {rolesSidebar.map((role) => {
            const isActive = selectedRole === role.id;
            return (
              <button
                key={role.name}
                onClick={() => setSelectedRole(role.id)}
                style={{
                  padding: '10px 12px',
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: isActive ? '#ff4c4c' : '#2c3e50',
                  backgroundColor: isActive ? 'rgba(255, 76, 76, 0.12)' : '#101519',
                  color: isActive ? '#ff4c4c' : '#b0bec5',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontSize: '12px',
                  transition: 'all 0.15s ease'
                }}
              >
                {role.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* СІТКА ГЕРОЇВ */}
      <div style={{ flexGrow: 1, marginRight: '25px' }}>
        <h1 style={{ color: '#fff', borderBottom: '3px solid #37474f', paddingBottom: '15px', fontSize: '28px', marginBottom: '10px', fontWeight: 'bold' }}>
          Герої Dota 2
        </h1>
       

        {renderCategory('str', 'СИЛА', '#f44336', strengthIcon)}
        {renderCategory('agi', 'СПРИТНІСТЬ', '#4caf50', agilityIcon)}
        {renderCategory('int', 'ІНТЕЛЕКТ', '#2196f3', intelligenceIcon)}
        {renderCategory('all', 'УНІВЕРСАЛЬНІ', '#00bcd4', universalIcon)}
      </div>

      {/* ПРАВА ПАНЕЛЬ */}
      {activeHero && (
        <div style={{ 
          width: '320px', 
          minWidth: '320px', 
          backgroundColor: '#1c242d', 
          borderRadius: '8px', 
          padding: '20px', 
          border: '1px solid #ff4c4c',
          height: 'fit-content',
          position: 'sticky',
          top: '20px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)'
        }}>
          <img 
            src={activeHeroImgUrl} 
            alt={activeHero.localized_name} 
            style={{ width: '100%', height: 'auto', borderRadius: '6px', border: '1px solid #37474f', marginBottom: '15px' }}
          />
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#fff', marginBottom: '5px' }}>
            {activeHero.localized_name}
          </h2>
          <div style={{ fontSize: '13px', color: '#ff4c4c', fontWeight: '500', marginBottom: '15px' }}>
            {getAttrName(activeHero.primary_attr)} • {activeHero.roles.slice(0, 3).join(', ')}
          </div>

          <div style={{ borderBottom: '1px solid #2c3e50', marginBottom: '15px' }}></div>

          <div style={{ marginBottom: '12px' }}>
            <div style={{ backgroundColor: '#2e7d32', color: '#fff', fontSize: '12px', fontWeight: 'bold', padding: '6px 12px', borderRadius: '4px', textAlign: 'center', boxShadow: 'inset 0 0 5px rgba(0,0,0,0.5)' }}>
              {200 + Math.floor(activeHero.base_str * 22)} HP
            </div>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <div style={{ backgroundColor: '#1565c0', color: '#fff', fontSize: '12px', fontWeight: 'bold', padding: '6px 12px', borderRadius: '4px', textAlign: 'center', boxShadow: 'inset 0 0 5px rgba(0,0,0,0.5)' }}>
              {75 + Math.floor(activeHero.base_int * 12)} MANA
            </div>
          </div>

          <h4 style={{ fontSize: '13px', color: '#b0bec5', textTransform: 'uppercase', marginBottom: '10px', letterSpacing: '0.5px' }}>Характеристики</h4>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', backgroundColor: '#101519', padding: '12px', borderRadius: '6px', fontSize: '13px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#b0bec5' }}>Атака:</span>
              <span style={{ fontWeight: 'bold', color: '#fff' }}>
                {(() => {
                  let bonusAttack = 0;
                  if (activeHero.primary_attr === 'str') bonusAttack = activeHero.base_str;
                  else if (activeHero.primary_attr === 'agi') bonusAttack = activeHero.base_agi;
                  else if (activeHero.primary_attr === 'int') bonusAttack = activeHero.base_int;
                  else if (activeHero.primary_attr === 'all') {
                    bonusAttack = (activeHero.base_str + activeHero.base_agi + activeHero.base_int) * 0.7;
                  }
                  return `${Math.floor(activeHero.base_attack_min + bonusAttack)} - ${Math.floor(activeHero.base_attack_max + bonusAttack)}`;
                })()}
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#b0bec5' }}>Броня:</span>
              <span style={{ fontWeight: 'bold', color: '#fff' }}>
                {(activeHero.base_armor + (activeHero.base_agi * 0.167)).toFixed(1)}
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#b0bec5' }}>Швидкість руху:</span>
              <span style={{ fontWeight: 'bold', color: '#fff' }}>{activeHero.move_speed}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#b0bec5' }}>Дальність атаки:</span>
              <span style={{ fontWeight: 'bold', color: '#fff' }}>{activeHero.attack_range}</span>
            </div>
          </div>

          <h4 style={{ fontSize: '13px', color: '#b0bec5', textTransform: 'uppercase', marginTop: '18px', marginBottom: '10px', letterSpacing: '0.5px' }}>Базові атрибути</h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', textAlign: 'center', fontSize: '12px' }}>
            <div style={{ backgroundColor: '#2c1a1a', padding: '8px', borderRadius: '4px', border: '1px solid #5a2a2a' }}>
              <div style={{ color: '#e57373', fontWeight: 'bold' }}>СИЛ</div>
              <div style={{ color: '#fff', fontWeight: 'bold', marginTop: '2px' }}>{activeHero.base_str}</div>
            </div>
            <div style={{ backgroundColor: '#1a2c1a', padding: '8px', borderRadius: '4px', border: '1px solid #2a5a2a' }}>
              <div style={{ color: '#81c784', fontWeight: 'bold' }}>СПР</div>
              <div style={{ color: '#fff', fontWeight: 'bold', marginTop: '2px' }}>{activeHero.base_agi}</div>
            </div>
            <div style={{ backgroundColor: '#1a232c', padding: '8px', borderRadius: '4px', border: '1px solid #2a405a' }}>
              <div style={{ color: '#64b5f6', fontWeight: 'bold' }}>ІНТ</div>
              <div style={{ color: '#fff', fontWeight: 'bold', marginTop: '2px' }}>{activeHero.base_int}</div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};