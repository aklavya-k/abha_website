import React from 'react';

interface MenuItem {
  name: string;
  desc?: string;
  type?: 'veg' | 'non-veg' | 'sweet' | 'kids' | 'snack';
}

interface MealSection {
  id: string;
  day: 'Saturday' | 'Sunday';
  icon: string;
  title: string;
  subtitle: string;
  badge: string;
  items: MenuItem[];
}

const saturdayMeals: MealSection[] = [
  {
    id: 'sat-lunch',
    day: 'Saturday',
    icon: '🌸',
    title: 'Saturday Lunch',
    subtitle: 'Traditional Puja Bhog & Vegetarian Feast',
    badge: 'Saturday Oct 17 • Afternoon',
    items: [
      { name: 'Khichuri', desc: 'Comforting, ghee-kissed Bengali khichuri', type: 'veg' },
      { name: 'Aloo Fulkopi', desc: 'Tender potatoes and cauliflower in a fragrant Bengali curry', type: 'veg' },
      { name: 'Echorer Torkari', desc: 'Hearty green jackfruit in aromatic spices', type: 'veg' },
      { name: 'Beguni', desc: 'Crisp, golden-fried eggplant fritters', type: 'veg' },
      { name: 'Papad', desc: 'Crunchy traditional papadum', type: 'veg' },
      { name: 'Chutney', desc: 'Sweet and tangy Bengali-style relish', type: 'veg' },
      { name: 'Payesh', desc: 'Creamy, cardamom-scented rice pudding', type: 'sweet' },
      { name: 'Sandesh', desc: 'Delicate, melt-in-the-mouth Bengali sweets', type: 'sweet' }
    ]
  },
  {
    id: 'sat-kids-lunch',
    day: 'Saturday',
    icon: '🍔',
    title: "Kids’ Lunch",
    subtitle: 'Special Favorites for Children',
    badge: 'Saturday Oct 17 • Kids Menu',
    items: [
      { name: 'Chicken Burger', desc: 'Juicy, savory chicken burger', type: 'kids' },
      { name: 'French Fries', desc: 'Golden, crispy seasoned fries', type: 'kids' },
      { name: 'Brownies', desc: 'Rich, chocolatey sweet treat', type: 'kids' }
    ]
  },
  {
    id: 'sat-snacks',
    day: 'Saturday',
    icon: '☕',
    title: 'Evening Snacks',
    subtitle: 'Chai & Adda Delights',
    badge: 'Saturday Oct 17 • Evening',
    items: [
      { name: 'Milk Tea', desc: 'Warm, freshly brewed spiced Bengali milk tea', type: 'snack' },
      { name: 'Pakora', desc: 'Crunchy, golden vegetable fritters', type: 'veg' },
      { name: 'Bhel Puri', desc: 'Zesty, crunchy, tangy street-style snack', type: 'veg' }
    ]
  },
  {
    id: 'sat-kids-snacks',
    day: 'Saturday',
    icon: '🍪',
    title: "Kids’ Boxed Snacks",
    subtitle: 'Fun Grab-and-Go Snack Pack',
    badge: 'Saturday Oct 17 • Kids Box',
    items: [
      { name: 'Juice', desc: 'Refreshing fruit juice drink', type: 'kids' },
      { name: 'Chips', desc: 'Crispy crunchy snack chips', type: 'kids' },
      { name: 'Cookies', desc: 'Sweet baked cookies', type: 'kids' }
    ]
  },
  {
    id: 'sat-dinner',
    day: 'Saturday',
    icon: '🪔',
    title: 'Saturday Dinner',
    subtitle: 'Grand Festive Dinner Feast',
    badge: 'Saturday Oct 17 • Night',
    items: [
      { name: 'Luchi', desc: 'Pillowy, golden-fried Bengali bread', type: 'veg' },
      { name: 'Peas Pulao', desc: 'Fragrant basmati rice with sweet green peas', type: 'veg' },
      { name: 'Cholar Dal', desc: 'Rich, gently spiced Bengal gram dal with coconut', type: 'veg' },
      { name: 'Malai Kofta', desc: 'Soft koftas in a luscious, creamy gravy', type: 'veg' },
      { name: 'Katla Kalia', desc: 'Tender Katla fish in a robust, aromatic curry', type: 'non-veg' },
      { name: 'Chutney', desc: 'Sweet and tangy Bengali-style relish', type: 'veg' },
      { name: 'Rasmalai', desc: 'Delicate, melt-in-the-mouth sweets in saffron milk', type: 'sweet' }
    ]
  }
];

