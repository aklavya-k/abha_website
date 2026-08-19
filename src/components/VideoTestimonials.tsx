import React, { useState } from 'react';

interface VideoTestimonial {
  id: string;            // unique key
  title: string;         // short heading
  person: string;        // name / role
  src: string;           // video source (mp4 path or YouTube ID) or unused when embedUrl is set
  poster?: string;       // optional poster image
  description?: string;  // short context
  youtube?: boolean;     // flag if src is a YouTube video id
  embedUrl?: string;     // if provided, use this URL in an iframe (e.g., Google Drive preview)
}

interface VideoTestimonialsProps {
  videos?: VideoTestimonial[];
}

// Default to Google Drive preview embeds (iframes) provided by the user.
const defaultVideos: VideoTestimonial[] = [
  {
    id: 'vt1',
    title: 'Community Impact',
    person: 'Thank you Tanmoy and Sushmita',
    src: '',
    embedUrl: 'https://drive.google.com/file/d/1HboWXMFu2PF7rhKnI4eFINp3PoB5aYzY/preview',
    description: 'How ABHA helped them connect with culture.'
  },
  {
    id: 'vt2',
    title: 'Family Experience',
    person: 'Thank you Susmit and Saswati',
    src: '',
    embedUrl: 'https://drive.google.com/file/d/1XHySD-zMa_GFO_GKpLlxFVbEuJ0DwEAg/preview',
    description: 'A family sharing their festival experience.'
  },
  {
    id: 'vt3',
    title: 'Youth Perspective',
    person: 'Thank you Dipankar and Barnali',
    src: '',
    embedUrl: 'https://drive.google.com/file/d/17CZgNIL7MG5ZjJjhDsYou2ywin0ZHF1V/preview',
    description: 'Youth involvement and cultural learning.'
  }
];

const VideoTestimonials: React.FC<VideoTestimonialsProps> = ({ videos = defaultVideos }) => {
  const [active, setActive] = useState<string | null>(null);

  if (!videos || videos.length === 0) {
    return null;
  }

  return (
    <section
      className="hbcu-investment-section"
      style={{
        paddingTop: '4rem',
        paddingBottom: '4.5rem',
        background: 'linear-gradient(135deg, #1f0b02 0%, #3d0a0a 45%, #611313 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* ABHA Cultural Glow Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at top right, rgba(255, 215, 0, 0.12), transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2
            style={{
              margin: '0 0 .75rem 0',
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              color: '#ffd700',
              fontFamily: 'var(--font-heading, serif)',
              fontWeight: 700,
              letterSpacing: '.02em',
              textShadow: '0 4px 12px rgba(0,0,0,0.4)'
            }}
          >
            Community Video Testimonials
          </h2>
          <p
            style={{
              margin: '0 auto',
              maxWidth: 720,
              color: '#fef3c7',
              fontSize: '1.05rem',
              lineHeight: 1.6,
              opacity: 0.95
            }}
          >
            Heartfelt experiences from our community members sharing how ABHA brings Bengali heritage, music, and togetherness to Harrisburg.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gap: '2rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'
          }}
        >
          {videos.map(v => {
            const isExpanded = active === v.id;
            return (
              <div
                key={v.id}
                style={{
                  background: 'rgba(38, 14, 7, 0.85)',
                  borderRadius: 20,
                  border: '1px solid rgba(255, 215, 0, 0.25)',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  boxShadow: '0 16px 40px -8px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.06)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  transition: 'transform 0.3s ease, boxShadow 0.3s ease'
                }}
              >
                {/* Person / Contributor Name */}
                <h3
                  style={{
                    margin: 0,
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#ffd700',
                    fontFamily: 'var(--font-heading, serif)',
                    letterSpacing: '.02em',
                    textShadow: '0 2px 6px rgba(0,0,0,0.5)'
                  }}
                >
                  {v.person}
                </h3>

                {/* Video Player Box - Taller height 440px to fit full portrait/square video without cropping faces */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '440px',
                    background: '#1a0505',
                    borderRadius: 14,
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 215, 0, 0.2)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  {v.embedUrl ? (
                    <iframe
                      title={v.title}
                      src={v.embedUrl}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ width: '100%', height: '100%', border: '0', background: '#1a0505' }}
                      loading="lazy"
                    />
                  ) : v.youtube ? (
                    <iframe
                      title={v.title}
                      src={isExpanded ? `https://www.youtube.com/embed/${v.src}?autoplay=1&rel=0` : `https://www.youtube.com/embed/${v.src}?rel=0`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ width: '100%', height: '100%', border: '0', background: '#1a0505' }}
                      loading="lazy"
                    />
                  ) : (
                    <video
                      controls
                      preload="metadata"
                      poster={v.poster}
                      style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#1a0505' }}
                    >
                      <source src={v.src} />
                      Your browser does not support the video tag.
                    </video>
                  )}
                  {v.youtube && (
                    <button
                      type="button"
                      onClick={() => setActive(prev => prev === v.id ? null : v.id)}
                      style={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        background: 'rgba(153, 27, 27, 0.85)',
                        color: '#ffd700',
                        border: '1px solid rgba(255, 215, 0, 0.4)',
                        padding: '.45rem .8rem',
                        fontSize: '.75rem',
                        fontWeight: 700,
                        borderRadius: 8,
                        cursor: 'pointer'
                      }}
                    >
                      {isExpanded ? 'Pause' : 'Play'}
                    </button>
                  )}
                </div>

                {/* Subtitle / Topic */}
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#fef08a' }}>
                  {v.title}
                </div>

                {/* Description */}
                {v.description && (
                  <p style={{ margin: 0, fontSize: '.9rem', lineHeight: 1.55, color: '#fdfbf7', opacity: 0.95 }}>
                    {v.description}
                  </p>
                )}

                {/* ABHA Testimonial Badge */}
                <div style={{ marginTop: 'auto', paddingTop: '.5rem', display: 'flex', alignItems: 'center' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      background: 'rgba(255, 215, 0, 0.12)',
                      border: '1px solid rgba(255, 215, 0, 0.3)',
                      color: '#ffd700',
                      padding: '4px 12px',
                      borderRadius: 20,
                      fontSize: '.7rem',
                      fontWeight: 800,
                      letterSpacing: '.12em'
                    }}
                  >
                    ABHA TESTIMONIAL
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
