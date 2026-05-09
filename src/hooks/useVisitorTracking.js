import { useEffect } from 'react'
import { supabase } from '../lib/supabase'

/**
 * Drop this hook in your top-level App component (or layout).
 * It fires once per browser session and silently logs the visitor's location.
 *
 * Usage:
 *   import { useVisitorTracking } from './hooks/useVisitorTracking'
 *   function App() {
 *     useVisitorTracking()
 *     return <YourApp />
 *   }
 */
export function useVisitorTracking() {
  useEffect(() => {
    const track = async () => {
      // Skip in local dev so you don't pollute your data
      if (import.meta.env.DEV) return

      // Only track once per browser session
      if (sessionStorage.getItem('_pv_tracked')) return

      try {
        const res = await fetch('https://ipapi.co/json/')
        if (!res.ok) return
        const geo = await res.json()

        // ipapi returns an error object if the IP can't be geolocated
        if (geo.error) return

        await supabase.from('portfolio_visits').insert({
          ip:           geo.ip,
          city:         geo.city         || null,
          region:       geo.region       || null,
          country:      geo.country_name || null,
          country_code: geo.country_code || null,
          latitude:     geo.latitude     || null,
          longitude:    geo.longitude    || null,
          timezone:     geo.timezone     || null,
          org:          geo.org          || null,   // ISP / company
          page:         window.location.pathname,
          referrer:     document.referrer || null,
          user_agent:   navigator.userAgent,
        })

        sessionStorage.setItem('_pv_tracked', '1')
      } catch {
        // Never crash the portfolio over a tracking failure
      }
    }

    track()
  }, [])
}