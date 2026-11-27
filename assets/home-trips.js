/* EQ Home Travel · group archives according to each trip's local calendar dates. */
(() => {
  'use strict';
  const source = document.getElementById('trip-archive-source');
  const upcoming = document.getElementById('upcoming-list');
  const past = document.getElementById('past-list');
  if (!source || !upcoming || !past) return;
  const localDate = new Date();
  const today = [localDate.getFullYear(), String(localDate.getMonth()+1).padStart(2,'0'), String(localDate.getDate()).padStart(2,'0')].join('-');
  const trips = Array.from(source.querySelectorAll('a.trip-tile')).filter(el => /^\d{4}-\d{2}-\d{2}$/.test(el.dataset.start || '') && /^\d{4}-\d{2}-\d{2}$/.test(el.dataset.end || ''));
  const futureTrips = trips.filter(el => el.dataset.end >= today).sort((x,y)=>x.dataset.start.localeCompare(y.dataset.start));
  const pastTrips = trips.filter(el => el.dataset.end < today).sort((x,y)=>x.dataset.start.localeCompare(y.dataset.start));
  futureTrips.forEach(el => upcoming.appendChild(el));
  pastTrips.forEach(el => past.appendChild(el));
  document.getElementById('upcoming-count').textContent = futureTrips.length + ' TRIPS';
  document.getElementById('past-count').textContent = pastTrips.length + ' TRIPS';
  document.getElementById('upcoming-empty').hidden = futureTrips.length !== 0;
  source.remove();
})();