const sundayMeals: MealSection[] = [
  {
    id: 'sun-lunch',
    day: 'Sunday',
    icon: '🌸',
    title: 'Sunday Lunch',
    subtitle: 'Grand Bijaya & Mahaprasad Feast',
    badge: 'Sunday Oct 18 • Afternoon',
    items: [
      { name: 'Basanti Pulao', desc: 'Lightly sweetened aromatic rice with cashews and raisins', type: 'veg' },
      { name: 'Bhaja Moong Dal', desc: 'Nutty, golden roasted moong dal', type: 'veg' },
      { name: 'Niramish Sobji', desc: 'Colorful, homestyle seasonal vegetables', type: 'veg' },
      { name: 'Patha-er Mangsho', desc: 'Slow-cooked, spice-infused Bengali-style goat curry', type: 'non-veg' },
      { name: 'Papad', desc: 'Crispy traditional papadum', type: 'veg' },
      { name: 'Chutney', desc: 'A sweet-tart finish to the savory feast', type: 'veg' },
      { name: 'Home-made Mishti Doi', desc: 'Silky, caramel-kissed sweet yogurt', type: 'sweet' },
      { name: 'Malai Chamcham', desc: 'Soft, creamy Bengali milk sweets', type: 'sweet' }
    ]
  },
  {
    id: 'sun-kids-lunch',
    day: 'Sunday',
    icon: '🍦',
    title: "Sunday Kids’ Lunch",
    subtitle: 'Delicious Favorites & Sweet Treats',
    badge: 'Sunday Oct 18 • Kids Menu',
    items: [
      { name: 'Lo Mein', desc: 'Classic stir-fried savory noodles', type: 'kids' },
      { name: 'String Bean Chicken', desc: 'Tender chicken tossed with fresh crisp string beans', type: 'kids' },
      { name: 'Orange Chicken', desc: 'Crispy sweet and tangy orange chicken bites', type: 'kids' },
      { name: 'Ice Cream', desc: 'Cool, creamy scoops of happiness', type: 'sweet' }
    ]
  }
];

interface PujaMenuProps {
  theme?: 'dark' | 'light';
}

