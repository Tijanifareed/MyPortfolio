import { useState, useEffect, useMemo } from 'react'
import { supabase } from '../lib/supabase'

/* ─── tiny country-code → flag emoji helper ─────────────────────────── */
const flag = (cc) =>
  cc
    ? String.fromCodePoint(
        ...[...cc.toUpperCase()].map((c) => 0x1f1e6 - 65 + c.charCodeAt(0))
      )
    : '🌐'

/* ─── simple bar rendered in pure CSS ───────────────────────────────── */
function Bar({ value, max, color = '#00ff9d' }) {
  const pct = max ? Math.round((value / max) * 100) : 0
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <div
        style={{
          flex: 1,
          height: 6,
          background: '#1a1a1a',
          borderRadius: 3,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: `${pct}%`,
            height: '100%',
            background: color,
            borderRadius: 3,
            transition: 'width 0.6s cubic-bezier(.22,1,.36,1)',
          }}
        />
      </div>
      <span style={{ fontSize: 11, color: '#555', minWidth: 28, textAlign: 'right' }}>
        {value}
      </span>
    </div>
  )
}

/* ─── stat card ─────────────────────────────────────────────────────── */
function StatCard({ label, value, accent = '#00ff9d' }) {
  return (
    <div
      style={{
        background: '#111',
        border: '1px solid #222',
        borderRadius: 8,
        padding: '16px 20px',
        flex: 1,
        minWidth: 120,
      }}
    >
      <div style={{ fontSize: 11, color: '#555', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 6 }}>
        {label}
      </div>
      <div style={{ fontSize: 28, fontWeight: 700, color: accent, fontFamily: 'monospace' }}>
        {value}
      </div>
    </div>
  )
}

