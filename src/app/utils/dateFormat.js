export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('sl-SI', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).replace(/\./g, '.');
}; 