const PujaMenu: React.FC<PujaMenuProps> = ({ theme = 'dark' }) => {
  const isDark = theme === 'dark';

  const renderMealCard = (meal: MealSection) => (
    <div
      key={meal.id}
      style={{
        background: isDark ? 'rgba(20, 6, 2, 0.78)' : '#FFFDF8',
        borderRadius: '16px',
        border: '1px solid rgba(212, 175, 55, 0.3)',
        padding: '1.35rem',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: isDark
          ? '0 6px 18px rgba(0, 0, 0, 0.3)'
          : '0 4px 14px rgba(180, 83, 9, 0.08)',
        transition: 'transform 0.2s ease'
      }}
    >
      {/* Card Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '.65rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', paddingBottom: '.65rem' }}>
        <div>
          <h4
            style={{
              margin: 0,
              fontSize: '1.15rem',
              color: '#FFD700',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '.4rem'
            }}
          >
            <span>{meal.icon}</span>
            <span>{meal.title}</span>
          </h4>
          <div style={{ fontSize: '.8rem', color: isDark ? '#E2D9C8' : '#75624F', marginTop: '2px' }}>
            {meal.subtitle}
          </div>
        </div>
        <span
          style={{
            fontSize: '.7rem',
            fontWeight: 700,
            padding: '3px 8px',
            borderRadius: '12px',
            background: 'rgba(122, 27, 27, 0.65)',
            color: '#FFD700',
            border: '1px solid rgba(255, 215, 0, 0.3)',
            whiteSpace: 'nowrap'
          }}
        >
          {meal.badge}
        </span>
      </div>

      {/* Meal Items List */}
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '.55rem' }}>
        {meal.items.map((item, idx) => (
          <li
            key={idx}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '.5rem',
              fontSize: '.9rem',
              lineHeight: 1.45
            }}
          >
            <span style={{ color: '#FFD700', fontSize: '.85rem', marginTop: '2px' }}>❀</span>
            <div style={{ flex: '1 1 auto', minWidth: 0 }}>
              <span style={{ fontWeight: 700, color: isDark ? '#FFFDF8' : '#2D1B14' }}>
                {item.name}
              </span>
              {item.desc && (
                <span style={{ color: isDark ? '#E5D6BF' : '#5A4738', marginLeft: '.35rem', fontSize: '.85rem' }}>
                  — {item.desc}
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div
      className="puja-menu-wrapper"
      style={{
        marginTop: '2rem',
        borderRadius: '20px',
        padding: '1.75rem',
        background: isDark
          ? 'linear-gradient(135deg, rgba(38, 14, 7, 0.95) 0%, rgba(55, 18, 10, 0.9) 100%)'
          : '#FAF0D7',
        border: '1.5px solid rgba(255, 215, 0, 0.35)',
        boxShadow: '0 12px 35px rgba(0, 0, 0, 0.25)',
        color: isDark ? '#FFFDF8' : '#2D1B14'
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', background: 'rgba(255, 215, 0, 0.15)', border: '1px solid rgba(255, 215, 0, 0.4)', padding: '4px 16px', borderRadius: '30px', fontSize: '.8rem', fontWeight: 800, color: '#FFD700', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '.6rem' }}>
          🍽️ Complete Puja Bhog & Food Menu
        </div>
        <h3
          style={{
            margin: '0 0 .5rem 0',
            fontSize: 'clamp(1.5rem, 3.2vw, 2.1rem)',
            color: '#FFD700',
            fontFamily: 'var(--font-heading, serif)',
            fontWeight: 700,
            textShadow: isDark ? '0 2px 8px rgba(0,0,0,0.5)' : 'none'
          }}
        >
          Durga Puja 2026 Grand Feast Menu
        </h3>
        <p
          style={{
            margin: '0 auto',
            maxWidth: '680px',
            fontSize: '.95rem',
            lineHeight: 1.55,
            color: isDark ? '#FEF3C7' : '#5A4738',
            opacity: 0.95
          }}
        >
          All traditional Bengali puja meals, comforting bhog, authentic delicacies, and special favorites for children throughout both festival days.
        </p>
      </div>

      {/* Saturday Section */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '1.25rem', borderBottom: '2px solid rgba(255, 215, 0, 0.35)', paddingBottom: '.65rem' }}>
          <span style={{ fontSize: '1.6rem' }}>🌸</span>
          <div>
            <h4 style={{ margin: 0, fontSize: '1.35rem', color: '#FFD700', fontWeight: 800 }}>
              Saturday, October 17, 2026
            </h4>
            <span style={{ fontSize: '.85rem', color: isDark ? '#FEF3C7' : '#6B5744' }}>
              Bodhon, Anjali, Bhog Lunch, Evening Adda & Cultural Dinner
            </span>
          </div>
        </div>
        <div
          style={{
            display: 'grid',
            gap: '1.25rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))'
          }}
        >
          {saturdayMeals.map(renderMealCard)}
        </div>
      </div>

      {/* Sunday Section */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '1.25rem', borderBottom: '2px solid rgba(255, 215, 0, 0.35)', paddingBottom: '.65rem' }}>
          <span style={{ fontSize: '1.6rem' }}>🌸</span>
          <div>
            <h4 style={{ margin: 0, fontSize: '1.35rem', color: '#FFD700', fontWeight: 800 }}>
              Sunday, October 18, 2026
            </h4>
            <span style={{ fontSize: '.85rem', color: isDark ? '#FEF3C7' : '#6B5744' }}>
              Sandhi Pujo, Dashami, Sindoor Khela & Grand Bijaya Lunch Feast
            </span>
          </div>
        </div>
        <div
          style={{
            display: 'grid',
            gap: '1.25rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))'
          }}
        >
          {sundayMeals.map(renderMealCard)}
        </div>
      </div>

      {/* Dietary Note Banner */}
      <div
        style={{
          marginTop: '1.75rem',
          padding: '1rem 1.25rem',
          borderRadius: '12px',
          background: isDark ? 'rgba(122, 27, 27, 0.45)' : 'rgba(212, 175, 55, 0.15)',
          border: '1.5px dashed #FFD700',
          display: 'flex',
          alignItems: 'center',
          gap: '.75rem',
          color: isDark ? '#FFFDF8' : '#2D1B14'
        }}
      >
        <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>🌿</span>
        <div style={{ fontSize: '.88rem', lineHeight: 1.5 }}>
          <strong style={{ color: '#FFD700' }}>Important Dietary Note: </strong>
          All our vegetarian items are cooked without onion and garlic (Noon-Peaj chhara) and prepared strictly separate from non-vegetarian items.
        </div>
      </div>
    </div>
  );
};

export default PujaMenu;