/* ─── simple relative-time helper ───────────────────────────────────── */
function timeAgo(iso) {
  const diff = Date.now() - new Date(iso).getTime()
  const m = Math.floor(diff / 60000)
  if (m < 1) return 'just now'
  if (m < 60) return `${m}m ago`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h}h ago`
  return `${Math.floor(h / 24)}d ago`
}

/* ═══════════════════════════════════════════════════════════════════════
   MAIN DASHBOARD
═══════════════════════════════════════════════════════════════════════ */
const DASHBOARD_PIN = import.meta.env.VITE_DASHBOARD_PIN || '0000'

export default function VisitorDashboard() {
  const [authed, setAuthed] = useState(false)
  const [pin, setPin] = useState('')
  const [error, setError] = useState('')
  const [visits, setVisits] = useState([])
  const [loading, setLoading] = useState(false)
  const [tab, setTab] = useState('recent') // 'recent' | 'countries' | 'referrers'

  /* ── auth ── */
  const login = () => {
    if (pin === DASHBOARD_PIN) {
      setAuthed(true)
      setError('')
    } else {
      setError('Wrong PIN.')
      setPin('')
    }
  }

  /* ── fetch ── */
  useEffect(() => {
    if (!authed) return
    setLoading(true)
    supabase
      .from('portfolio_visits')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(1000)
      .then(({ data, error: err }) => {
        if (!err) setVisits(data || [])
        setLoading(false)
      })
  }, [authed])

  /* ── derived stats ── */
  const stats = useMemo(() => {
    const uniqueCountries = new Set(visits.map((v) => v.country).filter(Boolean))
    const uniqueCities    = new Set(visits.map((v) => v.city).filter(Boolean))
    const uniqueIPs       = new Set(visits.map((v) => v.ip).filter(Boolean))

    const countryCount = {}
    const referrerCount = {}
    visits.forEach((v) => {
      if (v.country) countryCount[v.country] = (countryCount[v.country] || 0) + 1
      const ref = v.referrer
        ? (() => { try { return new URL(v.referrer).hostname } catch { return v.referrer } })()
        : 'Direct'
      referrerCount[ref] = (referrerCount[ref] || 0) + 1
    })

    const topCountries = Object.entries(countryCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
    const topReferrers = Object.entries(referrerCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)

    return { uniqueCountries: uniqueCountries.size, uniqueCities: uniqueCities.size, uniqueIPs: uniqueIPs.size, topCountries, topReferrers }
  }, [visits])

  /* ════════════════════════════ LOGIN SCREEN ════════════════════════ */
  if (!authed) {
    return (
      <div
        style={{
          minHeight: '100vh',
          background: '#0a0a0a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: '"Courier New", monospace',
        }}
      >
        <div
          style={{
            background: '#111',
            border: '1px solid #222',
            borderRadius: 12,
            padding: '40px 48px',
            width: 320,
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: 32, marginBottom: 8 }}>🔒</div>
          <div style={{ color: '#00ff9d', fontSize: 13, letterSpacing: '0.15em', marginBottom: 28 }}>
            PORTFOLIO ANALYTICS
          </div>
          <input
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && login()}
            placeholder="Enter PIN"
            style={{
              width: '100%',
              background: '#0a0a0a',
              border: '1px solid #2a2a2a',
              borderRadius: 6,
              color: '#fff',
              padding: '10px 14px',
              fontSize: 18,
              letterSpacing: '0.3em',
              textAlign: 'center',
              outline: 'none',
              boxSizing: 'border-box',
              marginBottom: 12,
            }}
            autoFocus
          />
          {error && (
            <div style={{ color: '#ff4d4d', fontSize: 12, marginBottom: 10 }}>{error}</div>
          )}
          <button
            onClick={login}
            style={{
              width: '100%',
              background: '#00ff9d',
              border: 'none',
              borderRadius: 6,
              color: '#000',
              padding: '10px',
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '0.1em',
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            ENTER
          </button>
        </div>
      </div>
    )
  }

  /* ════════════════════════════ DASHBOARD ═══════════════════════════ */
  const accentGreen  = '#00ff9d'
  const accentAmber  = '#f5a623'
  const accentBlue   = '#4da6ff'

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0a0a0a',
        color: '#ccc',
        fontFamily: '"Courier New", monospace',
        padding: '32px 24px',
        maxWidth: 900,
        margin: '0 auto',
        boxSizing: 'border-box',
      }}
    >
      {/* header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 28, flexWrap: 'wrap', gap: 12 }}>
        <div>
          <div style={{ color: accentGreen, fontSize: 11, letterSpacing: '0.2em', marginBottom: 4 }}>
            PORTFOLIO ANALYTICS
          </div>
          <h1 style={{ margin: 0, fontSize: 22, color: '#fff', fontWeight: 700 }}>
            Visitor Insights
          </h1>
        </div>
        <div style={{ fontSize: 11, color: '#444' }}>
          {loading ? '⟳ loading...' : `${visits.length} total visits logged`}
        </div>
      </div>

      {/* stat cards */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 28, flexWrap: 'wrap' }}>
        <StatCard label="Total Visits"      value={visits.length}          accent={accentGreen} />
        <StatCard label="Unique Visitors"   value={stats.uniqueIPs}        accent={accentAmber} />
        <StatCard label="Countries"         value={stats.uniqueCountries}  accent={accentBlue}  />
        <StatCard label="Cities"            value={stats.uniqueCities}     accent="#c084fc"     />
      </div>

      {/* tab bar */}
      <div style={{ display: 'flex', gap: 0, marginBottom: 20, borderBottom: '1px solid #1e1e1e' }}>
        {['recent', 'countries', 'referrers'].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              background: 'none',
              border: 'none',
              borderBottom: tab === t ? `2px solid ${accentGreen}` : '2px solid transparent',
              color: tab === t ? accentGreen : '#444',
              padding: '8px 20px',
              fontSize: 11,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              fontFamily: 'inherit',
              marginBottom: -1,
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* ── tab: recent visits ── */}
      {tab === 'recent' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {visits.length === 0 && !loading && (
            <div style={{ color: '#444', fontSize: 13, padding: '32px 0', textAlign: 'center' }}>
              No visits yet. Share your portfolio!
            </div>
          )}
          {visits.map((v, i) => (
            <div
              key={v.id || i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '10px 14px',
                background: i % 2 === 0 ? '#0e0e0e' : 'transparent',
                borderRadius: 4,
                fontSize: 12,
                flexWrap: 'wrap',
              }}
            >
              <span style={{ fontSize: 18, lineHeight: 1 }}>{flag(v.country_code)}</span>
              <span style={{ color: '#fff', minWidth: 130 }}>
                {v.city ? `${v.city}, ` : ''}{v.country || 'Unknown'}
              </span>
              <span style={{ color: '#444', flex: 1 }}>{v.org || ''}</span>
              <span style={{ color: '#555', fontSize: 11, whiteSpace: 'nowrap' }}>
                {v.created_at ? timeAgo(v.created_at) : ''}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* ── tab: countries ── */}
      {tab === 'countries' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {stats.topCountries.map(([country, count]) => {
            const cc = visits.find((v) => v.country === country)?.country_code
            return (
              <div key={country} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontSize: 18 }}>{flag(cc)}</span>
                <span style={{ color: '#fff', width: 160, fontSize: 13 }}>{country}</span>
                <div style={{ flex: 1 }}>
                  <Bar value={count} max={stats.topCountries[0]?.[1]} color={accentGreen} />
                </div>
              </div>
            )
          })}
          {stats.topCountries.length === 0 && (
            <div style={{ color: '#444', fontSize: 13, padding: '32px 0', textAlign: 'center' }}>
              No data yet.
            </div>
          )}
        </div>
      )}

      {/* ── tab: referrers ── */}
      {tab === 'referrers' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {stats.topReferrers.map(([ref, count]) => (
            <div key={ref} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ color: '#fff', width: 200, fontSize: 13, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {ref}
              </span>
              <div style={{ flex: 1 }}>
                <Bar value={count} max={stats.topReferrers[0]?.[1]} color={accentAmber} />
              </div>
            </div>
          ))}
          {stats.topReferrers.length === 0 && (
            <div style={{ color: '#444', fontSize: 13, padding: '32px 0', textAlign: 'center' }}>
              No data yet.
            </div>
          )}
        </div>
      )}

      <div style={{ marginTop: 48, fontSize: 10, color: '#2a2a2a', textAlign: 'center', letterSpacing: '0.1em' }}>
        POWERED BY IPAPI.CO + SUPABASE
      </div>
    </div>
  )
}